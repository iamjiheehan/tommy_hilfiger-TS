import React from 'react';

import * as Styles from './MainStyle';

import IssueData from '../../data/issue.json'

function Issue() {
    const data = [...IssueData];

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
                                {data.map((item, index) => (
                                    <li className="swiper-item" key={index}>
                                        <div className="season-visual-wrap">
                                            <a href="#!" className="season-visual-box">
                                                <img src={process.env.PUBLIC_URL + item.season.img} alt={item.season.img}  />
                                            </a>
                                        </div>
                                        <div className="season-info-wrap">
                                            <div className="season-text-box">
                                                <p className="season-title">
                                                    {item.season.title}</p>
                                                <p className="season-subtitle">
                                                    {item.season.subtitle}</p>
                                                <a href="#!" className="btn-season-more">
                                                    <span className="text">{item.season.text}</span>
                                                </a>
                                            </div>
                                            <ul className="product-list">
                                                {data.map((item, index) => (
                                                    <li key={index}>
                                                        <figure className="item-box">
                                                            <div className="item-img">
                                                                <div className="img-box">
                                                                    <a href="#!">
                                                                        <div className="img"><img src={process.env.PUBLIC_URL + item.product.img} alt={item.product.img} /></div>
                                                                    </a>
                                                                </div>
                                                                <button type="button" className="btn-like"><span></span></button>
                                                            </div>
                                                            <figcaption className="item-info">
                                                                <a href="#!">
                                                                    <div className="item-brand">{item.product.brand}</div>
                                                                    <div className="item-name">{item.product.name}</div>
                                                                    <div className="item-opt">
                                                                        <span className="item-price">
                                                                            <div className="item-price">
                                                                                <span className="price">{item.product.price}</span>
                                                                                <del className="regular">{item.product.regular}</del>
                                                                                <span className="percent">{item.product.percent}</span>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </figcaption>
                                                        </figure>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Styles.IssueContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Issue;