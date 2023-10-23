import React, { useEffect, useState } from 'react';
import * as Styles from './SubMainStyles';
import NewInMenData from '../../data/NewIn/men';
import NewInWomenData from '../../data/NewIn/women';
import NewInGolfData from '../../data/NewIn/golf';
import NewInKidsData from '../../data/NewIn/kids';
import NewInJeansData from '../../data/NewIn/tommyJeans';
import NewInShoesData from '../../data/NewIn/shoes';
import ItemLayout from '../Main/ItemLayout';
import { Link } from 'react-router-dom';

export default function SubMain({ tabId }) {
    // 모든 제품 데이터를 하나의 배열로 병합
    const productData = [
        ...NewInMenData,
        ...NewInWomenData,
        ...NewInGolfData,
        ...NewInKidsData,
        ...NewInJeansData,
        ...NewInShoesData,
    ];
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("SubMain 컴포넌트에서 받은 tabID 값: " + tabId);
        // tabId와 일치하는 아이템만 필터링
        const filteredItems = productData.filter(item => item.id === tabId);
        setItems(filteredItems);
        console.log("일치하는 아이템들:", filteredItems);
    }, [tabId]);

    return (
        <>
            <Styles.SubContainer>
                    {items.map(item => {
                        <h2 className='title'>{item.brand}</h2>
                    })}
                <div className='wrap-product-list'>
                    {/* 필요한 다른 컨텐츠 추가 가능 */}
                </div>
                <div className="product-list" id='productList'>
                    {items.map(item => (
                        <ul className="swiper-item" key={item.id}>
                            <div>
                                <Link to={`/product/${item.id}`} state={{ item }}>
                                    <figure className="item-box">
                                        <div className="item-img">
                                            <div className="img-box">
                                                <a href="#!">
                                                    <div className="img">
                                                        <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.name} />
                                                    </div>
                                                </a>
                                            </div>
                                            <button type="button" className="btn-like"></button>
                                            <button type="button" className="btn-quick"></button>
                                        </div>
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
                                                    <div className="item-label"></div>
                                                </div>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </ul>
                    ))}
                </div>
            </Styles.SubContainer>
        </>
    );
}
