import React from 'react'
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/state';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d  => <DialogItem id={d.id} name={d.name} />);
    let messagesElement = state.messages.map( m => <Message  id={m.id} message={m.message} /> );
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElement }</div>
                <div>
                    <div><textarea onChange={ onNewMessageChange } value={ newMessageBody } placeholder="Enter your message "></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    ) 
}

export default Dialogs;