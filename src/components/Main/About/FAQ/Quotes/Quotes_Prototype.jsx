import React, {useState} from 'react';
import st from './collaps.module.css';
import cn from "classnames";
import {ReactComponent as Sign} from './../../../../../assets/img/Arrow.svg';


export const Quotes_Prototype = ({label, text, id}) => {
    const [showText, setShowText] = useState(false)
    const [turnSing, setTurnSing] = useState(false)
    // const [id, setId] = useState(0)

    const handleClick = (id) => {
        setShowText(prev => !prev)
        setTurnSing(prev => !prev)
    }
    const contentClassName = cn(st.text, {[st.showText]: showText})
    const contentClassName2 = cn(st.sing, {[st.turnSing]: turnSing})
    console.log(showText)
    // console.log(turnSing)
    console.log(id)

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
