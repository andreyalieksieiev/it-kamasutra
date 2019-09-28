import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, ho are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 1, message: "fhjgff", likesCount: 12},
        {id: 1, message: "rrrrrrrr", likesCount: 13},
        {id: 1, message: "qqqqqqq", likesCount: 12}
    ]

    let postsElement = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;