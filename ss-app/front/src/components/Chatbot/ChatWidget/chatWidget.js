import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../_actions/message-actions';
import Message from './Message';
import './chatWidget.css';

var count = 0;

function ChatWidget() {

    const dispatch = useDispatch();
    const messagesFromRedux = useSelector(state => state.message.messages);

    //State for the ChatWindow: Closed(false)/Open(true)
    const [chatWindow, setChatWindow] = useState(false);

    //TextQuery Route for user input
    const textQuery = async (text) => {

        var d = new Date();

        //Message sent by the user
        let conversation = {
            who: 'User',
            content: {
                text: {
                    text: text
                }
            },
            date: `${d.getHours()}:${d.getMinutes()}`,
            isBot: false
        }

        // console.log(conversation);
        dispatch(saveMessage(conversation));
    
        const textQueryVariables = {
            text
        }
    
        try {
            //Query to the Dialogflow API
            const response = await axios.post('api/dialogflow/textQuery', textQueryVariables)
            for (let content of response.data.fulfillmentMessages) {
                
                var d = new Date();

                conversation = {
                    who: 'Albert',
                    content: content,
                    date: `${d.getHours()}:${d.getMinutes()}`,
                    isBot: true
                }
    
                // console.log(conversation);
                dispatch(saveMessage(conversation));
            }
      
          } catch (error) {
            conversation = {
                who: 'Albert',
                content: {
                    text: {
                        text: "Error: Problem with textQuery()"
                    }
                },
                isBot: true
            }
    
            dispatch(saveMessage(conversation));
    
    
        }
    
    }

    //eventQuery Route for Events (non-user input)
    const eventQuery = async (event) => {
    
        const eventQueryVariables = {
            event
        }
    
        try {
            const response = await axios.post('api/dialogflow/eventQuery', eventQueryVariables)
            for (let content of response.data.fulfillmentMessages) {
    
                var d = new Date();

                let conversation = {
                    who: 'Albert',
                    content: content,
                    date: `${d.getHours()}:${d.getMinutes()}`,
                    isBot: true
                }
    
                // console.log(conversation);
                // console.log(conversation.content.text.text[0]);
                dispatch(saveMessage(conversation));
            }
      
          } catch (error) {
            let conversation = {
                who: 'Albert',
                content: {
                    text: {
                        text: "Error: Problem with eventQuery()"
                    }
                },
                isBot: true
            }
            dispatch(saveMessage(conversation));
        }
    
    }

    const keyPressHandler = (e) =>{
        if (e.key === "Enter") {
    
            if (!e.target.value) {
                // Instead do nothing and wait/make input box border red
                return alert('Please type something.')
            }
    
            //textQuery Route 
            textQuery(e.target.value);

            e.target.value = "";
        }
    }

    function clickHandler(){
        count++; 
        console.log('Chat Button Clicked');
        setChatWindow(!chatWindow);
        console.log(count);
        var d = new Date();
        console.log(`${d.getHours()}:${d.getMinutes()}`);
        if(count == 1){
            eventQuery('Welcome');
        }
    }

    const renderOneMessage = (message, i) => {
        console.log('message', message)
 
        //Template for normal text 
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        }
    }

    const renderMessage = (returnedMessages) => {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    }

    if(chatWindow){
        return (
            <div>
                <div className='chatWindow' id='chatScroll'>

                    <input type='text' className='chatInput'
                    onKeyPress={keyPressHandler}
                    placeholder='Type your message...'>
                    </input>

                    <div className='chatBar'> 
                    </div>

                    <div className='bottomBar'> 
                    </div>

                    <div id='chatView'>
                        <div>
                            {renderMessage(messagesFromRedux)}
                        </div>
                    </div>

                </div>

                <button 
                onClick={clickHandler}
                className='chat-button'>
                    <i className='fa fa fa-times fa-stack-3x fa-2x' ></i>
                </button>
            </div>
        )
    }
    else{
        return (
            <div>
                <button 
                onClick={clickHandler}
                className='chat-button'>
                    <i className='fa fa fa-comment-o fa-stack-3x fa-2x' ></i>
                </button>
            </div>
        )
    }
}

export default ChatWidget;