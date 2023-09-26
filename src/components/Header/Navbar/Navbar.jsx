import React from 'react';
import st from './navbar.module.css'
import { NavLink} from "react-router-dom";
import {ReactComponent as Button} from "../../../assets/img/button.svg";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {

    return (
        <div className={st.nav}>
            <div className={st.nav_button}>
                BUY
                <span className={st.nav_buy_button}>
                    <Button/>
                    <div className={st.dropdown}><Dropdown/></div>
                </span>
            </div>
            <ul>
                <li>
                    <NavLink to='/' className={st.link} ></NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/blog' className={st.link} >BLOG</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/about' className={st.link}>ABOUT</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to='/contact' className={st.link}>CONTACT</NavLink>
                </li>
            </ul>


        </div>
    );
};

export default Navbar;