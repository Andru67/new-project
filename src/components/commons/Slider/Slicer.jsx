import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slicer.css';

// import required modules
import {Keyboard, Pagination, Navigation} from 'swiper/modules';
import {CategoryApartments} from "../../Main/ApartmentsInDubai/AllApartmentsCategory/CategoryCards/CategoryApartments";
import {CategoryCommercial} from "../../Main/ApartmentsInDubai/AllApartmentsCategory/CategoryCards/CategoryCommercial";
import {CategoryVilla} from "../../Main/ApartmentsInDubai/AllApartmentsCategory/CategoryCards/CategoryVilla";
import {CategoryTownhouse} from "../../Main/ApartmentsInDubai/AllApartmentsCategory/CategoryCards/CategoryTownhouse";
import BookConsultation from "../../Header/BookConsultition/BookConsultation";

export default function Slicer() {
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
                <BookConsultation>333</BookConsultation>
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
