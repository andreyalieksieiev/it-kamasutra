import React from 'react';
import classes from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://oboi-dlja-stola.ru/file/17460/760x0/16:9/%D0%A4%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                java + description
            </div>
        </div>
    )
}

export default ProfileInfo;