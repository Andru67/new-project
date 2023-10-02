import React from 'react';
import st from './AllApartmentsCategory.module.css';
import {ReactComponent as ArrowLeft} from "./../../../../assets/img/Arrow-rite.svg";
import {ReactComponent as ArrowRite} from "./../../../../assets/img/Arrow-left.svg";
import {CategoryTownhouse} from "./CategoryCards/CategoryTownhouse";
import {CategoryVilla} from "./CategoryCards/CategoryVilla";
import {CategoryCommercial} from "./CategoryCards/CategoryCommercial";
import {CategoryApartments} from "./CategoryCards/CategoryApartments";

export const AllApartmentsCategory = ({}) => {

    return (
        <div>
            <div className={st.title}>
                All Apartments
            </div>
            <div className={st.title}>
                Category
            </div>
            <div className={st.slider}>
                <div className={st.arrow}><ArrowRite/></div>
                <div><CategoryTownhouse/></div>
                <div><CategoryVilla/></div>
                <div><CategoryCommercial/></div>
                <div><CategoryApartments/></div>
                <div className={st.arrow}><ArrowLeft/></div>
            </div>
        </div>
    );
}
