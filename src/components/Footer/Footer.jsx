import React from 'react';
import {ReactComponent as Logo} from "../../assets/img/lodo.svg";
import st from './footer.module.css'
import BlockBuy from "./BlockBuy";
import BlockServices from "./BlockServices";
import BlockInformation from "./BlockInformation";
import BlockAboutCompany from "./BlockAboutCompany";
import BlockContact from "./BlockContact";
import {ReactComponent as Icons} from "../../assets/img/icons/icons-line.svg";

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <div className={st.footer}>
            <div className='line'></div>
            <div className='wrapper'>
                <div className={st.logotype}>
                    <Logo/>
                </div>
                <div className={st.block}>
                    <BlockBuy/>
                    <BlockServices/>
                    <BlockInformation/>
                    <BlockAboutCompany/>
                    <BlockContact/>
                </div>
            </div>
            <div className='line'></div>
            <div className='wrapper'>
                <div className={st.footer_text}>
                    <div>
                        Copyright © {year} Dubai Realty
                    </div>
                    <div>
                        <Icons/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;