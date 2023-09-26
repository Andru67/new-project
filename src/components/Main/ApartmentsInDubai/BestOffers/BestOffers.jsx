import React from 'react';
import st from "./bestOffers.module.css";
import BestOffersCard_1 from "./BestOffersCard-1";
import BestOffersCard_2 from "./BestOffersCard-2";
import BestOffersCard_3 from "./BestOffersCard-3";
import BestOffersCard_4 from "./BestOffersCard-4";

const BestOffers = () => {
    return (
        <div>
            <div className={st.bestOffers_text}>Best Offers</div>
            <div className={st.bestOffers}>
                <BestOffersCard_1/>
                <BestOffersCard_2/>
                <BestOffersCard_3/>
                <BestOffersCard_4/>
                <div className={st.bestOffers_card}>1</div>
                <div className={st.bestOffers_card}>1</div>
                <div className={st.bestOffers_card}>1</div>
                <div className={st.bestOffers_card}>1</div>
                <div className={st.bestOffers_card}>1</div>
                <div className={st.bestOffers_card}>1</div>
                <div className={st.bestOffers_card}>1</div>
                <div className={st.bestOffers_card}>1</div>

            </div>
        </div>
    );
};

export default BestOffers;