import React from 'react';

import * as Styles from './MainStyle';

import data from '../../data/category.json'

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Category() {

    const content = [...data];

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
                                className="swiper-wrapper mySwiper"
                                slidesPerView={5}
                                spaceBetween={10}
                                navigation={{
                                    prevEl: '#category .slide-nav-prev',
                                    nextEl: '#category .slide-nav-next',
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Navigation, Mousewheel, Keyboard]}>
                                {content.map((item, index) => (
                                    <SwiperSlide className="swiper-item" key={index}>
                                        <a href="#!" className="link-item">
                                            <img src={process.env.PUBLIC_URL + item.img} alt={index} />
                                            <span className="text">{item.title}</span>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="slide-nav">
                                <button className="slide-nav-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next">
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