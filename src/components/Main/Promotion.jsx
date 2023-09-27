import React from 'react';
import * as Styles from './MainStyle';

import data from '../../data/promotion.json'

function Promotion() {
    const content = [...data]

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
                            {content.map((item, index) => (
                                <li className="swiper-item" key={index} >
                                    <a href="#!">
                                        <div className="season-visual-wrap">
                                            <div className="season-visual-box">
                                                <img src={process.env.PUBLIC_URL + item.img} alt={index} />
                                            </div>
                                        </div>
                                        <div className="season-info-wrap">
                                            <div className="season-text-box">
                                                <p className="season-title">
                                                    {item.title}</p>
                                                <p className="season-subtitle">
                                                    {item.subtitle}</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
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