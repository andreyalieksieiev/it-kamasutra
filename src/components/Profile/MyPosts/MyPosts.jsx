import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ( props ) => {
    
    let postsElement = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

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