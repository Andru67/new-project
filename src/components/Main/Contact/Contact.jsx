import React from 'react';
import st from './contct.module.css'
import Map from "./Map";
//import {ReactComponent as Map} from '../../../assets/img/contact.svg';

const Contact = () => {
    return (
        <div className={st.contact}>
            <h2 className={st.text}>Contact</h2>
            <Map/>
            <div className={st.block}>
                <div className={st.touch}>
                    <p>Be in touch</p>
                    <p className={st.color}>with as</p>
                </div>
                <div>
                    <input className={st.input_line} placeholder='Name'/>
                    <input className={st.input_line} placeholder='Email *'/>
                    <input className={st.input_line} placeholder='Subject'/>

                    <div>
                        <textarea className={st.massage} placeholder='Massage *'/>
                    </div>
                    <input className={st.submit} placeholder='SUBMIT'/>
                </div>

            </div>


        </div>
    );
};

export default Contact;