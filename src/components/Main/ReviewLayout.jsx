import React from 'react';

function ReviewLayout({ items }) {
    return (
        <ul className='swiper-wrapper'>
            {items.map((item, index) => (
                <li className="swiper-item" key={index}>
                    <figure className="item-box">
                        <div className="item-img top">
                            <div className="img-box">
                                <a href="#!">
                                    <img src={process.env.PUBLIC_URL + item.img} alt={item.name} />
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
        </ul>
    );
}

export default ReviewLayout;