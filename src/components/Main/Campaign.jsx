import React from 'react';

import * as Styles from './MainStyle';


function Campaign() {
    return (
        <div>
            <section id='campaign'>
                <Styles.Container>
                    <Styles.CampaignWrap>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">CAMPAIGN</h2>
                            <div className="right-box">
                                <a href="#!" className="btn-more-view">
                                    <span className="text">전체보기</span>
                                    <i className="more-arr-dark-white"></i>
                                </a>
                            </div>
                        </Styles.NewTitle>
                        <Styles.CampaignWrap>
                            <div className="slide-container">
                                <ul className="swiper-wrapper">
                                    <li className="swiper-item on">
                                        <a href="#!" className="link-item">
                                            <div className="text-wrap">
                                                <span className="text">TOMMY JEANS</span>
                                            </div>
                                            <div className="img-wrap">
                                                <img src="https://cdn.hfashionmall.com/display/trnd/10/6810/6810_KOR_20230907134307.jpg?RS=658" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="swiper-item">
                                        <a href="#!" className="link-item">
                                            <div className="text-wrap">
                                                <span className="text">TOMMY JEANS</span>
                                            </div>
                                            <div className="img-wrap">
                                                <img src="https://cdn.hfashionmall.com/display/trnd/41/6141/6141_KOR_20230601175723.png?RS=658" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="swiper-item">
                                        <a href="#!" className="link-item">
                                            <div className="text-wrap">
                                                <span className="text">TOMMY JEANS</span>
                                            </div>
                                            <div className="img-wrap">
                                                <img src="https://cdn.hfashionmall.com/display/trnd/41/6141/6141_KOR_20230601175723.png?RS=658" alt="" />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="swiper-item">
                                        <a href="#!" className="link-item">
                                            <div className="text-wrap">
                                                <span className="text">TOMMY JEANS</span>
                                            </div>
                                            <div className="img-wrap">
                                                <img src="https://cdn.hfashionmall.com/display/trnd/41/6141/6141_KOR_20230601175723.png?RS=658" alt="" />
                                            </div>
                                        </a>
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
                        </Styles.CampaignWrap>
                    </Styles.CampaignWrap>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Campaign;