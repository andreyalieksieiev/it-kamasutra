import React from 'react';
import { Hed, Img, Log } from './styled';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <Hed>
            <Img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png" alt=""/>

            <Log>
                {props.asAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </Log>
        </Hed>
    )
}

export default Header;