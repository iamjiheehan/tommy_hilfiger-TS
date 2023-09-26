import React from 'react';
import * as Styles from './MainStyle';

function Promotion() {
    return (
        <div>
            <section id='promotion'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">PROMOTION</h2>
                    </Styles.NewTitle>
                    <div className="category-tab season">
                        <button type="button" className="on">
                            <span>다양한 기획전을 만나보세요!</span>
                        </button>
                    </div>
                    <div className="slide-container season">
                        <ul className="swiper-wrapper">
                            <li className="swiper-item">
                                <a href="#!">
                                    <div className="season-visual-wrap">
                                        <div className="season-visual-box">
                                            <img src="https://cdn.hfashionmall.com/display/plan/76/10676/10676_1PCE_PC_KOR_20230818160645.jpg?RS=576x576&amp;AR=0&amp;CS=576x576" alt="1" />
                                        </div>
                                    </div>
                                    <div className="season-info-wrap">
                                        <div className="season-text-box">
                                            <p className="season-title">
                                                TOMMY MEN｜ARCHIVE FIT</p>
                                            <p className="season-subtitle">
                                                새롭게 선보이는 아카이브핏을 만나보세요</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="swiper-item">
                                <a href="#!">
                                    <div className="season-visual-wrap">
                                        <div className="season-visual-box">
                                            <img src="https://cdn.hfashionmall.com/display/plan/76/10676/10676_1PCE_PC_KOR_20230818160645.jpg?RS=576x576&amp;AR=0&amp;CS=576x576" alt="1" />
                                        </div>
                                    </div>
                                    <div className="season-info-wrap">
                                        <div className="season-text-box">
                                            <p className="season-title">
                                                TOMMY MEN｜ARCHIVE FIT</p>
                                            <p className="season-subtitle">
                                                새롭게 선보이는 아카이브핏을 만나보세요</p>
                                        </div>
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
                </Styles.Container>
            </section>
        </div>
    );
}

export default Promotion;