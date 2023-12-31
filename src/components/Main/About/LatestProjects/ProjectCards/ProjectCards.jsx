import React, {useState} from 'react';
import st from './ProjectCard.module.css';
import cn from "classnames";
import {ReactComponent as Singh} from "../../../../../assets/img/Arrow.svg";


export const ProjectCards = ({title, text, index, picture}) => {
    const [showText, setShowText] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null)


    const handleClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index))
        // {activeIndex === index  && setShowText(false) = false : true }
        setShowText(prev => !prev)
    }
    const contentClassName = cn(st.card, {[st.showText]: showText})

    return (
        <div>
            <div className={contentClassName}>

                <div className={st.card_name} onClick={() => handleClick(index)}>
                    {title}
                </div>
                <div className={st.text}>
                    {text}
                </div>
                <div className={st.card_linK}>See project<Singh/></div>
            </div>
        </div>

    );
}
