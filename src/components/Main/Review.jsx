import React from 'react';

import * as Styles from './MainStyle';

import MenData from '../../data/Review/men.json'
import WomenData from '../../data/Review/women';
import KidsData from '../../data/Review/kids';
import JeansData from '../../data/Review/tommyJeans';

import useRandomData from '../../hooks/useRandomize';
import { useSelectMenuHandler } from '../../hooks/useSelectMenuHandler';

import ReviewLayout from './ReviewLayout';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Review() {
    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);

    const tabContents = {
        0: <All />,
        1: <Best />,
        2: <Jeans />,
        3: <Women />,
        4: <Men />,
        5: <Kids />,
    }

    return (
        <div>
            <section id="review">
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">BEST REVIEW</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-more-view type-dark-blue">
                                <span className="text">전체보기</span>
                                <i className="more-arr-dark-blue"></i>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <Styles.RankingTab>
                        <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={() => selectMenuHandler(0)}><span>ALL</span></button>
                        <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={() => selectMenuHandler(1)}><span>BEST</span></button>
                        <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={() => selectMenuHandler(2)}><span>JEANS</span></button>
                        <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={() => selectMenuHandler(3)}><span>WOMEN</span></button>
                        <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={() => selectMenuHandler(4)}><span>MEN</span></button>
                        <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={() => selectMenuHandler(5)}><span>KIDS</span></button>
                    </Styles.RankingTab>
                    <div className='slide-section'>
                        <div className='slide-container review'>
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
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Review;

function All() {

    const allData = [...MenData, ...WomenData, ...KidsData, ...JeansData];
    const randomData = useRandomData(allData);

    return (
        <ReviewLayout items={randomData} />
    )
}

function Best() {

    const allData = [...MenData, ...WomenData, ...KidsData, ...JeansData];
    const randomData = useRandomData(allData);

    return (
        <ReviewLayout items={randomData} />
    )
}

function Men() {
    const menData = [...MenData];
    return (
        <ReviewLayout items={menData} />
    )
}

function Women() {
    const womenData = [...WomenData];
    return (
        <ReviewLayout items={womenData} />
    )
}

function Jeans() {
    const jeansData = [...JeansData];
    return (
        <ReviewLayout items={jeansData} />
    )
}

function Kids() {
    const kidsData = [...KidsData];
    return (
        <ReviewLayout items={kidsData} />
    )
}