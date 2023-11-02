import React from 'react';
import st from './workingStaff.module.css';
import {CardsStaff_1} from "./CardsStaff/CardsStaff_1";
import {SliderWorkingStaff} from "./SliderWorkingStaff/SliderWorkingStaff";

export const WorkingStaff = ({}) => {

    return (
        <div className={st.wrapper}>
            <SliderWorkingStaff/>
        </div>
    );
}
