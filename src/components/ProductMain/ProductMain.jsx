import React from 'react'

import * as Styles from './ProductMainStyle'

import data from '../../data/Product.json'

export default function ProductMain() {
    return (
        <>
            <Styles.Container id='productMain'>
                <div className="breadcrumb-wrap">
                    <ol className="breadcrumb">
                        <li className="bc-home"><a href="/">HOME</a></li>
                        <li>
                            <a href="#!">
                                TOMMY HILFIGER MEN</a>
                        </li>
                        <li className="">
                            <a href="#!">
                                남성</a>
                        </li>
                        <li className="">
                            <a href="#!">
                                아우터</a>
                        </li>
                        <li className="active">
                            다운/패딩</li>
                    </ol>
                </div>
                <div className="responsive-wrap">
                    <div className="view-top">
                        <div className="top-left">
                            <div className="left-swiper">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="https://cdn.hfashionmall.com/goods/THBR/23/09/22/GM0123092244419_4_ORGINL_1695373248443.jpg?RS=960x960&AR=0&CS=640x960" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="https://cdn.hfashionmall.com/goods/THBR/23/09/22/GM0123092244419_5_ORGINL_1695373248599.jpg?RS=960x960&AR=0&CS=640x960" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Styles.TopRight className='top-right'>
                            <div className="etc-btn">
                                <button type="button" class="btn-like"><span></span></button>
                                <span class="bar">|</span>
                                <button type="button" class="btn-share"><span></span></button>
                            </div>
                            <p className="item-brand">
                                <a href="#!">
                                    TOMMY HELFIGER MEN
                                </a>
                            </p>
                            <p className="item-tag">
                                <span className="code">T12D9QOT020MT1RBN</span>
                                <span className="tag" style={{ color: "#C2935F" }}>
                                </span>
                            </p>
                            <p className="item-name">뉴욕 가먼트다이 덕다운 푸퍼</p>
                            <div className="item-price">
                                <p class="price"><span>579,000</span></p>
                                <p class="coupon">
                                    <span class="num">
                                        521,100</span>
                                    <span class="txt">회원/멤버십 쿠폰가
                                        <button type="button" class="btn-tooltip">툴팁보기</button>
                                    </span>
                                    <button type="button" class="btn-coupon"><span>쿠폰다운로드</span>
                                    </button>
                                </p>
                            </div>
                            <Styles.ViewOption className="view-option">
                                <div className="row color">
                                    <label className="color-check">
                                        <input type="radio" />
                                        <span className="pdImage">
                                            ARMY GREEN</span>
                                    </label>
                                    <p class="txt">
                                        ARMY GREEN</p>
                                </div>
                                <div className="row size">
                                    <div className="select">
                                        <button type="button" className="sel-btn">사이즈를 선택하세요. <span class="val"></span></button>
                                        <div className="sel-list">
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            S</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            M</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            L</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            XL</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            XXL
                                                            (2XL)
                                                        </span>
                                                        <span class="soldout">(품절)</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-size" ><span>사이즈 가이드</span></button>
                                    <div class="guide">
                                        <span class="sizeRecommandArea">
                                            <button type="button"></button>
                                        </span>
                                    </div>
                                </div>
                            </Styles.ViewOption>
                            <div className="info-bot">
                            </div>
                        </Styles.TopRight>
                    </div>
                    <div className="view-list"></div>
                    <div className="view-detail">
                        <div className="detail-tab"></div>
                        <div className="detail-option"></div>
                    </div>
                </div>
            </Styles.Container>
        </>
    )
}
