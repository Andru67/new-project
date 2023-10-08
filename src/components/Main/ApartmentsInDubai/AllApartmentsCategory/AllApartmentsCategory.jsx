import React from 'react';
import st from './AllApartmentsCategory.module.css';
import {ReactComponent as ArrowLeft} from "./../../../../assets/img/Arrow-rite.svg";
import {ReactComponent as ArrowRite} from "./../../../../assets/img/Arrow-left.svg";
import {CategoryTownhouse} from "./CategoryCards/CategoryTownhouse";
import {CategoryVilla} from "./CategoryCards/CategoryVilla";
import {CategoryCommercial} from "./CategoryCards/CategoryCommercial";
import {CategoryApartments} from "./CategoryCards/CategoryApartments";
import NewTest from "./NewTest";
import {TestCard} from "./CategoryCards/Test/TestCard";
import {TestCard22} from "./CategoryCards/Test/2-TestCard";

export const AllApartmentsCategory = ({}) => {

    return (
        <div>
            <div className={st.title}>
                All Apartments
            </div>
            <div className={st.title}>
                Category
            </div>
            {/*<div className={st.slider}>
                <div className={st.arrow}><ArrowRite/></div>
                <div><TestCard/></div>
                <div><TestCard22/></div>
                <div><CategoryVilla/></div>
                <div><CategoryCommercial/></div>
                <div><CategoryApartments/></div>
                <div className={st.arrow}><ArrowLeft/></div>
            </div>*/}
            <div className={st.test}>
                {NewTest()}
            </div>
        </div>
    );
}
