import React from 'react';
import st from './videoPlayer.module.css';
import picture from './../../../../assets/img/category/category-img-2.png'

export const VideoPlayer = ({}) => {
// const picture = img

    return (
        <div className={st.player}>
            <div className={st.wrap}>
                <div className={st.text}>
                    This was play video
                </div>
                <img src={picture} alt={''} className={st.picture}/>
            </div>


        </div>
    );
}
