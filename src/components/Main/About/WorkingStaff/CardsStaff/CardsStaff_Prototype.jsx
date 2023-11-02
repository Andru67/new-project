import React from 'react';
import st from './cardsStaff.module.css';
import {useSwiperSlide} from "swiper/react";
import cn from "classnames";


export const CardsStaff_Prototype = ({photo, name, occupation, from, text}) => {
    const swiperSlide = useSwiperSlide();

    return (
        <div className={cn(st.cards, {[st.active]: swiperSlide.isActive || swiperSlide.isNext})}>
            <div className={st.description}>
                <img src={photo} alt={''} className={st.img}/>
                <div className={st.sing}>&rdquo;</div>
                <div className={st.name}>{name}</div>
                <p className={st.occupation}>{occupation} <span className={st.from}>{from}</span></p>
                <div className={st.about}>
                    {text}
                </div>

            </div>
        </div>
    );
}
