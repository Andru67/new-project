import React, {useState} from 'react';
import st from './collaps.module.css';
import cn from "classnames";
import {ReactComponent as Sign} from './../../../../../assets/img/Arrow.svg';


export const Quotes_Prototype = ({label, text}) => {
    const [showText, setShowText] = useState(false)
    const [turnSing, setTurnSing] = useState(false)
    const handleClick = () => {
        setShowText(prev => !prev)
        setTurnSing(prev => !prev)
    }
    const contentClassName = cn(st.text, {[st.showText]: showText})
    const contentClassName2 = cn(st.sing, {[st.turnSing]: turnSing})

    return (
        <div className={st.wrapper}>
            <div className={st.label} onClick={handleClick} >
                {label}
                <Sign className={contentClassName2}/>
            </div>
            <div className={contentClassName}>
                    {text}
            </div>
        </div>

    );
}
