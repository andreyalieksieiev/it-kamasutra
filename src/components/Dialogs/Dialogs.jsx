import React from 'react'
import { Dial } from './styled';

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d  => <DialogItem id={d.id} key={d.id} name={d.name} />);
    let messagesElement = state.messages.map( m => <Message  id={m.id} message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <Dial>
            <div>
                { dialogsElements }
            </div>
            <div>
                <div>{ messagesElement }</div>
                <div>
                    <div><textarea onChange={ onNewMessageChange } value={ newMessageBody } placeholder="Enter your message "></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </Dial>
    ) 
}

export default Dialogs;