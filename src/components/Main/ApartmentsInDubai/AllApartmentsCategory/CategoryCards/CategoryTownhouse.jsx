import React from 'react';
import st from './categoryCards.module.css';
import cn from 'classnames'
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";

export const CategoryTownhouse = ({}) => {
    console.log('CategoryTownhouse')

    return (
        <div className={cn(st.townhouse, st.general)}>
            <p>Townhouse</p>
            <MoreLink path={'#'} className={st.category_link}/>
        </div>
    );
}
