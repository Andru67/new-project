import React from 'react';
import {ReactComponent as Sing} from './../../../../assets/img/Arrow.svg';
import st from './bestOffers.module.css'
import srcCard from '../../../../assets/img/bestOffers/img_3.png'
import {Link} from "react-router-dom";


//
const BestOffersCard_3 = () => {

    return (
        <div className={st.bestOffers_card}>
            <img src={srcCard} alt={''} className={st.bestOffers_picture}/>
            <div className={st.bestOffers_card_content}>
                <div className={st.bestOffers_card_type}>Commercial</div>
                <h3 className={st.bestOffers_card_title_h3}>Shell and Core</h3>
                <p className={st.bestOffers_card_description}>The launch of this community enabled expats to own a
                    luxurious property in Dubai. </p>
                <div>
                    <Link to={'#'} className={st.bestOffers_card_link}>
                        learn more<Sing className={st.svg}/></Link>
                </div>
            </div>
        </div>
    );
}


export default BestOffersCard_3;

