import React, { useEffect, useState } from 'react';

import * as Styles from './MainStyle';

import MenData from '../../data/TopRanking/men.json';
import WomenData from '../../data/TopRanking/women.json';
import GolfData from '../../data/TopRanking/golf.json';
import KidsData from '../../data/TopRanking/kids.json';
import JeansData from '../../data/TopRanking/tommyJeans.json';
import ShoesData from '../../data/TopRanking/shoes.json';

import { useSelectMenuHandler } from '../../hooks/useSelectMenuHandler';

import { Navigation } from 'swiper/modules';
import { ItemRankingLayout, Item } from './ItemRankingLayout';

function Ranking() {
    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);

    const [activeTab, setActiveTab] = useState('실시간');

    const handleTabClick = (tabName:string) => {
        setActiveTab(tabName);
        console.log(tabName, activeTab);
    };

    const swiperRankingparams = {
        className: "swiper-wrapper ranking",
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            prevEl: '.ranking-prev ',
            nextEl: '.ranking-next',
        },
        pagination: {
            clickable: true
        },
        modules: {Navigation},
        allowSlidePrev: true,
        allowSlideNext: true,
    }

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

    const sortData = (data: Item[], sortBy: (a: Item, b: Item) => number) => [...data].sort(sortBy);

    const sortByLiveRank = (a: Item, b: Item) => a.liveRank - b.liveRank;
    const sortByDailyRank = (a: Item, b: Item) => a.dailyRank - b.dailyRank;
    const sortByWeeklyRank = (a: Item, b: Item) => a.weeklyRank - b.weeklyRank;
    const sortByMonthlyRank = (a: Item, b: Item) => a.monthlyRank - b.monthlyRank;
    

    const tabContents: Record<number, React.ReactNode> = {
        0: <All items={allData} swiperParams={swiperRankingparams} />,
        1: (
            <Men
                items={sortData(MenData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
                swiperParams={swiperRankingparams}
            />
        ),
        2: (
            <Women
                items={sortData(WomenData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
                swiperParams={swiperRankingparams}
            />
        ),
        3: (
            <Jeans
                items={sortData(JeansData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
                swiperParams={swiperRankingparams}
            />
        ),
        4: (
            <Kids
            items={sortData(KidsData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
                swiperParams={swiperRankingparams}
            />
        ),
        5: (
            <Shoes
                items={sortData(ShoesData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
                swiperParams={swiperRankingparams}
            />
        ),
        6: (
            <Golf
                items={sortData(GolfData, selectedRankingField === 'liveRank' ? sortByLiveRank :
                    selectedRankingField === 'dailyRank' ? sortByDailyRank :
                        selectedRankingField === 'weeklyRank' ? sortByWeeklyRank :
                            sortByMonthlyRank
                )}
                swiperParams={swiperRankingparams}
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
                            <div className="slide-nav">
                                <button className="ranking-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="ranking-next">
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

// 탭 컨텐츠 프로퍼티 타입 정의
interface TabContentProps {
    swiperParams: Record<string, any>;
    items : Item[];
}

export function useRandomData(allData: Item[]): Item[] {
    const [randomData, setRandomData] = useState<Item[]>([]);

    useEffect(() => {
        const shuffledData = [...allData].sort(() => Math.random() - 0.5);
        const limitedData = shuffledData.slice(0, 10);
        // 갯수 열개로 제한
        setRandomData(limitedData);
    }, []);

    return randomData;
}

function All({swiperParams}:TabContentProps) {

    const allData = [...MenData, ...WomenData, ...KidsData, ...JeansData];
    const randomData = useRandomData(allData);

    return (
        <ItemRankingLayout items={randomData} params={swiperParams}/>
    )
}

function Men({ swiperParams }:TabContentProps) {
    const menData = [...MenData];
    return (
        <ItemRankingLayout items={menData} params={swiperParams} />
    )
}

function Women({ swiperParams }:TabContentProps) {
    const womenData = [...WomenData];
    return (
        <ItemRankingLayout items={womenData} params={swiperParams} />
    )
}

function Jeans({ swiperParams }:TabContentProps) {
    const jeansData = [...JeansData];
    return (
        <ItemRankingLayout items={jeansData} params={swiperParams} />
    )
}

function Shoes({ swiperParams }:TabContentProps) {
    const shoesData = [...ShoesData];

    return (
        <ItemRankingLayout items={shoesData} params={swiperParams} />
    )
}

function Golf({ swiperParams }:TabContentProps) {
    const golfData = [...GolfData];
    return (
        <ItemRankingLayout items={golfData} params={swiperParams} />
    )
}

function Kids({ swiperParams }:TabContentProps) {
    const kidsData = [...KidsData];
    return (
        <ItemRankingLayout items={kidsData} params={swiperParams} />
    )
}