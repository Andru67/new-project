import React from 'react';
import st from './aboutHeader.module.css'
import iconF from '../../../../assets/img/icons/icons-columm.svg'
import {SlicerAboutHeader} from "./SlicerAboutHeader/SlicerAboutHeader";


const AboutHeader = () => {
    return (
        <div className={st.about_header}>
            <img src={iconF} alt={''} className={st.about_header_icons}/>
            <SlicerAboutHeader/>
        </div>
    );
};

export default AboutHeader;