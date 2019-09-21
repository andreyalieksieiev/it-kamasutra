import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>add</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, ho are you?" />
                <Post message="It's my first post"/> 
            </div>
        </div>
    )
}

export default MyPosts;