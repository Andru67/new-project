import React, {useState} from 'react';
import st from './ProjectCard.module.css';
import cn from "classnames";
import {ReactComponent as Singh} from "../../../../../assets/img/Arrow.svg";
import {ProjectCards} from "./ProjectCards";

export const ProjectCard_3 = ({}) => {
    const title = 'Houses'
    const text ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie ' +
        'integeraliquam consectetur. Faucibus vitae dui massa tellus magna sit.'
    return (
        <div className={cn(st.wrap, st.background_card_3)}>
            <ProjectCards title={title} text={text}/>
        </div>

    );
}
