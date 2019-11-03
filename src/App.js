import React from 'react';
import {Wrapper, Wrap} from './styled';

import { Route } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
            <Wrapper>
                <HeaderContainer />
                <Navbar />
                <Wrap>
                    <Route path="/dialogs" render={ () =>  <DialogsContainer /> }/>
                    <Route path="/profile/:userId?" render={ () =>  <ProfileContainer  /> }/>
                    <Route path="/users" render={ () =>  <UsersContainer /> }/>
                </Wrap>
            </Wrapper>
    )
}

export default App;

