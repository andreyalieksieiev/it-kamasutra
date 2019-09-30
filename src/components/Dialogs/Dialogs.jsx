import React from 'react'
import classes from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d  => <DialogItem id={d.id} name={d.name} />);
    let messagesElement = props.state.messages.map( m => <Message  id={m.id} message={m.message} /> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElement }
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
    ) 
}

export default Dialogs;