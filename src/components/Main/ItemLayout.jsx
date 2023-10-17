import React, { useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core';

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, setDetail, setProducts } from "../../store";

function ItemLayout({ items, params }) {

    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Navigation]);
    const dispatch = useDispatch();


    const handleItemClick = (item) => {
        if (item) {
            dispatch(setDetail(item)); // 선택한 항목을 'detail' 슬라이스에 보냄
            dispatch(addItem(item)); // 항목을 장바구니에 추가
            dispatch(setProducts(items));// 항목 배열 전체를 'product' 슬라이스에 보냄
            console.log(items);
        }
    };

    return (
        <Swiper {...params} ref={setSwiper}>
            {items.map((item) => (
                <SwiperSlide className="swiper-item" key={item.id}>
                    <div onClick={() => handleItemClick(item)}>
                        <Link to={`/product/${item.id}`} state={{ item }}>
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
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ItemLayout;
