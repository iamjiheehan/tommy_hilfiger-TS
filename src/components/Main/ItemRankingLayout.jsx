import React from "react";

function ItemLayout({ items }) {
    return (
        <ul className="swiper-wrapper">
            {items.map((item, index) => (
                <li className="swiper-item" key={index}>
                    <figure className="item-box">
                        <div className="item-img">
                            <div className="img-box">
                                <a href="#!">
                                    <div className="img">
                                        <img src={process.env.PUBLIC_URL + item.img} alt={item.name} />
                                    </div>
                                </a>
                            </div>
                            <button type="button" className="btn-like"></button>
                            <button type="button" className="btn-quick"></button>
                        </div>
                        <figcaption className="item-info">
                            <a href="#!">
                                <span className="item-rank">{index + 1}</span>
                                <div className="item-brand">{item.brand}</div>
                                <div className="item-name">{item.name}</div>
                                <div className="item-opt">
                                    <div className="item-price">
                                        <span className="price">{item.price}</span>
                                        <del className="regular">{item.regular}</del>
                                        <span className="percent">{item.percent}</span>
                                    </div>
                                    <div className="item-label"></div>
                                </div>
                            </a>
                        </figcaption>
                    </figure>
                </li>
            ))}
        </ul>
    );
}

export default ItemLayout;
