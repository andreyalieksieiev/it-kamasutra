import React from 'react';
import { PostsBlock, Pos} from './styled';
import Post from './Post/Post';

const MyPosts = ( props ) => {
    let postsElement = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef(); 

    let onAddPost = ()  => {
        props.addPost();
       
    }  

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <PostsBlock>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea 
                        onChange={ onPostChange } 
                        ref={ newPostElement }
                        value={ props.newPostText } />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <Pos>
                { postsElement }
            </Pos>
        </PostsBlock>
    )
}

export default MyPosts;