import React from 'react'
import { Mes } from './styled';

const Message = (props) => {
    return (
        <Mes>
            {props.message}
        </Mes>
    )
};

export default Message;