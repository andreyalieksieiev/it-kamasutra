import React from 'react';
import {Wrapper, Wrap} from './styled';

import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
            <Wrapper>
                <Header />
                <Navbar />
                <Wrap>
                    <Route path="/dialogs" render={ () =>  <DialogsContainer /> }/>
                    <Route path="/profile" render={ () =>  <Profile  /> }/>
                    <Route path="/users" render={ () =>  <UsersContainer /> }/>
                </Wrap>
            </Wrapper>
    )
}

export default App;

