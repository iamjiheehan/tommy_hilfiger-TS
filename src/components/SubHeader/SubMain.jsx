import React, { useEffect, useState } from 'react';

import * as Styles from '../ProductMain/ProductMainStyle';

import NewInMenData from '../../data/NewIn/men';
import NewInWomenData from '../../data/NewIn/women';
import NewInGolfData from '../../data/NewIn/golf';
import NewInKidsData from '../../data/NewIn/kids';
import NewInJeansData from '../../data/NewIn/tommyJeans';
import NewInShoesData from '../../data/NewIn/shoes';

export default function SubMain({ tabId }) {
    //  사이즈 모달창1
    const [show, setShow] = useState(false);
    function SetModal() {
        setShow(!show);
    }

    // 모든 제품 데이터를 하나의 배열로 병합
    const productData = [
        ...NewInMenData,
        ...NewInWomenData,
        ...NewInGolfData,
        ...NewInKidsData,
        ...NewInJeansData,
        ...NewInShoesData,
    ];
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("SubMain 컴포넌트에서 받은 tabID 값: " + tabId);
        // tabId와 일치하는 아이템만 필터링
        const filteredItems = productData.filter(item => item.id === tabId);
        setItems(filteredItems);
        console.log("일치하는 아이템들:", filteredItems);
    }, [tabId]);

    return (
        <>
            <Styles.Container id='productMain'>
                {items.map(item => (
                    <div key={item.id}>
                            <h1 className='subtitle'>{item.brand}</h1>
                        <div className="view-top">
                            <div className="top-left">
                                <div className="left-swiper">
                                    <div className="img-container">
                                        <button type="button" className="btn-popup" value="1">
                                            {item.img && (
                                                <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.name} />
                                            )}
                                        </button>
                                        <button type="button" className="btn-popup" value="2">
                                            {item.imgSub && (
                                                <img src={`${process.env.PUBLIC_URL}/${item.imgSub}`} alt={item.name} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Styles.TopRight className='top-right'>
                                <div className="etc-btn">
                                    <button type="button" className="btn-like"><span></span></button>
                                    <span className="bar">|</span>
                                    <button type="button" className="btn-share"><span></span></button>
                                </div>
                                <p className="item-brand">
                                    <a href="#!">
                                        {item.brand}
                                    </a>
                                </p>
                                <p className="item-tag">
                                    <span className="code">{item.id}</span>
                                    <span className="tag" style={{ color: "#C2935F" }}>
                                    </span>
                                </p>
                                <p className="item-name">{item.name}</p>
                                <div className="item-price">
                                    <p className="price"><span>{item.regular}</span></p>
                                    <p className="coupon">
                                        <span className="num">
                                            {item.price}
                                        </span>
                                        <span className="txt">회원/멤버십 쿠폰가
                                            <button type="button" className="btn-tooltip">툴팁보기</button>
                                        </span>
                                        <button type="button" className="btn-coupon"><span>쿠폰다운로드</span>
                                        </button>
                                    </p>
                                </div>
                                <Styles.ViewOption className="view-option">
                                    <div className="row size">
                                        <div className="select">
                                            <button type="button" className="sel-btn">
                                                사이즈를 선택하세요. <span className="val"></span>
                                            </button>
                                            <div className={`sel-list ${show ? "" : "hide"}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>S</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>L</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>XL</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>XXL (2XL)</span>
                                                            <span className="soldout">(품절)</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-size">
                                            <span>사이즈 가이드</span>
                                        </button>
                                        <div className="guide">
                                            <span className="sizeRecommandArea">
                                                <button type="button"></button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <button name="btnShoppingBag" type="button" className="btn-basket btn-type">
                                            <span>장바구니</span>
                                        </button>
                                        <button name="btnBuynow" type="button" className="btn-buy btn-type">
                                            <span>
                                                <input type="hidden" />
                                                바로구매
                                            </span>
                                        </button>
                                    </div>
                                </Styles.ViewOption>
                                <Styles.InfoBot className="info-bot">
                                    <p className="review"><a href="#!">첫 리뷰를 남겨주세요!</a></p>
                                    <ul className='list'>
                                        <li className='row'>
                                            <span className="title">배송비</span>
                                            <span>30,000이상 구매시 무료(도서산간추가 3000원)</span>
                                        </li>
                                        <li className='row'>
                                            <span className="title">한섬마일리지</span>
                                            <span>최대 6% 적립</span>
                                        </li>
                                        <li className='row'>
                                            <span className="title">H포인트</span>
                                            <span>0.1% 적립</span>
                                        </li>
                                    </ul>
                                </Styles.InfoBot>
                            </Styles.TopRight>
                        </div>
                    </div>
                ))}
            </Styles.Container>
        </>
    );
}
