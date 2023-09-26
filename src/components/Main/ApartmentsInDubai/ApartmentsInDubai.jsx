import React from 'react';
import st from './apartmentsInDubai.module.css'
import ContactUs from "../../ContactUs/ContactUs";
import Pagination from "../../Pagination";
import BestOffers from "./BestOffers/BestOffers";


const ApartmentsInDubai = () => {
    return (
        <div>
            <div className={st.breadcrumbs}>breadcrumbs</div>
            <div className={st.picture}>
                <div className={st.picture_text}>
                    <div>Apartments</div>
                    <div className={st.picture_text_colored}>in Dubai</div>
                </div>
            </div>
            <BestOffers/>
            <div className={st.AID_pagination}>
                <Pagination pageCount={12}/>
            </div>

            <div className={st.infopmation}>
                <h1 className={st.text_h1}>Apartments</h1>
                <p className={st.text_p}>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass,
                    and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken.
                    Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She
                    was in the moment, I was in the past. She was mindful. I was mindless.</p>
                <h3 className={st.text_h3}>Everything along the way</h3>
                <p className={st.text_p}>One touch of a red-hot stove is usually all we need to avoid that kind of
                    discomfort in the future. The same is true as we experience the emotional sensation of stress from
                    our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically
                    avoid potentially stressful situations of all kinds, including the most common of all: making
                    mistakes.</p>
            </div>
            <ContactUs/>
        </div>
    );
};

export default ApartmentsInDubai;