import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';
import './chatWidget.css';

var count = 0;

function ChatWidget() {

    // useEffect(() => {
    //     if({chatWelcome}){
    //         eventQuery('Welcome');
    //     }
    // }, [])

    const textQuery = async (text) => {

        //Message sent by the user
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text: text
                }
            }
        }

        console.log(conversation);
    
        const textQueryVariables = {
            text
        }
    
        try {
            //Query to the Dialogflow API
            const response = await axios.post('api/dialogflow/textQuery', textQueryVariables)
            for (let content of response.data.fulfillmentMessages) {
    
                conversation = {
                    who: 'Albert',
                    content: content
                }
    
                console.log(conversation);
                // dispatch(saveMessage(conversation))
            }
      
          } catch (error) {
            conversation = {
                who: 'Albert',
                content: {
                    text: {
                        text: "Error: Problem with textQuery()"
                    }
                }
            }
    
            // dispatch(saveMessage(conversation))
    
    
        }
    
    }
    
    const eventQuery = async (event) => {
    
        const eventQueryVariables = {
            event
        }
    
        try {
            const response = await axios.post('api/dialogflow/eventQuery', eventQueryVariables)
            for (let content of response.data.fulfillmentMessages) {
    
                let conversation = {
                    who: 'Albert',
                    content: content
                }
    
                console.log(conversation);
    
                // dispatch(saveMessage(conversation))
            }
      
          } catch (error) {
            let conversation = {
                who: 'Albert',
                content: {
                    text: {
                        text: "Error: Problem with eventQuery()"
                    }
                }
            }
    
            // dispatch(saveMessage(conversation))
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

    const [chatWindow, setChatWindow] = useState(false);

    
    
    function clickHandler(){
        count++; 
        console.log('Chat Button Clicked');
        setChatWindow(!chatWindow);
        console.log(count);
        if(count == 1){
            eventQuery('Welcome');
        }
    }

    if(chatWindow){
        return (
            <div>
                <div className='chatView'>
                    <div className='chatBar'> </div>
                    <input type='text' className='chatInput'
                           onKeyPress={keyPressHandler}
                           placeholder='Type your message...'>
                    </input>

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

