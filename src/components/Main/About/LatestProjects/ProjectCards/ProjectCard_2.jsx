import React from 'react';
import st from './ProjectCard.module.css';
import cn from "classnames";
import {ProjectCards} from "./ProjectCards";

export const ProjectCard_2 = ({}) => {
    const index = 2
    const title = 'Dudai'
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie ' +
        'integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.'
    return (
        <div className={cn(st.wrap, st.background_card_2)}>
            <ProjectCards title={title} text={text} index={index}/>
        </div>
    );
}
