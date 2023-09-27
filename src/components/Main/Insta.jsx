import React from 'react';

import data from '../../data/insta.json';

import * as Styles from './MainStyle';

function Insta() {

    const imgData = data[0].img;

    return (
        <div>
            <section id='insta'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">INSTAGRAM</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-insta" target="_blank">
                                <span className="text">@tommyhilfiger</span>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <div className="slide-container insta">
                        <ul className="swiper-wrapper">
                            {imgData.map((item, index) => (
                                <li className="swiper-item" key={index}>
                                    <button type="button" className="btn-popup" value="1">
                                        <img src={process.env.PUBLIC_URL + item} alt={index}  />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="slide-nav">
                                    <button
                                        className="slide-nav-prev button-disabled"
                                    >
                                        <span className="offscreen"></span>
                                    </button>
                                    <button
                                        className="slide-nav-next"
                                    >
                                        <span className="offscreen"></span>
                                    </button>
                                </div>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Insta;