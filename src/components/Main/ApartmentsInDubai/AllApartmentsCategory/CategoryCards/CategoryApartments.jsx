import React from 'react';
import st from './categoryCards.module.css';
import cn from "classnames";
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";

export const CategoryApartments = ({}) => {
    console.log('CategoryApartments')

    return (
        <div className={cn(st.apartments, st.general)}>
            <p>Apartments</p>
            <MoreLink path={'#'} className={st.category_link}/>
        </div>
    );
}
