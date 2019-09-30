import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ( props ) => {
    let postsElement = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef(); 

    let addPost = ()  => {
        debugger;
        let text = newPostElement.current.value

        props.addPost(text)
    }  

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;