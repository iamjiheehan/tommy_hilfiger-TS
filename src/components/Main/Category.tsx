import React, { useRef } from 'react';

import * as Styles from './MainStyle';

import data from '../../data/category.json'

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';

function Category() {

    const content = [...data];

    SwiperCore.use([Navigation]);

    const swiperParams = {
        slidesPerView:5,
        spaceBetween:10,
        navigation:{
            prevEl: '.cate-prev ',
            nextEl: '.cate-next',
        },
        pagination:{
            clickable: true
        },
        modules:[Navigation, Mousewheel, Keyboard]
    }

    const swiperRef = useRef(null);
    
    return (
        <div>
            <section id='category'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">MORE CATEGORIES</h2>
                    </Styles.NewTitle>
                    <Styles.MoreContent>
                        <div className="slide-container">
                            <Swiper
                                {...swiperParams}
                                ref={swiperRef}
                                className="swiper-wrapper mySwiper"
                                >
                                {content.map((item, index) => (
                                    <SwiperSlide className="swiper-item" key={index}>
                                        <a href="#!" className="link-item">
                                            <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={String(index)} />
                                            <span className="text">{item.title}</span>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="slide-nav">
                                <button className="slide-nav-prev cate-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next cate-next">
                                    <span className="offscreen"></span>
                                </button>
                            </div>
                        </div>
                    </Styles.MoreContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Category;