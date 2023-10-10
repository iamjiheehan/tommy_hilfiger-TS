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
                                                        <span className="soldout">(품절)</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" className="btn-size" ><span>사이즈 가이드</span></button>
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
                    {/* 추천 아이템 리스트 */}
                    <Styles.ViewList className="view-list">
                        <div className="tab-wrap">
                            <button type="button" className='on'><span>모델 착용 상품</span></button>
                            <button type="button"><span>이 상품을 본 고객이 구매한 상품</span></button>
                        </div>
                        <div className="tab-content">
                            <div className="swiper-container product-list">
                                <ul className="swiper-wrapper">
                                    <li class="swiper-slide">
                                        <figure class="item-box">
                                            <div class="item-img">
                                                <div class="img-box">
                                                    <a href="#!">
                                                        <img src="https://cdn.hfashionmall.com/goods/THBR/23/07/18/GM0123071817764_1_ORGINL_1689666172845.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="스트레이트핏 단톤 블랙 데님 팬츠" />
                                                    </a>
                                                </div>
                                                <button type="button" class="btn-like">
                                                    <span>좋아요</span>
                                                </button>
                                            </div>
                                            <figcaption class="item-info">
                                                <a href="#!">
                                                    <div class="item-brand">TOMMY HILFIGER MEN</div>
                                                    <div class="item-name">스트레이트핏 단톤 블랙 데님 팬츠</div>
                                                    <div class="item-price">
                                                        <span class="price">199,000</span>
                                                    </div>
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="swiper-slide">
                                        <figure class="item-box">
                                            <div class="item-img">
                                                <div class="img-box">
                                                    <a href="#!">
                                                        <img src="https://cdn.hfashionmall.com/goods/THBR/23/07/18/GM0123071817764_1_ORGINL_1689666172845.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="스트레이트핏 단톤 블랙 데님 팬츠" />
                                                    </a>
                                                </div>
                                                <button type="button" class="btn-like">
                                                    <span>좋아요</span>
                                                </button>
                                            </div>
                                            <figcaption class="item-info">
                                                <a href="#!">
                                                    <div class="item-brand">TOMMY HILFIGER MEN</div>
                                                    <div class="item-name">스트레이트핏 단톤 블랙 데님 팬츠</div>
                                                    <div class="item-price">
                                                        <span class="price">199,000</span>
                                                    </div>
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Styles.ViewList>
                    <Styles.ViewDetails className="view-detail">
                        <div className="detail-tab">
                            <ul class="tabs" style={{width:"870px"}}>
                                <li class="on"><button type="button"><span>상품상세정보</span></button></li>
                                <li class=""><button type="button"><span>리뷰(0)</span></button></li>
                                <li class=""><button type="button"><span>상품 QnA(0)</span></button></li>
                            </ul>
                            {/* 상품 상세 정보 */}
                            
                        </div>
                        <div className="detail-option"></div>
                    </Styles.ViewDetails>
                </div>
            </Styles.Container>
        </>
    )
}
