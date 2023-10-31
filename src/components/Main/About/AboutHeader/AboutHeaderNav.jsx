import React, {useState} from 'react';
import {Swiper, useSwiper} from "swiper/react";
import st from './aboutHeader.module.css'
import cn from "classnames";



export const AboutHeaderNav = ({}) => {


    const swiper = useSwiper();

   /* const SlideTo = ({slide, isActive}) => {
        const swiper = useSwiper();
        const handleClick = () => swiper.slideTo(slide)

        if (isActive) return <button><b>0{slide + 1}</b></button>
         return <button onClick={handleClick}>SlideTo {slide + 1}</button>
    }
    const [activeSlide, setActiveSlide] = useState(0)
    console.log(activeSlide)
*/

    return (
        <div className={st.about_header_space_buttons}>
            <div className={st.about_header_space_buttons_bloc}>
                <div className={st.about_header_space_button_prev}>
                    <div onClick={() => swiper.slidePrev()}>PREV</div>
                    <div>|</div>
                    <div onClick={() => swiper.slideNext()}>NEXT</div>
                </div>
            </div>
            <div className={cn(st.about_header_space_buttons_bloc, st.back)}>
                <div
                    className={st.about_header_space_buttons_bloc_num}
                    // tabIndex={0}
                     onClick={() => swiper.slideTo(0)}
                >01
                    {/*<SlideTo slide={0} isActive={activeSlide === 0 }/>*/}
                </div>
                <div className={st.about_header_space_buttons_bloc_text}>
                    <div>Lorem Ipsum</div>
                    <div> Dolorem apset</div>
                </div>

            </div>
            <div className={cn(st.about_header_space_buttons_bloc, st.back)}>
                <div
                    className={st.about_header_space_buttons_bloc_num}
                    // tabIndex={0}
                    onClick={() => swiper.slideTo(1)}
                >02
                    {/*<SlideTo slide={1} isActive={activeSlide === 1 }/>*/}
                </div>
                <div className={st.about_header_space_buttons_bloc_text}>
                    <div>Lorem Ipsum</div>
                    <div> Dolorem apset</div>
                </div>
            </div>
            <div className={cn(st.about_header_space_buttons_bloc, st.back)}>
                <div
                    className={st.about_header_space_buttons_bloc_num}
                    // tabIndex={0}
                    onClick={() => swiper.slideTo(2)}
                >03
                </div>
                <div className={st.about_header_space_buttons_bloc_text}>
                    <div>Lorem Ipsum</div>
                    <div> Dolorem apset</div>
                </div>
            </div>
        </div>

    );
}
