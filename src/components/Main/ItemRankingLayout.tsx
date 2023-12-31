import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetail, setProducts } from "../../store";

// 상품 항목의 타입 정의
export interface Item {
    id: string;
    brand: string;
    name: string;
    img: string;
    price: string;
    regular: string;
    percent: string;
    liveRank: number;
    dailyRank: number;
    weeklyRank: number;
    monthlyRank: number;
    imgSub: string;
    category: string;
    gender: string;
    style: string;
}

// ItemLayout 컴포넌트의 props 타입 정의
interface ItemRankingLayouttProps {
    items: Item[]; // 상품 항목 배열
    params: Record<string, any>;
}

export function ItemRankingLayout({ items }: ItemRankingLayouttProps) {

    const dispatch = useDispatch();

    const handleItemClick = (item : Item) => {
        if (item) {
            dispatch(setDetail(item)); // 선택한 항목을 'detail' 슬라이스에 보냄
            dispatch(setProducts(items));// 항목 배열 전체를 'product' 슬라이스에 보냄
            console.log(items);
        }
    };

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
                <SwiperSlide className="swiper-item" key={item.id}>
                    <div onClick={() => handleItemClick(item)}>
                        <Link to={`/product/${item.id}`} state={{ item }}>
                            <figure className="item-box">
                                <div className="item-img">
                                    <div className="img-box">
                                        <a href="javascript:void(0);">
                                            <div className="img">
                                                <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.name} />
                                            </div>
                                        </a>
                                    </div>
                                    <button type="button" className="btn-like"></button>
                                    <button type="button" className="btn-quick"></button>
                                </div>
                                <figcaption className="item-info">
                                    <a href="javascript:void(0);">
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
                    </div>
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


