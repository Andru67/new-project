import React, {useState} from 'react';
import st from './ProjectCard.module.css';
import cn from "classnames";
import {ReactComponent as Singh} from "../../../../../assets/img/Arrow.svg";

export const ProjectCard_4 = ({}) => {
    const [showText, setShowText] = useState(false);

    const contentClassName = cn(st.card, {[st.showText]: showText})
    const handleClick = () => {
        setShowText(prev => !prev)
    }

    return (
        <div className={cn(st.wrap, st.background_card_4)}>
            <div className={contentClassName}>
                <div className={st.card_name} onClick={handleClick}>
                    Villas
                </div>
                <div className={st.text}>
                    <d>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer
                        aliquam consectetur. Faucibus vitae dui massa tellus magna sit.
                    </d>
                </div>
                <div className={st.card_linK}>See project<Singh /></div>
            </div>
        </div>
    );
}
