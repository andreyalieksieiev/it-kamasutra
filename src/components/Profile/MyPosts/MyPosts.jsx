import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ( props ) => {
    let postsElement = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef(); 

    let addPost = ()  => {
        props.dispatch({ type: "ADD-POST"});
    }  

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea 
                        onChange={ onPostChange } 
                        ref={ newPostElement }
                        value={props.newPostText} />
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