import React, {useState} from 'react';
import {Swiper, useSwiper} from "swiper/react";
import st from './aboutHeader.module.css'
import cn from "classnames";



export const AboutHeaderNav = ({activeSlide, isBeginning, isEnd}) => {     //  принимаем пропс

    console.log(activeSlide)           // проверка передачи пропсов
    console.log(isBeginning)
    console.log(isEnd)


    const swiper = useSwiper();
    // console.log(swiper)

    return (
        <div className={st.about_header_space_buttons}>
            <div className={st.about_header_space_buttons_bloc}>
                <div className={st.about_header_space_buttons_toggle}>
                    <button
                        onClick={() => swiper.slidePrev()}
                        className={cn(st.btn_prev, {[st.disable]: isBeginning})}
                        disabled={isBeginning}
                    >PREV</button>
                    <div>|</div>
                    <button
                        onClick={() => swiper.slideNext()}
                        className={cn(st.btn_next, {[st.disable]: isEnd})}
                        disabled={isEnd}
                    >NEXT</button>
                </div>
            </div>
            <div className={cn(st.about_header_space_buttons_bloc, st.back)}>
                <div
                    className={cn(st.about_header_space_buttons_bloc_num, {[st.active]: activeSlide === 0})}
                     onClick={() => swiper.slideTo(0)}
                >
                    01
                </div>
                <div className={st.about_header_space_buttons_bloc_text}>
                    <div>Lorem Ipsum</div>
                    <div> Dolorem apset</div>
                </div>

            </div>
            <div className={cn(st.about_header_space_buttons_bloc, st.back)}>
                <div
                    className={cn(st.about_header_space_buttons_bloc_num, {[st.active]: activeSlide === 1})}
                    onClick={() => swiper.slideTo(1)}
                >
                    02
                </div>
                <div className={st.about_header_space_buttons_bloc_text}>
                    <div>Lorem Ipsum</div>
                    <div> Dolorem apset</div>
                </div>
            </div>
            <div className={cn(st.about_header_space_buttons_bloc, st.back)}>
                <div
                    className={cn(st.about_header_space_buttons_bloc_num, {[st.active]: activeSlide === 2})}
                    onClick={() => swiper.slideTo(2)}
                >
                    03
                </div>
                <div className={st.about_header_space_buttons_bloc_text}>
                    <div>Lorem Ipsum</div>
                    <div> Dolorem apset</div>
                </div>
            </div>
        </div>

    );
}
