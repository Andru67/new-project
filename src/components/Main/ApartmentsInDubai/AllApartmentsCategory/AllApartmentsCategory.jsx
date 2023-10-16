import React from 'react';
import st from './AllApartmentsCategory.module.css';
import Slicer from "../../../commons/Slider/Slicer";

export const AllApartmentsCategory = ({}) => {

    return (
        <div>
            <div className={st.title}>
                All Apartments
            </div>
            <div className={st.title}>
                Category
            </div>

            <div className={st.block_slider}>
                {Slicer()}
            </div>
        </div>
    );
}


