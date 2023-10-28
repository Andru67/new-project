import React from 'react';
import st from './AllApartmentsCategory.module.css';
import SlicerCategory from './SliderCategory/SlicerCategory';
import {ReactComponent as ButtomNext} from '../../../../assets/img/Arrow-rite.svg';
import {ReactComponent as ButtomPrev} from '../../../../assets/img/Arrow-left.svg';
import {useSwiper} from "swiper/react";
import Nav from "./SliderCategory/Nav";

export const AllApartmentsCategory = ({}) => {

    const swiper = useSwiper();

    return (
        <div>
            <div className={st.title}>
                All Apartments
            </div>
            <div className={st.title}>
                Category
            </div>

            <div className={st.block_slider}>

                {/*<div
                    className={st.block_slider_button}
                    onClick={() => swiper.slidePrev()}
                >
                    <ButtomPrev/>
                </div>*/}
                <div className={st.block_slider_wrap}>
                   <SlicerCategory/>
                </div>
                {/*<div
                    className={st.block_slider_button}
                    onClick={() => swiper.slideNext()}
                >
                    <ButtomNext/>
                </div>*/}
            </div>
        </div>
    );
}


