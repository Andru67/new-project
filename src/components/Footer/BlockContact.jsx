import React from 'react';
import st from './footer.module.css'
import BookConsultation from "../Header/BookConsultition/BookConsultation";

const BlockContact = () => {
    return (
        <div className={st.block_contact}>
            <div className={st.label}>Contact</div>
            <div className={st.contact_text}>
                964 Worthington Drive <br/>
                <br/>
                Dubai, UAE
            </div>
            <div>
                <a href="mailto:name@email.com" className={st.mailto}>dubairealty@mail.com</a>
            </div>
            <button className={st.button}>
                <BookConsultation/>
            </button>


        </div>
    );
};

export default BlockContact;