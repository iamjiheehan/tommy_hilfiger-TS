import React, { useState } from 'react';

import * as Styles from './MainStyle';

import MenData from '../../data/TopRanking/men';
import WomenData from '../../data/TopRanking/women';
import GolfData from '../../data/TopRanking/golf';
import KidsData from '../../data/TopRanking/kids';
import JeansData from '../../data/TopRanking/tommyJeans';
import ShoesData from '../../data/TopRanking/shoes';

import useRandomData from '../../hooks/useRandomize';
import { useSelectMenuHandler } from '../../hooks/useSelectMenuHandler';

import ItemLayout from './ItemRankingLayout';

function Ranking() {
    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);

    const [activeTab, setActiveTab] = useState('실시간');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };



    //주간 일간 버튼 클릭할때마다 랜덤으로 sort하기
    const tabContents = {
        0: <All />,
        1: <Men />,
        2: <Women />,
        3: <Shoes />,
        4: <Jeans />,
        5: <Kids />,
        6: <Golf />
    }

    return (
        <div>
            <section id='ranking'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">TOP RANKING</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-more-view type-dark-blue">
                                <span className="text">전체보기</span>
                                <i className="more-arr-dark-blue"></i>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <Styles.NewTab>
                        <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={() => selectMenuHandler(0)}><span>ALL</span></button>
                        <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={() => selectMenuHandler(1)}><span>MEN</span></button>
                        <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={() => selectMenuHandler(2)}><span>WOMEN</span></button>
                        <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={() => selectMenuHandler(3)}><span>TOMMY JEANS</span></button>
                        <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={() => selectMenuHandler(4)}><span>KIDS</span></button>
                        <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={() => selectMenuHandler(5)}><span>SHOES</span></button>
                        <button type="button" className={currentTab === 6 ? 'on' : ''} onClick={() => selectMenuHandler(6)}><span>GOLF</span></button>
                    </Styles.NewTab>
                    <Styles.RankingTab>
                        <button
                            type="button"
                            className={activeTab === '실시간' ? 'on' : ''}
                            onClick={() => handleTabClick('실시간')}
                        >
                            <span>실시간</span>
                        </button>
                        <button
                            type="button"
                            className={activeTab === '일간' ? 'on' : ''}
                            onClick={() => handleTabClick('일간')}
                        >
                            <span>일간</span>
                        </button>
                        <button
                            type="button"
                            className={activeTab === '주간' ? 'on' : ''}
                            onClick={() => handleTabClick('주간')}
                        >
                            <span>주간</span>
                        </button>
                        <button
                            type="button"
                            className={activeTab === '월간' ? 'on' : ''}
                            onClick={() => handleTabClick('월간')}
                        >
                            <span>월간</span>
                        </button>
                    </Styles.RankingTab>
                    <Styles.NewContent>
                        <div className="slide-container">
                            {tabContents[currentTab]}
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

export default Ranking;

function All() {

    const allData = [...MenData, ...WomenData, ...GolfData, ...KidsData, ...JeansData, ...ShoesData];
    const randomData = useRandomData(allData);

    return (
        <ItemLayout items={randomData} />
    )
}

function Men() {
    const menData = [...MenData];
    return (
        <ItemLayout items={menData} />
    )
}

function Women() {
    const womenData = [...WomenData];
    return (
        <ItemLayout items={womenData} />
    )
}

function Jeans() {
    const jeansData = [...JeansData];
    return (
        <ItemLayout items={jeansData} />
    )
}

function Shoes() {
    const shoesData = [...ShoesData];
    return (
        <ItemLayout items={shoesData} />
    )
}

function Golf() {
    const golfData = [...GolfData];
    return (
        <ItemLayout items={golfData} />
    )
}

function Kids() {
    const kidsData = [...KidsData];
    return (
        <ItemLayout items={kidsData} />
    )
}