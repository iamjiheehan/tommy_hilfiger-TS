import React from 'react';

import * as Styles from './MainStyle';

import vidBack from '../../assets/images/img_video_thumb_h.png'


function Focus() {
    return (
        <div>
            <section id='focus'>
                <Styles.Container>
                    <Styles.MagazineWrap>
                        <div className="left">
                            <Styles.NewTitle className="title-wrap">
                                <h2 className="title">FOCUS ON</h2>
                                <div className="right-box">
                                    <a href="#!" className="btn-more-view type-dark-blue">
                                        <span className="text">전체보기</span>
                                        <i className="more-arr-dark-white"></i>
                                    </a>
                                </div>
                            </Styles.NewTitle>
                            <div className="sub-title-wrap">
                                <span className="title">23'FALL Take the City</span>
                                <span className="text">타미진스와 나연의 <br />도심속 내츄럴한 바이브</span>
                            </div>
                            <div className="slide-section">
                                <div className="slide-container">
                                    <ul className='swiper-wrapper'>
                                        <li className='swiper-item'>
                                            <figure className="item-box">
                                                <div className="item-img">
                                                    <div className="img-box">
                                                        <a href="#!">
                                                            <img src="https://cdn.hfashionmall.com/goods/THBR/23/09/01/GM0123090132377_0_ORGINL_1693543111205.jpg?RS=247x247&amp;AR=0&amp;CS=164x247" alt="빅 플래그 후디 스웨터" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </figure>
                                        </li>
                                    </ul>
                                </div>
                                <div className="swiper-scrollbar">
                                    <div className="swiper-scrollbar-drag">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="magazine-video-box">
                                <div className="vod-content">
                                    <div className="vod-box-back">
                                        <img src={vidBack} alt="대체텍스트" />
                                    </div>
                                    <iframe
                                        className="vod-box"
                                        allowFullScreen="1"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        title="TOMMY JEANS 23 FALL CAMPAIGN"
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/k8Z5M8n8RJA?autoplay=false&amp;rel=0&amp;playsinline=1&amp;mute=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.hfashionmall.com&amp;widgetid=3"
                                    ></iframe>
                                </div>
                                <script>
                                    {`
                                            vodPlayer.create('k8Z5M8n8RJA','visualMagazine-vod01', 'youtube', false, '../../resources/images/brand_new_2023/img_video_thumb_h.png?RS=1048', null, null);
                                        `}
                                </script>
                                <button type="button" className="btn-play-video">
                                    <span className="offscreen">재생하기</span>
                                </button>
                            </div>
                        </div>
                    </Styles.MagazineWrap>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Focus;