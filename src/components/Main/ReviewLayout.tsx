import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaStar } from 'react-icons/fa';
// 상품 항목의 타입 정의

type Item = {
    id: string;
    brand: string;
    name: string;
    img: string;
    price: string;
    percent: string;
    imgSub: string;
    category: string;
    gender: string;
    style: string;
    description: string;
    regular: string;
    brandimg: string;
    rating: number;
};


// ItemLayout 컴포넌트의 props 타입 정의
interface ItemReviewLayouttProps {
    items: Item[]; // 상품 항목 배열
    params: Record<string, any>;
}

function ReviewLayout({ items, params }:ItemReviewLayouttProps) {

    const swiperRef = useRef(null);
    

    const startRender = (item: Item, index :number) => {
        const result = [];
        for (let i = 0; i < item.rating; i++) {
            const uniqueKey = `${index}-${item.id}-${i}`;
            result.push(
                <FaStar
                    key={uniqueKey}
                    size="16"
                    color='#00174f'
                ></FaStar>
            );
        }
        return result;
    }



    return (
        <Swiper
            {...params}
            ref={swiperRef}
        >
            {items.map((item, index) => (
                <SwiperSlide key={item.id} className="swiper-item"> {/* Add a unique key here */}
                    <Link to={`/product/${item.id}`}>
                        <figure className="item-box">
                            <div className="item-img top">
                                <div className="img-box">
                                    <a href="#!">
                                        <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.name} />
                                    </a>
                                </div>
                            </div>
                            <figcaption className="item-info">
                                <div className="review-product">
                                    <figure className="item-box">
                                        <span className="item-img">
                                            <a href="#!">
                                                <img src={`${process.env.PUBLIC_URL}/${item.brandimg}`} alt={item.name} />
                                            </a>
                                        </span>
                                        <figcaption className="item-info">
                                            <a href="#!">
                                                <div className="item-brand">{item.brand}</div>
                                                {/* <div className="item-name">{item.name}</div> */}
                                                <div className="item-opt">
                                                    <div className="item-price">
                                                        <span className="price">{item.price}</span>
                                                        <del className="regular">{item.regular}</del>
                                                        <span className="percent">{item.percent}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="review-info">
                                    <div className="rating-option-box">
                                        <span className="review-rating"><span className="ico">{startRender(item, index)}</span></span>
                                        {/* <span className="prd-option"><span></span> / <span></span></span> */}
                                    </div>
                                    <p className="review-desc">{item.description}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ReviewLayout;