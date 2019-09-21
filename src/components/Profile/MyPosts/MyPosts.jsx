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
                <Post />
                <Post /> 
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;