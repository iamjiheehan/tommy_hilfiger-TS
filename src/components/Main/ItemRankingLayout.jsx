import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

function ItemLayout({ items }) {
    return (
        <Swiper
            className="swiper-wrapper mySwiper"
            slidesPerView={5}
            spaceBetween={20}
            navigation={{
                prevEl: '.slide-nav-prev',
                nextEl: '.slide-nav-next',
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Mousewheel, Keyboard]}
        >
            {items.map((item, index) => (
                <SwiperSlide className="swiper-item" key={index}>
                    <Link to={`/product/${item.id}/detail`}>
                        <figure className="item-box">
                            <div className="item-img">
                                <div className="img-box">
                                    <a href="#!">
                                        <div className="img">
                                            <img src={process.env.PUBLIC_URL + item.img} alt={item.name} />
                                        </div>
                                    </a>
                                </div>
                                <button type="button" className="btn-like"></button>
                                <button type="button" className="btn-quick"></button>
                            </div>
                            <figcaption className="item-info">
                                <a href="#!">
                                    <span className="item-rank">{index + 1}</span>
                                    <div className="item-brand">{item.brand}</div>
                                    <div className="item-name">{item.name}</div>
                                    <div className="item-opt">
                                        <div className="item-price">
                                            <span className="price">{item.price}</span>
                                            <del className="regular">{item.regular}</del>
                                            <span className="percent">{item.percent}</span>
                                        </div>
                                        <div className="item-label"></div>
                                    </div>
                                </a>
                            </figcaption>
                        </figure>
                    </Link>
                </SwiperSlide>
            ))}
            <div className="slide-nav">
                <button className="slide-nav-prev button-disabled">
                    <span className="offscreen"></span>
                </button>
                <button className="slide-nav-next">
                    <span className="offscreen"></span>
                </button>
            </div>
        </Swiper>
    );
}

export default ItemLayout;
