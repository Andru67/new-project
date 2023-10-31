import React, {useState} from 'react';
import {Controller, Keyboard, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slicerAboutHeader.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {AboutTitle_01} from "../AboutTitle_01";
import {AboutTitle_02} from "../AboutTitle_02";
import {AboutTitle_03} from "../AboutTitle_03";
import {AboutHeaderNav} from "../AboutHeaderNav";


export const SlicerAboutHeader = ({}) => {


    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={1}
            /*keyboard={{
                enabled: true,
            }}*/
            /*pagination={{
                clickable: true,
            }}*/
            // navigation={true}
            //modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
        >
            <AboutHeaderNav />
            <SwiperSlide><AboutTitle_01/></SwiperSlide>
            <SwiperSlide><AboutTitle_02/></SwiperSlide>
            <SwiperSlide><AboutTitle_03/></SwiperSlide>
        </Swiper>
    );
}
