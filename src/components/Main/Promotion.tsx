import React, { useRef } from 'react';
import * as Styles from './MainStyle';

import data from '../../data/promotion.json'
import SwiperCore from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

interface Item {
    id :number;
    img: string;
    subtitle: string;
    title: string;
}


function Promotion() {

    const content: Item[] = [...data];
    // const content= [...data];
    // const [swiper, setSwiper] = useState(null);
    const swiperRef = useRef(null);

    SwiperCore.use([Navigation]);

    const swiperPromoParams = {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            prevEl: '.promo-prev',
            nextEl: '.promo-next',
        },
        pagination: {
            clickable: true
        },
        modules:  [Navigation] 
    }


    return (
        <div>
            <section id='promotion'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">PROMOTION</h2>
                    </Styles.NewTitle>
                    <div className="category-tab season">
                        <button type="button" className="on">
                            <span>다양한 기획전을 만나보세요!</span>
                        </button>
                    </div>
                    <div className="slide-container season">
                        <Swiper
                            className="swiper-wrapper mySwiper"
                            ref={swiperRef}
                            {...swiperPromoParams}
                        >
                            {content.map((item, index) => (
                                <SwiperSlide className="swiper-item" key={index} >
                                    <Link to={`/product/${item.id}/detail`}>
                                        <a href="#!">
                                            <div className="season-visual-wrap">
                                                <div className="season-visual-box">
                                                    <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.title} />
                                                </div>
                                            </div>
                                            <div className="season-info-wrap">
                                                <div className="season-text-box">
                                                    <p className="season-title">
                                                        {item.title}</p>
                                                    <p className="season-subtitle">
                                                        {item.subtitle}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="slide-nav">
                            <button className="slide-nav-prev promo-prev button-disabled">
                                <span className="offscreen"></span>
                            </button>
                            <button className="slide-nav-next promo-next">
                                <span className="offscreen"></span>
                            </button>
                        </div>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Promotion;