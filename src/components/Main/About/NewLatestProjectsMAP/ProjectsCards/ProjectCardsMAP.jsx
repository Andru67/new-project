import React from 'react';
import {MoreLink} from "../../../../commons/MoreLink/MoreLink";
import st from './projectCards.module.css';
import picture_1 from "./../../../../../assets/img/category/category-img-2.png";
import picture_2 from "./../../../../../assets/img/category/category-img-1.png"
import picture_3 from "./../../../../../assets/img/category/category-img-3.png";
import picture_4 from "./../../../../../assets/img/category/category-img-4.png"
import picture_5 from "./../../../../../assets/img/category/img_1.png"
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination} from "swiper/modules";

const items = [
    {
        index: 1,
        picture: picture_1,
        category: 'building',
        name: 'Villas',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer' +
            ' aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
        path: '/#',
    },
    {
        index: 2,
        picture: picture_2,
        category: 'interior',
        name: 'Dudai',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer' +
            ' aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
        path: '/#',
    },
    {
        index: 3,
        picture: picture_3,
        category: 'building',
        name: 'Houses',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer' +
            ' aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
        path: '/#',
    },
    {
        index: 4,
        picture: picture_4,
        category: 'building',
        name: 'Villas4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer' +
            ' aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
        path: '/#',
    },
    {
        index: 5,
        picture: picture_5,
        category: 'interior',
        name: 'Villas',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer' +
            ' aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
        path: '/#',
    },
    {
        index: 6,
        picture: picture_2,
        category: 'interior',
        name: 'Villas',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer' +
            ' aliquam consectetur. Faucibus vitae dui massa tellus magna sit.',
        path: '/#',
    },

]
export const ProjectCardsMAP = ({category}) => {

    /*const filter = items.filter(it => {
        if (category === 'all') {
            return true
        }
        return it.category === category
    })*/

    const filterItems = items.filter(it => category === 'all' || it.category === category)


    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
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
            <>
                {filterItems.map((item,index) => (
                    <SwiperSlide key={index}>
                        <div className={st.hovering}>
                            <div className={st.card}>
                                <img src={item.picture} alt={''} className={st.picture}/>
                                <div className={st.category}>
                                    {item.name}
                                </div>
                                <div className={st.background}>
                                    <div>
                                        {item.name}
                                    </div>
                                    <p className={st.text}>
                                        {item.text}
                                    </p>
                                    <MoreLink text={'See project'} path={item.path} className={st.link}/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </>
        </Swiper>
    );
}
