import React from 'react';

import * as Styles from './MainStyle';
import MDbanner from '../../assets/images/mdPickBanner.jpg';


function Md() {
    return (
        <div>
            <section id='md'>
                <Styles.MDbanner>
                    <img src={MDbanner} className="visual-img-box" alt="" />
                    <div className="visual-text-box">
                        <p className="pick-subtitle">MD가 추천하는 아이템 모음</p>
                        <p className="pick-title">MD's PICK</p>
                    </div>
                    <div className="category-tab">
                        <button type="button" className="on">
                            <span>MEN</span>
                        </button>
                        <button type="button" className="">
                            <span>WOMEN</span>
                        </button>
                        <button type="button" className="">
                            <span>JEANS</span>
                        </button>
                        <button type="button" className="">
                            <span>KIDS</span>
                        </button>
                        <button type="button" className="">
                            <span>SHOES</span>
                        </button>
                    </div>
                </Styles.MDbanner>
                <Styles.MdContent>
                    <div className="slide-container">
                        <ul className="swiper-wrapper">
                            <li className="swiper-item">
                                <figure className="item-box">
                                    <div className="item-img">
                                        <div className="img-box">
                                            <a href="#!">
                                                <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/08/03/GM0123080322170_1_ORGINL_1691130517534.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="폴로 칼라 바시티 재킷" /></div>
                                            </a>
                                        </div>
                                        <button type="button" className="btn-like"></button>
                                        <button type="button" className="btn-quick"></button>
                                    </div>
                                    <figcaption className="item-info">
                                        <a href="#!">
                                            <div className="item-brand">TOMMY HILFIGER WOMEN</div>
                                            <div className="item-name">폴로 칼라 바시티 재킷</div>
                                            <div className="item-opt">
                                                <div className="item-price">
                                                    <span className="price">310,500</span>
                                                    <del className="regular">345,000</del>
                                                    <span className="percent">10%</span>
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
                                                <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/08/03/GM0123080322170_1_ORGINL_1691130517534.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="폴로 칼라 바시티 재킷" /></div>
                                            </a>
                                        </div>
                                        <button type="button" className="btn-like"></button>
                                        <button type="button" className="btn-quick"></button>
                                    </div>
                                    <figcaption className="item-info">
                                        <a href="#!">
                                            <div className="item-brand">TOMMY HILFIGER WOMEN</div>
                                            <div className="item-name">폴로 칼라 바시티 재킷</div>
                                            <div className="item-opt">
                                                <div className="item-price">
                                                    <span className="price">310,500</span>
                                                    <del className="regular">345,000</del>
                                                    <span className="percent">10%</span>
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
                </Styles.MdContent>
            </section>
        </div >
    );
}

export default Md;