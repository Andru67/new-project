import React from 'react';
import st from './headder.module.css'
import Phone from "./Phone";
import BookConsultation from "./BookConsultition/BookConsultation";
import {LangSwitcher} from "./Toggle/Toggel";
import Navbar from "./Navbar/Navbar";
import {ReactComponent as Logo} from "../../assets/img/lodo.svg";



const Header = () => {

    return (
        <div className='wrapper'>
            <div className={st.header}>
                <Logo/>
                <Navbar/>
                <BookConsultation/>
                <LangSwitcher/>
                <Phone/>

            </div>
        </div>

    );
};

export default Header;