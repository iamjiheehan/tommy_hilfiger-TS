import React, { useState } from 'react';

import data from '../../data/insta.json';
import SwiperCore from 'swiper/core';

import * as Styles from './MainStyle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Insta() {

    const imgData = data[0].img;

    const [swiper, setSwiper] = useState(null);

    SwiperCore.use([Navigation]);

    const swiperInstaParams = {
        slidesPerView:5,
        spaceBetween:20,
        navigation:{
            prevEl: '.insta-prev',
            nextEl: '.insta-next',
        },
        pagination:{
            clickable: true
        },
        modules:{Navigation}
    }

    return (
        <div>
            <section id='insta'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">INSTAGRAM</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-insta" target="_blank">
                                <span className="text">@tommyhilfiger</span>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <div className="slide-container insta">
                        <Swiper
                            {...swiperInstaParams}
                            className="swiper-wrapper mySwiper"
                            ref={setSwiper}>
                            {imgData.map((item, index) => (
                                <SwiperSlide className="swiper-item" key={index}>
                                    <button type="button" className="btn-popup" value="1">
                                        <img src={process.env.PUBLIC_URL + item} alt={index} />
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="slide-nav">
                            <button
                                className="slide-nav-prev insta-prev button-disabled"
                            >
                                <span className="offscreen"></span>
                            </button>
                            <button
                                className="slide-nav-next insta-next"
                            >
                                <span className="offscreen"></span>
                            </button>
                        </div>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Insta;