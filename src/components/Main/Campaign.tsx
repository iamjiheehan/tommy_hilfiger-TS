import React, { useState } from "react";
import * as Styles from "./MainStyle";
import data from "../../data/campaign.json";

import SwiperCore from "swiper/core";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface ImageData {
    img: string;
}

// Swiper 컴포넌트의 슬라이드 데이터 배열에 대한 타입 정의
type SlideData = ImageData[];

function Campaign() {
    SwiperCore.use([Navigation]);

    const imgData = data[0].img;

    const [swiper, setSwiper] = useState<any | null>(null);

    const swiperCampaignParams = {
        className: "swiper-wrapper mySwiper",
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            prevEl: ".campaign-prev",
            nextEl: ".campaign-next",
        },
        modules: { Navigation },
        loop: true,
        allowTouchMove: false,
    };

    // useEffect(() => {
    //     if (swiper) {
    //         swiper.on('transitionEnd', function () {
    //             console.log('now index :::', swiper.realIndex);
    //         });
    //     }
    // }, [swiper]);
    //위의 로직은 결과 다섯번씩 찍힘
    // useEffect 함수가 여러 번 실행되는 이유는 useEffect의 두 번째 인자로 지정된 종속성(dependency)이 변경될 때마다 실행되기 때문.
    // 여기서는 useEffect가 swiper 변수에 종속되어 있으며,
    // 초기에는 null이며 Swiper 인스턴스가 초기화될 때 비 null 값으로 설정됨.

    // 다음은 이벤트 발생 순서.

    // 처음에 swiper가 null이므로 useEffect는 실행되지 않음.

    // Swiper 인스턴스가 생성되고 setSwiper(swiperInstance)가 호출되면 swiper 변수가 비 null 값으로 업데이트됨.
    // 이 swiper 변수의 변경은 종속성 변경으로 감지되어 useEffect가 실행됨.

    // useEffect는 Swiper 인스턴스에 transitionEnd 이벤트 핸들러를 첨부.

    // 컴포넌트가 swiper 상태를 설정한 후 다시 렌더링되면(상태 업데이트로 인해),
    // 컴포넌트 함수 전체가 다시 실행되며 useEffect도 실행.

    // 이로 인해 useEffect가 다시 실행되며 Swiper 인스턴스에 또 다른 transitionEnd 이벤트 핸들러가 첨부됨.
    // 이것은 각 재렌더링에서 여러 번의 이벤트 핸들러가 첨부되도록 하므로 문제가 발생.

    // 여러 번의 이벤트 핸들러 첨부를 방지하려면
    // 이미 첨부되지 않은 경우에만 이벤트 핸들러를 첨부하도록 조건을 추가할 수 있음.

    // const [target, setTarget] = useState(0)
    // useEffect(() => {
    //     if (swiper) {
    //         const handleTransitionEnd = () => {
    //             console.log('now index :::', swiper.realIndex, "Target :::", target);
    //         };
    //         // Attach the event handler only once
    //         swiper.on('transitionEnd', handleTransitionEnd);
    //         // Clean up the event handler when the component unmounts
    //         return () => {
    //             swiper.off('transitionEnd', handleTransitionEnd);
    //             setTarget(swiper.realIndex);
    //         };
    //     }
    // }, [swiper]);
    //     useState 함수를 사용하여 상태를 업데이트할 때,
    //     해당 상태를 업데이트하려면 리액트가 상태 업데이트를 감지하고 컴포넌트를 리렌더링해야 함.
    //     그러나 useEffect 내에서 상태를 업데이트하면 리액트는 즉시 해당 업데이트를 반영하지 않음.
    //     따라서 setTarget(swiper.realIndex)를 호출하더라도 target 상태가 즉시 변경되지 않습니다.

    // setTarget(swiper.realIndex)를 호출하면 다음 렌더링 사이클 동안 target 상태가 업데이트됨.

    // 따라서 console.log('now index :::', swiper.realIndex, "Target :::", target);에서
    // target 값은 이전 값으로 출력됨.

    // useEffect 내에서 target 값을 최신 상태로 사용하려면 target 값을
    // 의존성 배열에 추가하여 useEffect가 target 값이 변경될 때마다 다시 실행되도록 해야 함.

    // const [target, setTarget] = useState(0);

    // useEffect(() => {
    //     if (swiper) {
    //         const handleTransitionEnd = () => {
    //             const newTarget = swiper.realIndex;
    //             setTarget(newTarget);
    //             console.log('now index :::', swiper.realIndex, "Target :::", newTarget);
    //         };

    //         // Attach the event handler
    //         swiper.on('transitionEnd', handleTransitionEnd);

    //         // Clean up the event handler when the component unmounts
    //         return () => {
    //             swiper.off('transitionEnd', handleTransitionEnd);
    //         };
    //     }
    // }, [swiper]);

    const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

    const handleNextButtonClick = () => {
        if (swiper) {
            swiper.slideNext();
            setActiveSlideIndex(swiper.realIndex);
        }
    };

    const handlePrevButtonClick = () => {
        if (swiper) {
            swiper.slidePrev();
            setActiveSlideIndex(swiper.realIndex);
        }
    };

    return (
        <div>
            <section id="campaign">
                <Styles.Container>
                    <Styles.CampaignWrap>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">CAMPAIGN</h2>
                            <div className="right-box">
                                <a href="#!" className="btn-more-view">
                                    <span className="text">전체보기</span>
                                    <i className="more-arr-dark-white"></i>
                                </a>
                            </div>
                        </Styles.NewTitle>
                        <Styles.CampaignWrap>
                            <div className="slide-container">
                                <Swiper
                                    {...swiperCampaignParams}
                                    ref={setSwiper}
                                    onSwiper={(swiperInstance:any) => {
                                        // Swiper instance 상태관리 함수에 저장
                                        setSwiper(swiperInstance);
                                    }}
                                    onSlideChange={(swiper:any) => {
                                        setActiveSlideIndex(swiper.realIndex);
                                    }}
                                    modules={[Navigation]}
                                >
                                    {imgData.map((item, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className={`swiper-item ${
                                                index === activeSlideIndex
                                                    ? "on"
                                                    : ""
                                            }`}
                                            // className='swiper-item'
                                        >
                                            <a href="#!" className="link-item">
                                                <div className="text-wrap">
                                                    <span className="text">
                                                        TOMMY JEANS
                                                    </span>
                                                </div>
                                                <div className="img-wrap">
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/${item}`}
                                                        alt={String(index)}
                                                        className="swiper-lazy"
                                                    />
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="slide-nav">
                                    <button
                                        className="slide-nav-prev campaign-prev button-disabled"
                                        onClick={handlePrevButtonClick}
                                    >
                                        <span className="offscreen"></span>
                                    </button>
                                    <button
                                        className="slide-nav-next campaign-next"
                                        onClick={handleNextButtonClick}
                                    >
                                        <span className="offscreen"></span>
                                    </button>
                                </div>
                            </div>
                        </Styles.CampaignWrap>
                    </Styles.CampaignWrap>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Campaign;

// ref={setSwiper}는 Swiper 라이브러리에서 제공하는 Swiper 컴포넌트가 생성하는
//  Swiper 인스턴스에 대한 참조를 캡처하고 저장하기 위해 사용된다.

// 이것은 주로 외부 라이브러리나 컴포넌트와 함께 작업할 때 사용됩니다.
// ref 프롭을 사용하면 Swiper 인스턴스에 직접 액세스하여
// 프로그래밍적으로 상호 작용하거나
// 슬라이드를 제어하거나 속성을 업데이트하거나
// 이벤트를 수신할 수 있다.

// 위의 코드에서 setSwiper 함수는 Swiper 라이브러리에서 생성한 Swiper 인스턴스를
// swiper 상태 변수에 저장하는 데 사용됩니다.

// 이로써 해당 저장된 Swiper 인스턴스를 사용하여 컴포넌트 전체에서 접근할 수 있습니다.

// 나중에 이 저장된 Swiper 인스턴스를 사용하여 Swiper 컴포넌트와 관련된 다양한 작업을 수행하거나 이벤트를 청취할 수 있습니다.

// const [swiper, setSwiper] = useState(null);:
// 이 코드 라인은 초기값이 null인 swiper라는 상태 변수를 초기화함.

// ref={setSwiper}: 이 프롭은 Swiper 컴포넌트에서 사용되며 Swiper 컴포넌트가 마운트될 때
// Swiper 인스턴스를 캡처하고 swiper 상태 변수에 저장.

// 이후 컴포넌트 내에서 swiper 상태 변수를 사용하여 Swiper 인스턴스에 액세스하고
// 슬라이드 제어 또는 이벤트청취와 같은 작업을 수행할 수 있다.

// 요약하면 ref={setSwiper} 프롭은 Swiper 컴포넌트에서 생성된 Swiper 인스턴스에 대한 참조를 얻고
//  컴포넌트 내에서 상호 작용하기 위해 저장하는 데 사용됨.
//  이것은 React에서 외부 라이브러리나 컴포넌트와 함께 작업할 때 흔한 패턴.
