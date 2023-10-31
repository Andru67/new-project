import React from 'react';
import st from './aboutHeader.module.css';
import BookConsultation from "../../../Header/BookConsultition/BookConsultation";
import {ReactComponent as Sing} from "../../../../assets/img/Arrow.svg";

export const AboutTitle_03 = ({}) => {


    return (
        <div>
            <div className={st.about_header_logo_border}>
                <div className={st.about_header_logo_line}></div>

                <div className={st.about_header_logo_text}>
                    <p className={st.about_header_logo_text_p}>Lorem ipsum</p>
                    <h3 className={st.about_header_logo_text_h3}>Welcome Home </h3>
                    <h3 className={st.about_header_logo_text_h3}><span
                        className={st.about_header_logo_text_h3_span}>To</span> Luxury 03</h3>
                    <div className={st.about_header_logo_link}><BookConsultation/><Sing/></div>
                </div>
                <div className={st.about_header_logo_line}></div>
            </div>
        </div>
    );
}
