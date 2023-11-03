import React from 'react';
import st from './FAQ.module.css';
import {Quote_1} from "./Quotes/Quote_1";
import {Quote_2} from "./Quotes/Quote_2";
import {Quote_3} from "./Quotes/Quote_3";
import {Quote_4} from "./Quotes/Quote_4";
import {Quote_5} from "./Quotes/Quote_5";

export const FAQ = ({}) => {

    return (
        <div className={st.wrapper}>
            <div className={st.title}>FAQ</div>
                <Quote_1 />
                <Quote_2 />
                <Quote_3 />
                <Quote_4 />
                <Quote_5 />
        </div>
    );
}
