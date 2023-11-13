import React, { useRef, useState, useEffect } from "react";
import * as Styles from "./MainStyle";
import IssueData from "../../data/issue.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import SwiperCore from "swiper/core";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MenData from '../../data/NewIn/men.json';
import WomenData from '../../data/NewIn/women.json';
import KidsData from '../../data/NewIn/kids.json';
import JeansData from '../../data/NewIn/tommyJeans.json';
import ShoesData from '../../data/NewIn/shoes.json';
import { useNavigate } from "react-router-dom";

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

interface IssueDataItem {
    season: {
        img: string;
        title: string;
        subtitle: string;
        text: string;
    };

    product: {
        img: string;
        brand: string;
        name: string;
        price: string;
        regular: string;
        percent: string;
    }[];
}

function Issue() {
    //배열에 아이템 순서대로 담기
    const dataArr: Item[] = [MenData[7], WomenData[2], KidsData[1], KidsData[5], ShoesData[6], KidsData[0], ShoesData[1], JeansData[0]];

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

    const data: IssueDataItem[] = [...IssueData];

    SwiperCore.use([Navigation]);

    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: ".issue-prev",
            nextEl: ".issue-next",
        },
        pagination: {
            clickable: true,
        },
        modules: [Navigation, Mousewheel, Keyboard],
    };
    const swiperRef = useRef(null);

    return (
        <div>
            <section id="issue">
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">TOMMY ISSUE</h2>
                    </Styles.NewTitle>
                    <Styles.IssueContent>
                        <div className="slide-container">
                            <Swiper
                                className="swiper-wrapper mySwiper"
                                {...swiperParams}
                                ref={swiperRef}
                            >
                                {data.map((item, index) => (
                                    <SwiperSlide
                                        className="swiper-item"
                                        key={index}
                                        onClick={() => handleSlideClick(index)}
                                    >
                                        <div className="season-visual-wrap">
                                            <a
                                                href="javascript:void(0);"
                                                className="season-visual-box"
                                            >
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/${item.season.img}`}
                                                    alt={item.season.img}
                                                />
                                            </a>
                                        </div>
                                        <div className="season-info-wrap">
                                            <div className="season-text-box">
                                                <p className="season-title">
                                                    {item.season.title}
                                                </p>
                                                <p className="season-subtitle">
                                                    {item.season.subtitle}
                                                </p>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="btn-season-more"
                                                >
                                                    <span className="text">
                                                        {item.season.text}
                                                    </span>
                                                </a>
                                            </div>
                                            <ul className="product-list">
                                                {item.product.map(
                                                    (product, productIndex) => (
                                                        <li key={productIndex}
                                                        onClick={() => handleSlideClick(index)}
                                                        >
                                                            <figure className="item-box">
                                                                <div className="item-img">
                                                                    <div className="img-box">
                                                                        <a href="javascript:void(0);">
                                                                            <div className="img">
                                                                                <img
                                                                                    src={`${process.env.PUBLIC_URL}/${product.img}`}
                                                                                    alt={
                                                                                        product.name
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-like"
                                                                    >
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                                <figcaption className="item-info">
                                                                    <a href="javascript:void(0);">
                                                                        <div className="item-brand">
                                                                            {
                                                                                product.brand
                                                                            }
                                                                        </div>
                                                                        <div className="item-name">
                                                                            {
                                                                                product.name
                                                                            }
                                                                        </div>
                                                                        <div className="item-opt">
                                                                            <span className="item-price">
                                                                                <div className="item-price">
                                                                                    <span className="price">
                                                                                        {
                                                                                            product.price
                                                                                        }
                                                                                    </span>
                                                                                    <del className="regular">
                                                                                        {
                                                                                            product.regular
                                                                                        }
                                                                                    </del>
                                                                                    <span className="percent">
                                                                                        {
                                                                                            product.percent
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </figcaption>
                                                            </figure>
                                                        </li>
                                                    )
                                                )}
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
