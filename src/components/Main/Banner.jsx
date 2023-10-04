import React from 'react';

import * as Styles from './MainStyle';

import MainBanner2 from '../../assets/images/main_banner-2.jpg'
import MainBanner3 from '../../assets/images/main_banner-3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

function Banner() {
    return (
        <div>
            <section id='mainBanner'>
                <Styles.Banner>
                    <div className='slide-container'>
                        <Swiper
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper swiper-wrapper"
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide className='swiper-item'>
                                <Styles.Box>
                                    <Styles.Banner className="img">
                                        <a href="#!">
                                            <img src={MainBanner3} alt="MainBanner1" />
                                        </a>
                                    </Styles.Banner>
                                    <Styles.Text className="str" href="#!">
                                        <span className="etc">
                                            TOMMY HILFIGER X TOMMY JEANS
                                        </span>
                                        <strong className="title">가을 니트 맛집, 타미힐피거</strong>
                                        <span className="sub">ALL-TIME ESSENTIALS</span>
                                        <Styles.ViewMore><span className='view-text'>VIEW MORE</span></Styles.ViewMore>
                                    </Styles.Text>
                                </Styles.Box>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <Styles.Box>
                                    <Styles.Image>
                                        <a href="#!">
                                            <img src={MainBanner2} alt="MainBanner1" />
                                        </a>
                                    </Styles.Image>
                                    <Styles.Text className="str" href="#!">
                                        <span className="etc">
                                            TOMMY HILFIGER X TOMMY JEANS
                                        </span>
                                        <strong className="title">가을 니트 맛집, 타미힐피거</strong>
                                        <span className="sub">ALL-TIME ESSENTIALS</span>
                                        <Styles.ViewMore><span className='view-text'>VIEW MORE</span></Styles.ViewMore>
                                    </Styles.Text>
                                </Styles.Box>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="swiper-tool-wrap">
                        <div className="swiper-tool">
                            <div className="swiper-pagination">
                                <span className="swiper-pagination-current">2</span>
                                <span className='swiper-pagination-bar'>/</span>
                                <span className="swiper-pagination-total">9</span>
                            </div>
                        </div>
                    </div>
                </Styles.Banner>
            </section>
        </div>
    );
}

export default Banner;