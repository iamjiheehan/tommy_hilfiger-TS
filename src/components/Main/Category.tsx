import React, { useEffect, useRef, useState } from 'react';

import * as Styles from './MainStyle';

import data from '../../data/category.json'

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import SwiperCore from 'swiper/core';

import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';


import MenData from '../../data/NewIn/men.json';
import WomenData from '../../data/NewIn/women.json';
import KidsData from '../../data/NewIn/kids.json';
import JeansData from '../../data/NewIn/tommyJeans.json';
import ShoesData from '../../data/NewIn/shoes.json';

// 상품 항목의 타입 정의
export interface Item {
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

function Category() {

    //배열에 아이템 순서대로 담기
    const dataArr: Item[] = [MenData[0], WomenData[0], WomenData[1], MenData[1], ShoesData[6], KidsData[0], KidsData[1], JeansData[0]];

    const idArray = dataArr.map(item => item.id);
    const [idbasket, setIdbasket] = useState(idArray);

    useEffect(()=>{
        console.log(idbasket);
    },[idbasket])

    const content = [...data];
    SwiperCore.use([Navigation]);

    const swiperParams = {
        slidesPerView:5,
        spaceBetween:10,
        navigation:{
            prevEl: '.cate-prev ',
            nextEl: '.cate-next',
        },
        pagination:{
            clickable: true
        },
        modules:[Navigation, Mousewheel, Keyboard]
    }

    const swiperRef = useRef(null);
    
    const navigate = useNavigate();
    
    const handleSlideClick = (index: number) => {
        if (index < idArray.length) {
            const productId = idArray[index];
            navigate(`/product/${productId}`);
        }
    };
    
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
                                {...swiperParams}
                                ref={swiperRef}
                                className="swiper-wrapper mySwiper"
                                >
                                {content.map((item, index) => (
                                    <SwiperSlide className="swiper-item" 
                                    key={index} 
                                    onClick={() => handleSlideClick(index)}
                                    >
                                        <a href="#!" className="link-item">
                                            <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={String(index)} />
                                            <span className="text">{item.title}</span>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="slide-nav">
                                <button className="slide-nav-prev cate-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next cate-next">
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