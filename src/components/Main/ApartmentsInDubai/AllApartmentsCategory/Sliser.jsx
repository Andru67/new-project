import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './sliser.css';

// import required modules
import {Keyboard, Pagination, Navigation} from 'swiper/modules';
import {CategoryApartments} from "./CategoryCards/CategoryApartments";
import {CategoryCommercial} from "./CategoryCards/CategoryCommercial";
import {CategoryVilla} from "./CategoryCards/CategoryVilla";
import {CategoryTownhouse} from "./CategoryCards/CategoryTownhouse";

export default function Sliser() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={1}
                width={1350}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><CategoryTownhouse/></SwiperSlide>
                <SwiperSlide><CategoryVilla/></SwiperSlide>
                <SwiperSlide><CategoryCommercial/></SwiperSlide>
                <SwiperSlide><CategoryApartments/></SwiperSlide>
                <SwiperSlide><CategoryVilla/></SwiperSlide>
                <SwiperSlide><CategoryApartments/></SwiperSlide>
            </Swiper>
        </>
    );
}
