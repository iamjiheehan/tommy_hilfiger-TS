import React from 'react';

import * as Styles from './MainStyle';

function Issue() {
    return (
        <div>
            <section id='issue'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">TOMMY ISSUE</h2>
                    </Styles.NewTitle>
                    <Styles.IssueContent>
                        <div className="slide-container">
                            <ul className="swiper-wrapper">
                                <li className="swiper-item">
                                    <div className="season-visual-wrap">
                                        <a href="#!" className="season-visual-box">
                                            <img src="https://cdn.hfashionmall.com/display/plan/81/10181/10181_1PCE_PC_KOR_20230530180758.jpg?RS=729x729&amp;AR=0&amp;CS=729x729" alt="10181" />
                                        </a>
                                    </div>
                                    <div className="season-info-wrap">
                                        <div className="season-text-box">
                                            <p className="season-title">
                                                DISNEY X TOMMY</p>
                                            <p className="season-subtitle">
                                                디즈니 콜라보 아이템 단독 30% OFF</p>
                                            <a href="#!" className="btn-season-more">
                                                <span className="text">VIEW COLLECTION</span>
                                            </a>
                                        </div>
                                        <ul className="product-list">
                                            <li>
                                                <figure className="item-box">
                                                    <div className="item-img">
                                                        <div className="img-box">
                                                            <a href="#!">
                                                                <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/30/GM0123053003551_1_ORGINL_1685434258767.jpg?RS=473x473&amp;AR=0&amp;CS=316x473" alt="[DISNEY X TOMMY] 폴카 도트 베스트" /></div>
                                                            </a>
                                                        </div>
                                                        <button type="button" className="btn-like"><span></span></button>
                                                    </div>
                                                    <figcaption className="item-info">
                                                        <a href="#!">
                                                            <div className="item-brand">TOMMY HILFIGER MEN</div>
                                                            <div className="item-name">[DISNEY X TOMMY] 폴카 도트 베스트</div>
                                                            <div className="item-opt">
                                                                <span className="item-price">
                                                                    <div className="item-price">
                                                                        <span className="price">255,500</span>
                                                                        <del className="regular">365,000</del>
                                                                        <span className="percent">30%</span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </figcaption>
                                                </figure>
                                            </li><li>
                                                <figure className="item-box">
                                                    <div className="item-img">
                                                        <div className="img-box">
                                                            <a href="#!">
                                                                <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/23/GM0123052301199_1_ORGINL_1684911309120.jpg?RS=473x473&amp;AR=0&amp;CS=316x473" alt="[DISNEY X TOMMY] 폴카 도트 폴로 니트 탑" /></div>
                                                            </a>
                                                        </div>
                                                        <button type="button" className="btn-like"><span></span></button>
                                                    </div>
                                                    <figcaption className="item-info">
                                                        <a href="#!">
                                                            <div className="item-brand">TOMMY HILFIGER WOMEN</div>
                                                            <div className="item-name">[DISNEY X TOMMY] 폴카 도트 폴로 니트 탑</div>
                                                            <div className="item-opt">
                                                                <span className="item-price">
                                                                    <div className="item-price">
                                                                        <span className="price">206,500</span>
                                                                        <del className="regular">295,000</del>
                                                                        <span className="percent">30%</span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </figcaption>
                                                </figure>
                                            </li><li>
                                                <figure className="item-box">
                                                    <div className="item-img">
                                                        <div className="img-box">
                                                            <a href="#!">
                                                                <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/18/GM0123051899221_1_ORGINL_1684479923608.jpg?RS=473x473&amp;AR=0&amp;CS=316x473" alt="[DISNEY X TOMMY] 체스트 후디" /></div>
                                                            </a>
                                                        </div>
                                                        <button type="button" className="btn-like"><span></span></button>
                                                    </div>
                                                    <figcaption className="item-info">
                                                        <a href="#!">
                                                            <div className="item-brand">TOMMY HILFIGER KIDS</div>
                                                            <div className="item-name">[DISNEY X TOMMY] 체스트 후디</div>
                                                            <div className="item-opt">
                                                                <span className="item-price">
                                                                    <div className="item-price">
                                                                        <span className="price">115,500</span>
                                                                        <del className="regular">165,000</del>
                                                                        <span className="percent">30%</span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Styles.IssueContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Issue;