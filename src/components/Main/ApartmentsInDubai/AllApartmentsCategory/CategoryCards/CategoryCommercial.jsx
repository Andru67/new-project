import React from 'react';
import st from './categoryCards.module.css'
import cn from "classnames";
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";

export const CategoryCommercial = ({}) => {

    return (
        <div className={st.pictures}>
            <div className={cn(st.commercial, st.general)}>
                <p>Commercial</p>
                <MoreLink path={'#'} className={st.category_link}/>
            </div>
        </div>

    );
}
