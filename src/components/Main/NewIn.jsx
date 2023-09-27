// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import * as Styles from './MainStyle';

import NewInMenData from '../../data/NewIn/men';
import NewInWomenData from '../../data/NewIn/women';
import NewInGolfData from '../../data/NewIn/golf';
import NewInKidsData from '../../data/NewIn/kids';
import NewInJeansData from '../../data/NewIn/tommyJeans';
import NewInShoesData from '../../data/NewIn/shoes';

function NewIn() {
    const [currentTab, setCurrentTab] = useState(0);

    const tabContents = {
        0: <All />,
        1: <Men />,
        2: <Women />,
        3: <Shoes />,
        4: <Jeans />,
        5: <Kids />,
        6: <Golf />
    }

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
        console.log(`현재 활성화 된 탭은 ${index}`);
    }
    

    return (
        <div>
            <section id='newIn'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">NEW IN</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-more-view type-dark-blue">
                                <span className="text">전체보기</span>
                                <i className="more-arr-dark-blue"></i>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <Styles.NewTab>
                        <button type="button" className="on">
                            <span>BRAND LINE</span>
                        </button>
                        <button type="button">
                            <span>CATEGORY</span>
                        </button>
                    </Styles.NewTab>
                    <Styles.NewCategory className='tabWrap'>
                        <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={()=> selectMenuHandler(0)}><span>ALL</span></button>
                        <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={()=> selectMenuHandler(1)}><span>MEN</span></button>
                        <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={()=> selectMenuHandler(2)}><span>WOMEN</span></button>
                        <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={()=> selectMenuHandler(3)}><span>TOMMY JEANS</span></button>
                        <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={()=> selectMenuHandler(4)}><span>KIDS</span></button>
                        <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={()=> selectMenuHandler(5)}><span>SHOES</span></button>
                        <button type="button" className={currentTab === 6 ? 'on' : ''} onClick={()=> selectMenuHandler(6)}><span>GOLF</span></button>
                    </Styles.NewCategory>
                    <Styles.NewContent className='menuWrap'>
                        <div className="slide-container">
                            {tabContents[currentTab]}
                            {/* <All />
                            <Men />
                            <Women />
                            <Shoes />
                            <Golf />
                            <Kids />
                            <Jeans /> */}
                            <div className="slide-nav">
                                <button className="slide-nav-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next">
                                    <span className="offscreen"></span>
                                </button>
                            </div>
                        </div>
                    </Styles.NewContent>
                </Styles.Container>
            </section>
        </div>
    );
}



function All() {
    const [randomData, setRandomData] = useState([]);

    const allData = [...NewInMenData, ...NewInWomenData, ...NewInGolfData, ...NewInKidsData, ...NewInJeansData, ...NewInShoesData];

    const getRandomData = () => {
        const shuffledData = [...allData].sort(() => Math.random() - 0.5);
        //-0.5는 sort 함수의 비교자(comparator)로 사용되며, 배열의 요소들을 무작위로 섞기 위한 것
        // Math.random() 함수는 0(포함)부터 1(제외) 사이의 무작위 숫자를 생성합니다. 
        // 즉, 0.0, 0.1, 0.2, ..., 0.99999까지의 값을 생성할 수 있지만, 실제로 1.0은 생성하지 않습니다.

        // 0.5를 Math.random()에서 뺄셈하는 것은 주로 무작위 값을 0을 중심으로 가운데 정렬하는 데 사용됩니다. 
        // 이렇게 하면 대략 절반의 시간 동안 결과값이 음수가 되고, 
        // 절반의 시간 동안 양수가 됩니다.

        // 이러한 값을 sort() 함수의 비교자로 사용하면 배열의 요소들을 사실상 무작위로 섞을 수 있습니다. 
        // 양수 값을 가진 요소는 배열 끝으로 이동하고, 
        // 음수 값을 가진 요소는 배열 앞쪽으로 이동하면서 배열이 섞인 효과를 만듭니다.

        const limitedData = shuffledData.slice(0, 10);;
        // 갯수 열개로 제한
        setRandomData(limitedData);
    };

    useEffect(() => {
        const menuIndex = document.querySelectorAll("#newIn .menuWrap ul");
        const TabIndex = document.querySelectorAll("#newIn .tabWrap button");

        console.log(`메뉴 갯수는 ${menuIndex.length} 탭 갯수는 ${TabIndex.length}`);

        getRandomData(); // Call the function to populate randomData
        console.log(`Total Data Length: ${allData.length}, Random Data Length: ${randomData.length}`);
    }, []);

    return (
        <ul className="swiper-wrapper">
            {randomData.map((item, index) => (
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
    )

}

function Men() {

    return (
        <ul className="swiper-wrapper">
            {NewInMenData.map((item, index) => (
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
    )
}

function Women() {
    return (
        <ul className="swiper-wrapper">
            {NewInWomenData.map((item, index) => (
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
    )
}

function Jeans() {

    return (
        <ul className="swiper-wrapper">
            {NewInJeansData.map((item, index) => (
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
    )
}

function Shoes() {
    return (
        <ul className="swiper-wrapper">
            {NewInShoesData.map((item, index) => (
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
    )
}

function Golf() {

    return (
        <ul className="swiper-wrapper">
            {NewInGolfData.map((item, index) => (
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
    )
}

function Kids() {

    return (
        <ul className="swiper-wrapper">
            {NewInKidsData.map((item, index) => (
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
    )
}









export default NewIn;