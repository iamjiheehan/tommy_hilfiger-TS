import React from 'react';

import * as Styles from './MainStyle';

function Ranking() {
    return (
        <div>
            <section id='ranking'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">TOP RANKING</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-more-view type-dark-blue">
                                <span className="text">전체보기</span>
                                <i className="more-arr-dark-blue"></i>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <Styles.NewTab>
                        <button type="button" className="on">
                            <span>ALL</span>
                        </button>
                        <button type="button">
                            <span>MEN</span>
                        </button>
                        <button type="button">
                            <span>WOMEN</span>
                        </button>
                        <button type="button">
                            <span>JEANS</span>
                        </button>
                        <button type="button">
                            <span>KIDS</span>
                        </button>
                        <button type="button">
                            <span>SHOES</span>
                        </button>
                        <button type="button">
                            <span>GOLF</span>
                        </button>
                    </Styles.NewTab>
                    <Styles.RankingTab>
                        <button type="button" className='on'><span>실시간</span></button>
                        <button type="button"><span>일간</span></button>
                        <button type="button"><span>주간</span></button>
                        <button type="button"><span>월간</span></button>
                    </Styles.RankingTab>
                    <Styles.NewContent>
                        <div className="slide-container">
                            <ul className="swiper-wrapper">
                                <li className="swiper-item">
                                    <figure className="item-box">
                                        <div className="item-img">
                                            <div className="img-box">
                                                <a href="#!">
                                                    <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/26/GM0123052602707_1_ORGINL_1685088055492.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="스트레치 옥스포드 롱슬리브 셔츠" /></div>
                                                </a>
                                            </div>
                                            <button type="button" className="btn-like"><span></span></button>
                                            <button type="button" className="btn-quick"><span></span></button>
                                        </div>
                                        <figcaption className="item-info">
                                            <a href="#!">
                                                <span className="item-rank rank-top">
                                                    1</span>
                                                <div className="item-brand">TOMMY HILFIGER KIDS</div>
                                                <div className="item-name">스트레치 옥스포드 롱슬리브 셔츠</div>
                                                <div className="item-opt">
                                                    <div className="item-price">
                                                        <span className="price">59,670</span>
                                                        <del className="regular">78,000</del>
                                                        <span className="percent">24%</span>
                                                    </div>
                                                    <div className="item-label"></div>
                                                </div>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="swiper-item">
                                    <figure className="item-box">
                                        <div className="item-img">
                                            <div className="img-box">
                                                <a href="#!">
                                                    <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/26/GM0123052602707_1_ORGINL_1685088055492.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="스트레치 옥스포드 롱슬리브 셔츠" /></div>
                                                </a>
                                            </div>
                                            <button type="button" className="btn-like"><span></span></button>
                                            <button type="button" className="btn-quick"><span></span></button>
                                        </div>
                                        <figcaption className="item-info">
                                            <a href="#!">
                                                <span className="item-rank rank-top">
                                                    1</span>
                                                <div className="item-brand">TOMMY HILFIGER KIDS</div>
                                                <div className="item-name">스트레치 옥스포드 롱슬리브 셔츠</div>
                                                <div className="item-opt">
                                                    <div className="item-price">
                                                        <span className="price">59,670</span>
                                                        <del className="regular">78,000</del>
                                                        <span className="percent">24%</span>
                                                    </div>
                                                    <div className="item-label"></div>
                                                </div>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </li>
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
                    </Styles.NewContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Ranking;