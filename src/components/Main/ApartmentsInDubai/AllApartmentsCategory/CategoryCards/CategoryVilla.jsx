import React from 'react';
import st from './categoryCards.module.css';
import cn from "classnames";
import LearnMore from "../../../Blog/LearnMore";
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";

export const CategoryVilla = ({}) => {
    console.log('CategoryVilla')

    return (
        <div className={cn(st.villa, st.general)}>
            <p>Villa</p>
            <MoreLink path={'#'} className={st.category_link}/>
        </div>
    );
}
