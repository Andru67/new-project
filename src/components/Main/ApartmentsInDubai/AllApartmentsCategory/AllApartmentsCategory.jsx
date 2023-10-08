import React from 'react';
import st from './AllApartmentsCategory.module.css';
import Sliser from "./Sliser";

export const AllApartmentsCategory = ({}) => {

    return (
        <div>
            <div className={st.title}>
                All Apartments
            </div>
            <div className={st.title}>
                Category
            </div>

            <div className={st.test}>
                {Sliser()}
            </div>
        </div>
    );
}


//////