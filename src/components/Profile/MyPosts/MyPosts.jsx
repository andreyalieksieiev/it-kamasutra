import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, ho are you?" />
                <Post message="It's my first post" /> 
            </div>
        </div>
    )
}

export default MyPosts;