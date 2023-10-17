import React, { useState } from 'react';

import * as Styles from './MainStyle';

import data from '../../data/banner.json'

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";

function Banner() {

    const dataSet = [...data];
    const dataLength = dataSet.length;

    // console.log(dataLength);

    const [currentSlide, setCurrentSlide] = useState(1);

    const trigger = () => {
        setCurrentSlide((prevSlide) => {
            let index = prevSlide;
    
            if (index < dataLength) {
                index++;
            }
            // console.log(index); 
            return index; 
        });
    }

    // const trigger = () => {
    //     let index = currentSlide;

    //     if (index < dataLength) {
    //         index++;
    //         setCurrentSlide(index); 
    //     }
    // }

    // useEffect(() => {
    //     console.log(currentSlide);
    // }, [currentSlide]); 이렇게하면 바로 업데이트되는 결과를 볼 수 있다. 위와 같이 작동함.


    // const trigger = () => {
    //     let index = 0;
    //     if(index < dataLength) {
    //         setCurrentSlide(index + 1);
    //         console.log(currentSlide);
    //     }
    // }
    // 기존의 trigger 함수가 작동하지 않았던
    // 이유는 index 변수를 올바르게 업데이트하지 않았기 때문. 
    // trigger 함수 내에서 매번 함수가 호출될 때 index를 0으로 선언했는데, 
    // 이렇게 하면 항상 0의 값을 가지게 되어 setCurrentSlide(index + 1) 라인은 
    // 항상 currentSlide를 증가시키지 않는다.

    // 이 문제를 해결하려면 trigger 함수에서 다음 인덱스를 계산하고, 
    // 그를 기반으로 상태를 업데이트해야 함.


    return (
        <div>
            <section id='mainBanner'>
                <Styles.Banner>
                    <div className='slide-container'>
                        <Swiper
                            className="mySwiper swiper-wrapper"
                            onSlideChange={() => {
                                console.log('slide change');
                                trigger();
                            }}
                            // onSwiper={(swiper) => console.log(swiper)}
                            autoplay={{ delay: 1000, disableOnInteraction: false }}
                            loop={true}
                        >
                            {data.map((item, index) => (
                                <SwiperSlide className='swiper-item' key={index}>
                                    <Styles.Box>
                                        <Styles.Banner className="img">
                                            <a href="#!">
                                                <img src={item.img} alt={item.title} />
                                            </a>
                                        </Styles.Banner>
                                        <Styles.Text className="str" href="#!">
                                            <span className="etc">
                                                {item.etc}
                                            </span>
                                            <strong className="title">{item.title}</strong>
                                            <span className="sub">{item.sub}</span>
                                            <Styles.ViewMore><span className='view-text'>VIEW MORE</span></Styles.ViewMore>
                                        </Styles.Text>
                                    </Styles.Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="swiper-tool-wrap">
                        <div className="swiper-tool">
                            <div className="swiper-pagination">
                                <span className="swiper-pagination-current">{currentSlide}</span>
                                <span className='swiper-pagination-bar'>/</span>
                                <span className="swiper-pagination-total">{dataLength}</span>
                            </div>
                        </div>
                    </div>
                </Styles.Banner>
            </section>
        </div>
    );
}

export default Banner;