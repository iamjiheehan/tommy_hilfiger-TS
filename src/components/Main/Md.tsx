import React from "react";
import * as Styles from "./MainStyle";
import MDbanner from "../../assets/images/mdPickBanner.jpg";
import MenData from "../../data/MdsPick/men.json";
import WomenData from "../../data/MdsPick/women.json";
import KidsData from "../../data/MdsPick/kids.json";
import JeansData from "../../data/MdsPick/tommyJeans.json";
import ShoesData from "../../data/MdsPick/shoes.json";
import { useRandomData , DataItem } from "../../hooks/useRandomize";
import { useSelectMenuHandler} from "../../hooks/useSelectMenuHandler";
import { Navigation } from "swiper/modules";
import ItemLayout, { Item } from "./ItemLayout"; // Item 타입 추가

// 탭 컨텐츠 프로퍼티 타입 정의
interface TabContentProps {
    swiperParams: Record<string, any>;
}
//Record는 TypeScript에서 사용되는 타입
//객체의 키-값 쌍을 포함하는 객체를 나타낸다.


function Md() {
    // 현재 탭 상태와 탭 선택 핸들러를 관리
    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);

    // Swiper 설정
    const swiperMdsParams = {
        className: "swiper-wrapper Mds",
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            prevEl: ".slide-nav-prev.md ",
            nextEl: ".slide-nav-next.md",
        },
        pagination: {
            clickable: true,
        },
        modules: { Navigation },
    };

    // 탭 내용 정의
    const tabContents: Record<number, React.ReactNode> = {
        0: <All swiperParams={swiperMdsParams} />,
        1: <Men swiperParams={swiperMdsParams} />,
        2: <Women swiperParams={swiperMdsParams} />,
        3: <Jeans swiperParams={swiperMdsParams} />,
        4: <Kids swiperParams={swiperMdsParams} />,
        5: <Shoes swiperParams={swiperMdsParams} />,
    };
    //React.ReactNode는 React 애플리케이션에서 사용되는 컴포넌트나 
    //요소의 내용(콘텐츠)을 나타내는 TypeScript 타입이다.
    //React.ReactNode으로 표시된 변수나 프로퍼티는 
    //일반적으로 다음과 같은 유형을 가질 수 있다.
    // HTML 요소(<div>, <span>, 등)
    // 문자열
    // 숫자
    // 다른 React 요소 또는 컴포넌트
    // 조건부 표현식
    // 배열(React 노드의 목록)


    return (
        <div>
            <section id="md">
                <Styles.MDbanner>
                    <img src={MDbanner} className="visual-img-box" alt="" />
                    <div className="visual-text-box">
                        <p className="pick-subtitle">
                            MD가 추천하는 아이템 모음
                        </p>
                        <p className="pick-title">MD's PICK</p>
                    </div>
                    <div className="category-tab">
                        <button
                            type="button"
                            className={currentTab === 0 ? "on" : ""}
                            onClick={() => selectMenuHandler(0)}
                        >
                            <span>ALL</span>
                        </button>
                        <button
                            type="button"
                            className={currentTab === 1 ? "on" : ""}
                            onClick={() => selectMenuHandler(1)}
                        >
                            <span>MEN</span>
                        </button>
                        <button
                            type="button"
                            className={currentTab === 2 ? "on" : ""}
                            onClick={() => selectMenuHandler(2)}
                        >
                            <span>WOMEN</span>
                        </button>
                        <button
                            type="button"
                            className={currentTab === 3 ? "on" : ""}
                            onClick={() => selectMenuHandler(3)}
                        >
                            <span>TOMMY JEANS</span>
                        </button>
                        <button
                            type="button"
                            className={currentTab === 4 ? "on" : ""}
                            onClick={() => selectMenuHandler(4)}
                        >
                            <span>KIDS</span>
                        </button>
                        <button
                            type="button"
                            className={currentTab === 5 ? "on" : ""}
                            onClick={() => selectMenuHandler(5)}
                        >
                            <span>SHOES</span>
                        </button>
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
        </div>
    );
}



function All({ swiperParams }: TabContentProps) {
    
    // 모든 데이터를 합침
    const allData: DataItem[] = [
        ...MenData,
        ...WomenData,
        ...KidsData,
        ...JeansData,
        ...ShoesData,
    ];
    const randomData: DataItem[] = useRandomData(allData);
    return <ItemLayout items={randomData} params={swiperParams} />;
}


function Men({ swiperParams }: TabContentProps) {
    const menData: Item[] = [...MenData];
    return <ItemLayout items={menData} params={swiperParams} />;
}

function Women({ swiperParams }: TabContentProps) {
    const womenData: Item[] = [...WomenData];
    return <ItemLayout items={womenData} params={swiperParams} />;
}

function Jeans({ swiperParams }: TabContentProps) {
    const jeansData: Item[] = [...JeansData];
    return <ItemLayout items={jeansData} params={swiperParams} />;
}

function Shoes({ swiperParams }: TabContentProps) {
    const shoesData: Item[] = [...ShoesData];
    return <ItemLayout items={shoesData} params={swiperParams} />;
}

function Kids({ swiperParams }: TabContentProps) {
    const kidsData: Item[] = [...KidsData];
    return <ItemLayout items={kidsData} params={swiperParams} />;
}

export default Md;
