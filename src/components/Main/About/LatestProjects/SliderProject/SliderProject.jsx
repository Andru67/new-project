import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './sliderProject.css';

// import required modules
import {Keyboard, Pagination, Navigation} from 'swiper/modules';
import {ProjectCard_1} from "../ProjectCards/ProjectCard_1";
import {ProjectCard_2} from "../ProjectCards/ProjectCard_2";
import {ProjectCard_3} from "../ProjectCards/ProjectCard_3";
import {ProjectCard_4} from "../ProjectCards/ProjectCard_4";
import {ProjectCard_6} from "../ProjectCards/ProjectCard_6";
import {ProjectCard_5} from "../ProjectCards/ProjectCard_5";

const SliderProject = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={1}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Keyboard, Pagination/*, Navigation*/]}
                className="mySwiper"
            >
                <SwiperSlide><ProjectCard_1/></SwiperSlide>
                <SwiperSlide><ProjectCard_2/></SwiperSlide>
                <SwiperSlide><ProjectCard_3/></SwiperSlide>
                <SwiperSlide><ProjectCard_4/></SwiperSlide>
                <SwiperSlide><ProjectCard_5/></SwiperSlide>
                <SwiperSlide><ProjectCard_6/></SwiperSlide>

            </Swiper>
        </>
    );
}
 export default SliderProject;