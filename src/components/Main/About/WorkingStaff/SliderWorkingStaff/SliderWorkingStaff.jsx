import React from 'react';
import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";
import {Keyboard, Pagination} from "swiper/modules";
import {CardsStaff_1} from "../CardsStaff/CardsStaff_1";

import {CardsStaff_2} from "../CardsStaff/CardsStaff_2";



export const SliderWorkingStaff = ({}) => {

    // const swiper = new Swiper()
    return (
        <>
            <Swiper
                initialSlide={1}              /* Порядковый номер начального слайда.*/
               // slidesOffsetAfter={300}
                slidesOffsetBefore={300}      // смещение картинок слайдера
                loop={true}                   // зациклиность
                width={900}
                slidesPerView={2}
                spaceBetween={30}             // расстояние между аартинками
                // keyboard={{
                //     enabled: true,
                // }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Keyboard, Pagination/*, Navigation*/]}
                className="mySwiper"
            >
                <SwiperSlide><CardsStaff_1/></SwiperSlide>
                <SwiperSlide><CardsStaff_2/></SwiperSlide>
                <SwiperSlide><CardsStaff_1/></SwiperSlide>
                <SwiperSlide><CardsStaff_2/></SwiperSlide>
            </Swiper>
        </>
    );
}
function SlideTitle() {
    const swiperSlide = useSwiperSlide();
    console.log(swiperSlide)

    return (
        <p>Current slide is {swiperSlide.isVisible ? 'active' : 'not active'}</p>
    );
}

