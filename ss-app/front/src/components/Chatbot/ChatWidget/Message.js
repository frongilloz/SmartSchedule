import React from 'react';
import './Message.css';
import Linkify from 'react-linkify';

function Message(props) {
    // const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  
    return (
        <div>
            <div id='name'>{props.who}</div>
            <div className='textField'>
                <Linkify>{props.text}</Linkify>
            </div>
        </div>
    )
}

export default Message