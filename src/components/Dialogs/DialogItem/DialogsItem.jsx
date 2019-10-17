import React from 'react'
import { Item } from './styled';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <Item>
            <NavLink to={path}>{props.name}</NavLink>
        </Item>
    )
};


export default DialogItem;
