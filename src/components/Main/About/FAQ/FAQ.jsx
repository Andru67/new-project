import React from 'react';
import st from './FAQ.module.css';
import {Quotes} from "./Quotes/Quotes";

export const FAQ = ({}) => {

    return (
        <div className={st.wrapper}>
            <div className={st.title}>FAQ</div>
                <Quotes />
        </div>
    );
}
