import React, { useRef, useState, useEffect } from "react";

import data from "../../data/insta.json";
import SwiperCore from "swiper/core";

import * as Styles from "./MainStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import MenData from "../../data/NewIn/men.json";
import WomenData from "../../data/NewIn/women.json";
import JeansData from "../../data/NewIn/tommyJeans.json";
import ShoesData from "../../data/NewIn/shoes.json";
import { useNavigate } from "react-router-dom";

// 상품 항목의 타입 정의
export interface Item {
    id: string;
    brand: string;
    name: string;
    img: string;
    imgSub: string;
    price: string;
    category: string;
    gender: string;
    regular: string;
    style: string;
}

function Insta() {
    //배열에 아이템 순서대로 담기
    const dataArr: Item[] = [
        WomenData[5],
        MenData[2],
        ShoesData[1],
        JeansData[1],
        ShoesData[6],
        MenData[0],
        JeansData[7],
        JeansData[0],
    ];

    const idArray = dataArr.map((item) => item.id);
    const [idbasket, setIdbasket] = useState(idArray);

    useEffect(() => {
        console.log(idbasket);
    }, [idbasket]);

    const navigate = useNavigate();

    const handleSlideClick = (index: number) => {
        if (index < idArray.length) {
            const productId = idArray[index];
            navigate(`/product/${productId}`);
        }
    };

    const imgData = data[0].img;

    SwiperCore.use([Navigation]);

    const swiperInstaParams = {
        className: "swiper-wrapper mySwiper",
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            prevEl: ".insta-prev",
            nextEl: ".insta-next",
        },
        pagination: {
            clickable: true,
        },
        modules: [Navigation],
    };

    const swiperRef = useRef(null);

    return (
        <div>
            <section id="insta">
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
                        <Swiper {...swiperInstaParams} ref={swiperRef}>
                            {imgData.map((item, index) => (
                                <SwiperSlide
                                    className="swiper-item"
                                    key={index}
                                    onClick={() => handleSlideClick(index)}
                                >
                                    <button type="button" className="btn-popup">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/${item}`}
                                            alt={String(index)}
                                        />
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="slide-nav">
                            <button className="slide-nav-prev insta-prev button-disabled">
                                <span className="offscreen"></span>
                            </button>
                            <button className="slide-nav-next insta-next">
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
