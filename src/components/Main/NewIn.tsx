// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import * as Styles from './MainStyle';

import NewInMenData from '../../data/NewIn/men.json';
import NewInWomenData from '../../data/NewIn/women.json';
import NewInGolfData from '../../data/NewIn/golf.jsonmen.json';
import NewInKidsData from '../../data/NewIn/kids.jsonmen.json';
import NewInJeansData from '../../data/NewIn/tommyJeans.jsonmen.json';
import NewInShoesData from '../../data/NewIn/shoes.jsonmen.json';

import { useRandomData } from '../../hooks/useRandomize';
import { useSelectMenuHandler } from '../../hooks/useSelectMenuHandler';

import ItemLayout from './ItemLayout';

import { Navigation } from 'swiper/modules';

import { useDispatch } from "react-redux";
import { setProducts } from '../../store';

// 탭 컨텐츠 프로퍼티 타입 정의
interface TabContentProps {
    swiperParams: Record<string, any>;
}

function NewIn() {
    const productData = [...NewInMenData, ...NewInWomenData, ...NewInGolfData, ...NewInKidsData, ...NewInJeansData, ...NewInShoesData];

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setProducts(productData));
    })

    // 에러해결참고:
    // https://velog.io/@pon06188/Warning-Cannot-update-a-component-A-while-rendering-a-different-component-B.-To-locate-the-bad-setState-call-inside-B-follow-the-stack-trace-as-described-in-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0

    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const swiperNewInParams = {
        className: "swiper-wrapper newIn",
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            prevEl: '.slide-nav-prev.newIn ',
            nextEl: '.slide-nav-next.newIn',
        },
        pagination: {
            clickable: true
        },
        modules: [Navigation] 
    }

    const tabContArr = [
        {
            tabTitle: (
                <button type="button" className={activeIndex === 0 ? 'on' : ''} onClick={() => tabClickHandler(0)}>
                    <span>BRAND LINE</span>
                </button>
            ),
            tabCont: (
                <Styles.NewCategory className='tabWrap'>
                    <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={() => selectMenuHandler(0)}><span>ALL</span></button>
                    <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={() => selectMenuHandler(1)}><span>WOMEN</span></button>
                    <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={() => selectMenuHandler(2)}><span>MEN</span></button>
                    <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={() => selectMenuHandler(3)}><span>KIDS</span></button>
                    <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={() => selectMenuHandler(4)}><span>TOMMY JEANS</span></button>
                    <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={() => selectMenuHandler(5)}><span>SHOES</span></button>
                    <button type="button" className={currentTab === 6 ? 'on' : ''} onClick={() => selectMenuHandler(6)}><span>GOLF</span></button>
                </Styles.NewCategory>
            )
        },
        {
            tabTitle: (
                <button type="button" className={activeIndex === 1 ? 'on' : ''} onClick={() => tabClickHandler(1)}>
                    <span>CATEGORY</span>
                </button>
            ),
            tabCont: (
                <Styles.NewCategory className='tabWrap'>
                    <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={() => selectMenuHandler(0)}><span>ALL</span></button>
                    <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={() => selectMenuHandler(1)}><span>여성</span></button>
                    <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={() => selectMenuHandler(2)}><span>남성</span></button>
                    <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={() => selectMenuHandler(3)}><span>키즈</span></button>
                    <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={() => selectMenuHandler(5)}><span>잡화</span></button>
                    <button type="button" className={currentTab === 6 ? 'on' : ''} onClick={() => selectMenuHandler(6)}><span>골프</span></button>
                </Styles.NewCategory>
            )
        }
    ];
    const tabClickHandler= (index:number ) => {
        setActiveIndex(index)
    }
    const tabContents: Record<number, React.ReactNode> = {
        0: <All swiperParams={swiperNewInParams} />,
        1: <Women swiperParams={swiperNewInParams} />,
        2: <Men swiperParams={swiperNewInParams} />,
        3: <Kids swiperParams={swiperNewInParams} />,
        4: <Jeans swiperParams={swiperNewInParams} />,
        5: <Shoes swiperParams={swiperNewInParams} />,
        6: <Golf swiperParams={swiperNewInParams} />
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
                        {tabContArr.map((section, index) => {
                            return section.tabTitle
                        })}
                    </Styles.NewTab>
                    {tabContArr[activeIndex].tabCont}
                    <Styles.NewContent className='menuWrap'>
                        <div className="slide-container">
                            {tabContents[currentTab]}
                            <div className="slide-nav">
                                <button className="slide-nav-prev button-disabled newIn">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next newIn">
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

function All({ swiperParams }:TabContentProps) {

    const allData = [...NewInMenData, ...NewInWomenData, ...NewInGolfData, ...NewInKidsData, ...NewInJeansData, ...NewInShoesData];
    const randomData = useRandomData(allData);
    // const getRandomData = () => {
    //     const shuffledData = [...allData].sort(() => Math.random() - 0.5);


    //     const limitedData = shuffledData.slice(0, 10);;
    //     setRandomData(limitedData);
    // };

    // useEffect(() => {
    //     const menuIndex = document.querySelectorAll("#newIn .menuWrap ul");
    //     const TabIndex = document.querySelectorAll("#newIn .tabWrap button");

    //     console.log(`메뉴 갯수는 ${menuIndex.length} 탭 갯수는 ${TabIndex.length}`);

    //     getRandomData(); 
    //     console.log(`Total Data Length: ${allData.length}, Random Data Length: ${randomData.length}`);
    // }, []);

    return (
        <ItemLayout items={randomData} params={swiperParams} />
    )
}

function Men({ swiperParams }:TabContentProps) {
    const menData = [...NewInMenData];
    return (
        <ItemLayout items={menData} params={swiperParams} />
    )
}

function Women({ swiperParams }:TabContentProps) {
    const womenData = [...NewInWomenData];
    return (
        <ItemLayout items={womenData} params={swiperParams} />
    )
}

function Jeans({ swiperParams }:TabContentProps) {
    const jeansData = [...NewInJeansData];
    return (
        <ItemLayout items={jeansData} params={swiperParams} />
    )
}

function Shoes({ swiperParams }:TabContentProps) {
    const shoesData = [...NewInShoesData];
    return (
        <ItemLayout items={shoesData} params={swiperParams} />
    )
}

function Golf({ swiperParams }:TabContentProps) {
    const golfData = [...NewInGolfData];
    return (
        <ItemLayout items={golfData} params={swiperParams} />
    )
}

function Kids({ swiperParams }:TabContentProps) {
    const kidsData = [...NewInKidsData];
    return (
        <ItemLayout items={kidsData} params={swiperParams} />
    )
}

export default NewIn;