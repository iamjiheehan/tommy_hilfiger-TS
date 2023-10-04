import React from 'react';

import * as Styles from './MainStyle';
import MDbanner from '../../assets/images/mdPickBanner.jpg';

import MenData from '../../data/MdsPick/men';
import WomenData from '../../data/MdsPick/women';
import KidsData from '../../data/MdsPick/kids';
import JeansData from '../../data/MdsPick/tommyJeans';
import ShoesData from '../../data/MdsPick/shoes';

import useRandomData from '../../hooks/useRandomize';
import { useSelectMenuHandler } from '../../hooks/useSelectMenuHandler';
import { Navigation} from 'swiper/modules';

import ItemLayout from './ItemLayout';

function Md() {

    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);

    const swiperMdsParams = {
        className:"swiper-wrapper Mds",
        slidesPerView:5,
        spaceBetween:20,
        navigation:{
            prevEl: '.slide-nav-prev.md ',
            nextEl: '.slide-nav-next.md',
        },
        pagination:{
            clickable: true
        },
        modules:{Navigation}
    }

    const tabContents = {
        0: <All swiperParams={swiperMdsParams} />,
        1: <Men swiperParams={swiperMdsParams}/>,
        2: <Women swiperParams={swiperMdsParams}/>,
        3: <Jeans swiperParams={swiperMdsParams}/>,
        4: <Kids swiperParams={swiperMdsParams}/>,
        5: <Shoes swiperParams={swiperMdsParams}/>,
    }

    return (
        <div>
            <section id='md'>
                <Styles.MDbanner>
                    <img src={MDbanner} className="visual-img-box" alt="" />
                    <div className="visual-text-box">
                        <p className="pick-subtitle">MD가 추천하는 아이템 모음</p>
                        <p className="pick-title">MD's PICK</p>
                    </div>
                    <div className="category-tab">
                        <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={() => selectMenuHandler(0)}><span>ALL</span></button>
                        <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={() => selectMenuHandler(1)}><span>MEN</span></button>
                        <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={() => selectMenuHandler(2)}><span>WOMEN</span></button>
                        <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={() => selectMenuHandler(3)}><span>TOMMY JEANS</span></button>
                        <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={() => selectMenuHandler(4)}><span>KIDS</span></button>
                        <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={() => selectMenuHandler(5)}><span>SHOES</span></button>
                    </div>
                </Styles.MDbanner>
                <Styles.MdContent>
                    <div className="slide-container">
                        {tabContents[currentTab]}
                        <div className="slide-nav">
                            <button className="slide-nav-prev button-disabled md">
                                <span className="offscreen"></span>
                            </button>
                            <button className="slide-nav-next md">
                                <span className="offscreen"></span>
                            </button>
                        </div>
                    </div>
                </Styles.MdContent>
            </section>
        </div >
    );
}

export default Md;

function All({swiperParams}) {

    const allData = [...MenData, ...WomenData, ...KidsData, ...JeansData, ...ShoesData];
    const randomData = useRandomData(allData);

    return (
        <ItemLayout items={randomData} params={swiperParams} />
    )
}

function Men({swiperParams}) {
    const menData = [...MenData];
    return (
        <ItemLayout items={menData} params={swiperParams} />
    )
}

function Women({swiperParams}) {
    const womenData = [...WomenData];
    return (
        <ItemLayout items={womenData} params={swiperParams} />
    )
}

function Jeans({swiperParams}) {
    const jeansData = [...JeansData];
    return (
        <ItemLayout items={jeansData} params={swiperParams} />
    )
}

function Shoes({swiperParams}) {
    const shoesData = [...ShoesData];
    return (
        <ItemLayout items={shoesData} params={swiperParams} />
    )
}

function Kids({swiperParams}) {
    const kidsData = [...KidsData];
    return (
        <ItemLayout items={kidsData} params={swiperParams} />
    )
}