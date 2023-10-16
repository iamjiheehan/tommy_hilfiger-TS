import React, { useState } from 'react';
import * as Styles from './MainStyle';
import IssueData from '../../data/issue.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

function Issue() {

    const data = [...IssueData];

    const [swiper, setSwiper] = useState(null);

    SwiperCore.use([Navigation]);

    const swiperParams = {
        slidesPerView:1,
        spaceBetween:20,
        navigation:{
            prevEl: '.issue-prev',
            nextEl: '.issue-next',
        },
        pagination:{
            clickable: true
        },
        modules:{Navigation, Mousewheel, Keyboard}
    }

    return (
        <div>
            <section id='issue'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">TOMMY ISSUE</h2>
                    </Styles.NewTitle>
                    <Styles.IssueContent>
                        <div className="slide-container">
                            <Swiper
                                className="swiper-wrapper mySwiper"
                                {...swiperParams}
                                ref={setSwiper}
                            >
                                {data.map((item, index) => (
                                    <SwiperSlide className="swiper-item" key={index}>
                                        <div className="season-visual-wrap">
                                            <a href="#!" className="season-visual-box">
                                                <img src={process.env.PUBLIC_URL + item.season.img} alt={item.season.img} />
                                            </a>
                                        </div>
                                        <div className="season-info-wrap">
                                            <div className="season-text-box">
                                                <p className="season-title">
                                                    {item.season.title}</p>
                                                <p className="season-subtitle">
                                                    {item.season.subtitle}</p>
                                                <a href="#!" className="btn-season-more">
                                                    <span className="text">{item.season.text}</span>
                                                </a>
                                            </div>
                                            <ul className="product-list">
                                                {item.product.map((product, productIndex) => (
                                                    <li key={productIndex}>
                                                        <figure className="item-box">
                                                            <div className="item-img">
                                                                <div className="img-box">
                                                                    <a href="#!">
                                                                        <div className="img"><img src={process.env.PUBLIC_URL + product.img} alt={product.name} /></div>
                                                                    </a>
                                                                </div>
                                                                <button type="button" className="btn-like"><span></span></button>
                                                            </div>
                                                            <figcaption className="item-info">
                                                                <a href="#!">
                                                                    <div className="item-brand">{product.brand}</div>
                                                                    <div className="item-name">{product.name}</div>
                                                                    <div className="item-opt">
                                                                        <span className="item-price">
                                                                            <div className="item-price">
                                                                                <span className="price">{product.price}</span>
                                                                                <del className="regular">{product.regular}</del>
                                                                                <span className="percent">{product.percent}</span>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="slide-nav">
                                <button className="slide-nav-prev issue-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next issue-next">
                                    <span className="offscreen"></span>
                                </button>
                            </div>
                        </div>
                    </Styles.IssueContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Issue;
