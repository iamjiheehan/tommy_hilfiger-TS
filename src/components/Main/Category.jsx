import React from 'react';

import * as Styles from './MainStyle';

import data from '../../data/category.json'

function Category() {

    const content = [...data];

    return (
        <div>
            <section id='categories'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">MORE CATEGORIES</h2>
                    </Styles.NewTitle>
                    <Styles.MoreContent>
                        <div className="slide-container">
                            <ul className="swiper-wrapper">
                                {content.map((item, index) => (
                                    <li className="swiper-item" key={index}>
                                        <a href="#!" className="link-item">
                                            <img src={process.env.PUBLIC_URL + item.img} alt={index} />
                                            <span className="text">{item.title}</span>
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
                    </Styles.MoreContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Category;