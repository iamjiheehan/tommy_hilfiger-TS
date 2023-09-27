import React from 'react';

import * as Styles from './MainStyle';

import MenData from '../../data/Review/men.json'

function Review() {
    const menData = [...MenData];

    return (
        <div>
            <section id="review">
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">BEST REVIEW</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-more-view type-dark-blue">
                                <span className="text">전체보기</span>
                                <i className="more-arr-dark-blue"></i>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <Styles.RankingTab>
                        <button type="button" className='on'><span>ALL</span></button>
                        <button type="button"><span>BEST</span></button>
                        <button type="button"><span>JEANS</span></button>
                        <button type="button"><span>WOMEN</span></button>
                        <button type="button"><span>MEN</span></button>
                        <button type="button"><span>KIDS</span></button>
                    </Styles.RankingTab>
                    <div className='slide-section'>
                        <div className='slide-container review'>
                            <ul className='swiper-wrapper'>
                                {menData.map((item, index) => (
                                    <li className="swiper-item" key={index}>
                                        <figure className="item-box">
                                            <div className="item-img top">
                                                <div className="img-box">
                                                    <a href="#!">
                                                        <img src={process.env.PUBLIC_URL + item.img} alt={item.name}/>
                                                    </a>
                                                </div>
                                            </div>
                                            <figcaption className="item-info">
                                                <div className="review-product">
                                                    <figure className="item-box">
                                                        <span className="item-img">
                                                            <a href="#!">
                                                                <img src={process.env.PUBLIC_URL + item.img} alt={item.brandimg} />
                                                            </a>
                                                        </span>
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
                                                                </div>
                                                            </a>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                <div className="review-info">
                                                    <div className="rating-option-box">
                                                        <span className="review-rating"><span className="ico">{item.rating}</span></span>
                                                        <span className="prd-option"><span></span> / <span></span></span>
                                                    </div>
                                                    <p className="review-desc">{item.description}
                                                    </p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                ))}
                                {/* <li className="swiper-item">
                                    <figure className="item-box">
                                        <div className="item-img top">
                                            <div className="img-box">
                                                <a href="#!">
                                                    <img src="https://cdn.hfashionmall.com/contents/review/3952815993173785.jpeg?RS=425&amp;AO=1" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <figcaption className="item-info">
                                            <div className="review-product">
                                                <figure className="item-box">
                                                    <span className="item-img">
                                                        <a href="#!">
                                                            <img src="https://cdn.hfashionmall.com/goods/THBR/23/01/27/GM0123012734122_1_ORGINL_1675669026031.jpg?RS=90x90&amp;AR=0&amp;CS=60x90" alt="" />
                                                        </a>
                                                    </span>
                                                    <figcaption className="item-info">
                                                        <a href="#!">
                                                            <div className="item-brand">TOMMY HILFIGER WOMEN</div>
                                                            <div className="item-name"></div>
                                                            <div className="item-opt">
                                                                <div className="item-price">
                                                                    <span className="price">72,450</span>
                                                                    <del className="regular">115,000</del>
                                                                    <span className="percent">37%</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="review-info">
                                                <div className="rating-option-box">
                                                    <span className="review-rating"><span className="ico">별점</span></span>
                                                    <span className="prd-option"><span></span> / <span></span></span>
                                                </div>
                                                <p className="review-desc">170 56kg
                                                    일단 민소매 같은 이너 따로 안 챙겨 입어도 될 정도로
                                                    소재가 대박 좋아요!
                                                    넥 부분은 깊이 파여 있어서 신경은 써야겠지만
                                                    그만큼 목이 가늘고 길어 보여서 오히려 더 맘에 들어요💖 얇아서 여기저기 다 잘 입을 수 있는 옷이에요~
                                                    강력 추천👍🏻
                                                </p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li> */}
                            </ul>
                            <div className="slide-nav">
                                <button className="slide-nav-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next">
                                    <span className="offscreen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Review;