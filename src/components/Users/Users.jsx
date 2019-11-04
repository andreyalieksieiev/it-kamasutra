import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Spa } from './styled';
import userPhoto from '../../assets/images/user.png';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map( p => {
                return <Spa onClick={(e) => {props.onPageChanged(p)}} >{p}</Spa>
            })}
        </div>
    {
    props.users.map(u => <div key={u.id} >
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <User src={ u.photos.small !=null ? u.photos.small :  userPhoto} />
                </NavLink>
            </div>
            <div>
                { u.followed 
                    ? <button onClick={() => { 
                        
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "JFHBl-kufu658rtf-i658-ogig8"
                            }
                        })
                        .then(response => {
                           if (response.data.resultCode == 0) {
                             props.unfollow(u.id);
                           };
                        });

                         }} >Unfollow</button> 
                    : <button onClick={() => {

                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "JFHBl-kufu658rtf-i658-ogig8"
                            }
                        })
                        .then(response => {
                           if (response.data.resultCode == 0) {
                            props.follow(u.id);
                           };
                        });

                         }} >Follow</button> }
            </div>
        </span>
        <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </span>
    </div>)
    }
    </div>
}

export default Users;