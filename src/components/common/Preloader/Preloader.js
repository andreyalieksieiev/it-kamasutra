import React from 'react';
import preloader from '../../../assets/images/spinner.svg';

let Preloader = (props) => {
    return <div>
            <img src={preloader} style={{ backgroundColor: "white"}} />
        </div>
}

export default Preloader;