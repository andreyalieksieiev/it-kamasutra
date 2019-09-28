import React from 'react'
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
];

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
];

let dialogsElements = dialogs.map( d  => <DialogItem id={d.id} name={d.name} />);

let messagesElement = messages.map( m => <Message  id={m.id} message={m.message} /> );

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElement }
            </div>
        </div>
    ) 
}

export default Dialogs;