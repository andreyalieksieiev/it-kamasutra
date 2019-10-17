import React from 'react';
import { Nav } from './styled';

import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </Nav>
    )
}

export default Navbar;