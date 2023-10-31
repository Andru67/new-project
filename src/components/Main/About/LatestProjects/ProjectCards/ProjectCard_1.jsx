import React, {useState} from 'react';
import st from './ProjectCard.module.css';
import cn from "classnames";
import {ReactComponent as Singh} from "../../../../../assets/img/Arrow.svg";

export const ProjectCard_1 = ({}) => {
    const [showText, setShowText] = useState(false);

    const contentClassName = cn(st.card, {[st.showText]: showText})
    const handleClick = () => {
        setShowText(prev => !prev)
    }

    return (
        <div className={cn(st.wrap, st.background_card_1)}>
            <div className={contentClassName}>
                <div className={st.card_name} onClick={handleClick}>
                    Villas
                </div>
                <div className={st.text}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer
                        aliquam consectetur. Faucibus vitae dui massa tellus magna sit.
                    </p>
                </div>
                <div className={st.card_linK}>See project<Singh /></div>
            </div>
        </div>

    );
}
