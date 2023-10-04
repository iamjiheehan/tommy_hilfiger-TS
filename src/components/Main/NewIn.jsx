// eslint-disable-next-line
import React, { useState } from 'react';

import * as Styles from './MainStyle';

import NewInMenData from '../../data/NewIn/men';
import NewInWomenData from '../../data/NewIn/women';
import NewInGolfData from '../../data/NewIn/golf';
import NewInKidsData from '../../data/NewIn/kids';
import NewInJeansData from '../../data/NewIn/tommyJeans';
import NewInShoesData from '../../data/NewIn/shoes';

import useRandomData from '../../hooks/useRandomize';
import {useSelectMenuHandler} from '../../hooks/useSelectMenuHandler';

import ItemLayout from './ItemLayout';

function NewIn() {
    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const tabContArr=[
            {
                tabTitle:(
                    <button type="button" className={activeIndex === 0 ? 'on' : ''} onClick={()=>tabClickHandler(0)}>
                        <span>BRAND LINE</span>
                    </button>
                ),
                tabCont:(
                    <Styles.NewCategory className='tabWrap'>
                        <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={()=> selectMenuHandler(0)}><span>ALL</span></button>
                        <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={()=> selectMenuHandler(1)}><span>WOMEN</span></button>
                        <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={()=> selectMenuHandler(2)}><span>MEN</span></button>
                        <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={()=> selectMenuHandler(3)}><span>TOMMY JEANS</span></button>
                        <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={()=> selectMenuHandler(4)}><span>KIDS</span></button>
                        <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={()=> selectMenuHandler(5)}><span>SHOES</span></button>
                        <button type="button" className={currentTab === 6 ? 'on' : ''} onClick={()=> selectMenuHandler(6)}><span>GOLF</span></button>
                    </Styles.NewCategory>
                )
            },
            {
                tabTitle:(
                    <button type="button" className={activeIndex === 1 ? 'on' : ''} onClick={()=>tabClickHandler(1)}>
                        <span>CATEGORY</span>
                    </button>
                ),
                tabCont:(
                    <Styles.NewCategory className='tabWrap'>
                        <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={()=> selectMenuHandler(0)}><span>ALL</span></button>
                        <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={()=> selectMenuHandler(1)}><span>여성</span></button>
                        <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={()=> selectMenuHandler(2)}><span>남성</span></button>
                        <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={()=> selectMenuHandler(4)}><span>키즈</span></button>
                        <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={()=> selectMenuHandler(5)}><span>잡화</span></button>
                        <button type="button" className={currentTab === 6 ? 'on' : ''} onClick={()=> selectMenuHandler(6)}><span>골프</span></button>
                    </Styles.NewCategory>
                )
            }
        ];
        const tabClickHandler=(index)=>{
            setActiveIndex(index)
        }
    const tabContents = {
        0: <All />,
        1: <Women />,
        2: <Men />,
        3: <Shoes />,
        4: <Jeans />,
        5: <Kids />,
        6: <Golf />
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
                        {tabContArr.map((section, index)=>{
                            return section.tabTitle
                        })}
                    </Styles.NewTab>
                    {tabContArr[activeIndex].tabCont}
                    <Styles.NewContent className='menuWrap'>
                        <div className="slide-container">
                            {tabContents[currentTab]}
                            <div className="slide-nav">
                                <button className="slide-nav-prev swiper-button-next button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next swiper-button-next">
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
        <ItemLayout items={randomData} />
    )
}

function Men() {
    const menData = [...NewInMenData];
    return (
        <ItemLayout items={menData} />
    )
}

function Women() {
    const womenData = [...NewInWomenData];
    return (
        <ItemLayout items={womenData} />
    )
}

function Jeans() {
    const jeansData = [...NewInJeansData];
    return (
        <ItemLayout items={jeansData} />
    )
}

function Shoes() {
    const shoesData = [...NewInShoesData];
    return (
        <ItemLayout items={shoesData} />
    )
}

function Golf() {
    const golfData = [...NewInGolfData];
    return (
        <ItemLayout items={golfData} />
    )
}

function Kids() {
    const kidsData = [...NewInKidsData];
    return (
        <ItemLayout items={kidsData} />
    )
}

export default NewIn;