import React from 'react';
import { Item, Img } from './styled';

const Post = (props) => {
    return (
        <Item>
            <Img src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </Item>
    )
}

export default Post;