import React from 'react';
import classes from'./Profile.module.css';

import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt=""/>
            </div>
            <div>
                java + description
                {/* <img src="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/tcl-4_reno-50-iotd.jpg"/> */}
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;