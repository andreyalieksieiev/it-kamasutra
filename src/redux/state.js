import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, ho are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 1, message: "fhjgff", likesCount: 12},
            {id: 1, message: "rrrrrrrr", likesCount: 13}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
        ]
    }
}

export let addPost = () => {
    let newPost= {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount:0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;