import React from 'react';
import st from './contct.module.css'

const CardContact = () => {
    return (
        <div className={st.card_contact}>
            <h1 className={st.card_contact_h1}>
                Dubai, &nbsp;
                <span className={st.card_contact_h1_color}>
                    UAE
                </span>
            </h1>
            <p className={st.card_contact_adres}>269 King Str, 05th Floor, Utral Hosue Building,<br/>
                Dubai, VIC 3000, UAE.</p>
            <div className={st.card_contact_phone}>+99 (0) 344 956 4050</div>
            <div className={st.card_contact_email}>
                <span className={st.card_contact_list_color}>
                    Email: &nbsp;
                </span>
                <a href="mailto:name@email.com"> info@sparch.co </a>
            </div>
            <div className={st.card_contact_list_color}>
                Follow us:
            </div>
            <div className={st.card_contact_email}>
                <span className={st.card_contact_list_color}>
                    Work Hours:  &nbsp;
                </span>
                Monday - Friday : 08h00 - 17h30
            </div>

        </div>
    );
};

export default CardContact;