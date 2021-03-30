import React, { Component, useState ,useEffect } from 'react';
import axios from 'axios';
import './chatWidget.css';



function ChatWidget() {

    const [chatWindow, setChatWindow] = React.useState(false);

    // const toggleWindow = () => {
    //     setChatWindow({chatWindow: !chatWindow})
    // }

    function clickHandler(){
        console.log('Chat Button Clicked');
        setChatWindow(!chatWindow)
    }

    if(chatWindow){
        return (
            <div>
                <div className={'chatView'}>
                    <div className={'chatBar'}> </div>
                    <input className={'chatInput'}
                        //    onKeyPress={keyPressHandler}
                           placeholder='Type ypur message...'>
                    </input>

                </div>

                <button 
                onClick={clickHandler}
                className={'chat-button'}>
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
                className={'chat-button'}>
                    <i className='fa fa fa-comment-o fa-stack-3x fa-2x' ></i>
                </button>
            </div>
        )
    }
}

// const textQuery = async (text) => {
//     let conversation = {
//         who: 'user',
//         content: {
//             text: {
//                 text: text
//             }
//         }
//     }

//     const textQueryVariables = {
//         text
//     }

//     try {
//         const response = await axios.post('api/dialogflow/textQuery', textQueryVariables)
//         for (let content of response.data.fulfillmentMessages) {

//             conversation = {
//                 who: 'Albert',
//                 content: content
//             }

//             // dispatch(saveMessage(conversation))
//         }
  
//       } catch (error) {
//         conversation = {
//             who: 'Albert',
//             content: {
//                 text: {
//                     text: " Error just occured, please check the problem"
//                 }
//             }
//         }

//         // dispatch(saveMessage(conversation))


//     }

// }

// const eventQuery = async (event) => {

//     const eventQueryVariables = {
//         event
//     }

//     try {
//         const response = await axios.post('api/dialogflow/eventQuery', eventQueryVariables)
//         for (let content of response.data.fulfillmentMessages) {

//             let conversation = {
//                 who: 'Albert',
//                 content: content
//             }

//             console.log(conversation);

//             // dispatch(saveMessage(conversation))
//         }
  
//       } catch (error) {
//         let conversation = {
//             who: 'Albert',
//             content: {
//                 text: {
//                     text: " Error just occured, please check the problem"
//                 }
//             }
//         }

//         // dispatch(saveMessage(conversation))
//     }

// }

// const keyPressHandler = (e) =>{
//     if (e.key === "Enter") {

//         if (!e.target.value) {
//             // Instead do nothing and wait/make input box border red
//             return alert('Please type something.')
//         }

//         //textQuery Route 
//         // textQuery(e.target.value)

//         e.target.value = "";
//     }
// }


export default ChatWidget;

