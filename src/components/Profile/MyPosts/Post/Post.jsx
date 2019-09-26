import React from 'react';
import classes from'./Post.module.css';

const Post = (props) => {
    console.log(props);
    return (
        <div className={classes.item}>
            <img src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" alt=""/>
            {props.message}
            <div>
                <span>like{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;