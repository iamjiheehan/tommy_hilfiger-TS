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
        console.log(tabName, activeTab);
    };

    const [selectedRankingField, setSelectedRankingField] = useState('liveRank');
    // liveRank를 기본값으로 설정

    const allData = [
        ...MenData,
        ...WomenData,
        ...GolfData,
        ...KidsData,
        ...JeansData,
        ...ShoesData,
    ];

    const sortData = (data, sortBy) => [...data].sort(sortBy);

    const sortByLiveRank = (a, b) => parseInt(a.liveRank) - parseInt(b.liveRank);
    const sortByDailyRank = (a, b) => parseInt(a.dailyRank) - parseInt(b.dailyRank);
    const sortByWeeklyRank = (a, b) => parseInt(a.weeklyRank) - parseInt(b.weeklyRank);
    const sortByMonthlyRank = (a, b) => parseInt(a.monthlyRank) - parseInt(b.monthlyRank);

    const tabContents = {
        0: <All items={allData} />,
        1: (
            <Men
                items={sortData(MenData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
            />
        ),
        2: (
            <Women
                items={sortData(WomenData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
            />
        ),
        3: (

            <Jeans
                items={sortData(JeansData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
            />
        ),
        4: (
            <Kids
                items={sortData(KidsData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
            />
        ),
        5: (

            <Shoes
                items={sortData(ShoesData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
            />
        ),
        6: (
            <Golf
                items={sortData(GolfData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
            />
        ),
    }


    const handleLiveRankClick = () => {
        setSelectedRankingField('liveRank');
    };

    const handleDailyRankClick = () => {
        setSelectedRankingField('dailyRank');
    };

    const handleWeeklyRankClick = () => {
        setSelectedRankingField('weeklyRank');
    };

    const handleMonthlyRankClick = () => {
        setSelectedRankingField('monthlyRank');
    };


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
                            onClick={() => {
                                handleTabClick('실시간');
                                handleLiveRankClick();
                            }}
                        >
                            <span>실시간</span>
                        </button>
                        <button
                            type="button"
                            className={activeTab === '일간' ? 'on' : ''}
                            onClick={() => {
                                handleTabClick('일간');
                                handleDailyRankClick();
                            }}
                        >
                            <span>일간</span>
                        </button>
                        <button
                            type="button"
                            className={activeTab === '주간' ? 'on' : ''}
                            onClick={() => {
                                handleTabClick('주간');
                                handleWeeklyRankClick();
                            }}
                        >
                            <span>주간</span>
                        </button>
                        <button
                            type="button"
                            className={activeTab === '월간' ? 'on' : ''}
                            onClick={() => {
                                handleTabClick('월간');
                                handleMonthlyRankClick();
                            }}
                        >
                            <span>월간</span>
                        </button>
                    </Styles.RankingTab>
                    <Styles.NewContent>
                        <div className="slide-container">
                            {tabContents[currentTab]}

                        </div>
                    </Styles.NewContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Ranking;

function All({ items }) {
    const randomData = useRandomData(items);

    return (
        <ItemLayout items={randomData} />
    )
}

function Men({ items }) {
    return (
        <ItemLayout items={items} />
    )
}

function Women({ items }) {
    return (
        <ItemLayout items={items} />
    )
}

function Jeans({ items }) {
    return (
        <ItemLayout items={items} />
    )
}

function Shoes({ items }) {
    return (
        <ItemLayout items={items} />
    )
}

function Golf({ items }) {
    return (
        <ItemLayout items={items} />
    )
}

function Kids({ items }) {
    return (
        <ItemLayout items={items} />
    )
}