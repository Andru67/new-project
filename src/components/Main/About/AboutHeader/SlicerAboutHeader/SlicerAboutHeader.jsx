import React, {useState} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slicerAboutHeader.css';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {AboutTitle_01} from "../AboutTitle_01";
import {AboutTitle_02} from "../AboutTitle_02";
import {AboutTitle_03} from "../AboutTitle_03";
import {AboutHeaderNav} from "../AboutHeaderNav";


export const SlicerAboutHeader = ({}) => {

    const [activeSlide, setActiveSlide] = useState(0)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const handleSlideChange = swiper => {        // *  берем нужные состояния   стр.45
        setActiveSlide(swiper.activeIndex);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };


    return (
        <Swiper onSlideChange={handleSlideChange}
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

            <AboutHeaderNav activeSlide={activeSlide} isBeginning={isBeginning} isEnd={isEnd}/> {/* стр.45 прокодываем пропс*/}
            <SwiperSlide><AboutTitle_01/></SwiperSlide>
            <SwiperSlide><AboutTitle_02/></SwiperSlide>
            <SwiperSlide><AboutTitle_03/></SwiperSlide>
        </Swiper>
    );
}
