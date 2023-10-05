import React, { useState } from 'react';
import * as Styles from './MainStyle';

import data from '../../data/campaign.json';
import SwiperCore from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Campaign() {
    const imgData = data[0].img; 
    const itemsPerPage = 4; 

    const [swiper, setSwiper] = useState(null);

    SwiperCore.use([Navigation]);

    const swiperCampaignParams = {
        className:"swiper-wrapper mySwiper",
        slidesPerView:4,
        spaceBetween:20,
        navigation:{
            prevEl: '.campaign-prev',
            nextEl: '.campaign-next',
        },
        pagination:{
            clickable: true
        },
        modules:{Navigation},
        loop: true
    }
    
    return (
        <div>
            <section id='campaign'>
                <Styles.Container>
                    <Styles.CampaignWrap>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">CAMPAIGN</h2>
                            <div className="right-box">
                                <a href="#!" className="btn-more-view">
                                    <span className="text">전체보기</span>
                                    <i className="more-arr-dark-white"></i>
                                </a>
                            </div>
                        </Styles.NewTitle>
                        <Styles.CampaignWrap>
                            <div className="slide-container">
                                <Swiper
                                    {...swiperCampaignParams}
                                    ref={setSwiper}>
                                    {imgData.map((item, index) => (
                                        <SwiperSlide className={`swiper-item ${index % itemsPerPage === 0 ? 'on' : ''}`} key={index}>
                                            <a href="#!" className="link-item">
                                                <div className="text-wrap">
                                                    <span className="text">TOMMY JEANS</span>
                                                </div>
                                                <div className="img-wrap">
                                                    <img src={process.env.PUBLIC_URL + item} alt={index} />
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="slide-nav">
                                    <button
                                        className="slide-nav-prev campaign-prev button-disabled"
                                    >
                                        <span className="offscreen"></span>
                                    </button>
                                    <button
                                        className="slide-nav-next campaign-next"
                                    >
                                        <span className="offscreen"></span>
                                    </button>
                                </div>
                            </div>
                        </Styles.CampaignWrap>
                    </Styles.CampaignWrap>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Campaign;
