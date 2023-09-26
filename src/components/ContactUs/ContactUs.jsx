import React from 'react';
import st from './contactUs.module.css'

const ContactUs = () => {
    return (
        <div className={st.contact_us_back}>
           <div className={st.contact_us_text_mini}>Do you have any questions?</div>
           <div className={st.contact_us_text_big}>Contact us</div>
            <div className={st.contact_us_bloc_input}>
                <input className={st.contact_us_input}  placeholder='enter your mail'/>
                <button className={st.contact_us_input_btn}>Send</button>
            </div>


        </div>
    );
};

export default ContactUs;