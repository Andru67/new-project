import React from 'react';
import st from './ProjectCard.module.css';
import cn from "classnames";
import {ProjectCards} from "./ProjectCards";

export const ProjectCard_6 = ({}) => {
    const title = 'Villas'
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat ' +
        'molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.'
    return (
        <div className={cn(st.wrap, st.background_card_1)}>
                <ProjectCards title={title} text={text}/>
        </div>
    );
}
