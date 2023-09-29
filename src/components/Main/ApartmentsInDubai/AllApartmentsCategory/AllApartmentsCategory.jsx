import React from 'react';
import st from './AllApartmentsCategory.module.css';
import {ReactComponent as ArrowLeft} from "./../../../../assets/img/Arrow-rite.svg";
import {ReactComponent as ArrowRite} from "./../../../../assets/img/Arrow-left.svg";
import {CategoryTownhouse} from "./CategoryCards/CategoryTownhouse";
import {CategoryVilla} from "./CategoryCards/CategoryVilla";
import {CategoryCommercial} from "./CategoryCards/CategoryCommercial";
import {CategoryApartments} from "./CategoryCards/CategoryApartments";

export const AllApartmentsCategory = ({}) => {
    console.log('AllApartmentsCategory')

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
                <div className={st.pictures}><CategoryTownhouse/></div>
                <div className={st.pictures}><CategoryVilla/></div>
                <div className={st.pictures}><CategoryCommercial/></div>
                <div className={st.pictures}><CategoryApartments/></div>
                <div className={st.arrow}><ArrowLeft/></div>
            </div>
        </div>
    );
}
