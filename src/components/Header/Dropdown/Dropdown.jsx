import React from 'react';
import {NavLink} from "react-router-dom";
import st from "../Dropdown/dropdown.module.css";

const Dropdown = () => {
    return (
        <div className={st.dropdown_box}>
            <div className={st.dropdown_continer}>
                <ul className={st.dropdown_ul}>
                    <li  >
                        <NavLink to='#' className={st.dropdown_link}>Category number one </NavLink>
                    </li>
                </ul>
                <ul className={st.dropdown_ul}>
                    <li>
                        <NavLink to='#' className={st.dropdown_link}>Apartments in Dubai</NavLink>
                    </li>
                </ul>
                <ul className={st.dropdown_ul}>
                    <li>
                        <NavLink to='#' className={st.dropdown_link}>Category number twenty five</NavLink>
                    </li>
                </ul>

            </div>
        </div>

    );
};

export default Dropdown;