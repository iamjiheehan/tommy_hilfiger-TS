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

import ItemLayout from './Layout';

function Md() {

    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);

    const tabContents = {
        0: <All />,
        1: <Men />,
        2: <Women />,
        3: <Shoes />,
        4: <Jeans />,
        5: <Kids />,
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
                            <button className="slide-nav-prev button-disabled">
                                <span className="offscreen"></span>
                            </button>
                            <button className="slide-nav-next">
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

function All() {

    const allData = [...MenData, ...WomenData, ...KidsData, ...JeansData, ...ShoesData];
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

function Kids() {
    const kidsData = [...KidsData];
    return (
        <ItemLayout items={kidsData} />
    )
}