import React from 'react';
import st from './AllApartmentsCategory.module.css';
import {ReactComponent as ArrowLeft} from "./../../../../assets/img/Arrow-rite.svg";
import {ReactComponent as ArrowRite} from "./../../../../assets/img/Arrow-left.svg";

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
                <div className={st.pictures}>1</div>
                <div className={st.pictures}>2</div>
                <div className={st.pictures}>3</div>
                <div className={st.pictures}>4</div>
                <div className={st.arrow}><ArrowLeft/></div>
            </div>
        </div>
    );
}
