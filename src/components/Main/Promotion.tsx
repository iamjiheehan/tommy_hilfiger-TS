import React, { useRef,useState, useEffect } from 'react';
import * as Styles from './MainStyle';

import data from '../../data/promotion.json'
import SwiperCore from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useNavigate } from 'react-router-dom';

import MenData from '../../data/NewIn/men.json';
import WomenData from '../../data/NewIn/women.json';
import KidsData from '../../data/NewIn/kids.json';

// 상품 항목의 타입 정의
export interface DataType {
    id : string;
    brand : string;
    name : string;
    img : string;
    imgSub : string;
    price : string;
    category :string;
    gender : string;
    regular : string;
    style : string;
}

interface Item {
    id :number;
    img: string;
    subtitle: string;
    title: string;
}


function Promotion() {

        //배열에 아이템 순서대로 담기
        const dataArr: DataType[] = [MenData[9], WomenData[0], WomenData[1], WomenData[3], KidsData[0]];

        const idArray = dataArr.map(item => item.id);
        const [idbasket, setIdbasket] = useState(idArray);
    
        useEffect(()=>{
            console.log(idbasket);
        },[idbasket])
        const navigate = useNavigate();
    
        const handleSlideClick = (index: number) => {
            if (index < idArray.length) {
                const productId = idArray[index];
                navigate(`/product/${productId}`);
            }
        };
        
    const content: Item[] = [...data];

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
                                    <div
                                        onClick={() => handleSlideClick(index)}
                                    >
                                        <a href="javascript:void(0);">
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
                                    </div>
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