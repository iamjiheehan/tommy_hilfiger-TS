import React from 'react';

import * as Styles from './MainStyle';
import vidBack from '../../assets/images/img_video_thumb_h.png'

function Magazine() {
    return (
        <div>
            <section id='magazine'>
                <Styles.Container>
                    <Styles.MagazineWrap>
                        <div className="left no-product">
                            <Styles.NewTitle className="title-wrap">
                                <h2 className="title">23FW CAMPAIGN</h2>
                            </Styles.NewTitle>
                            <div className="sub-title-wrap">
                                <span className="title">23'FW NEW VIDEO <br /> TOMMY HILFIGER</span>
                                <span className="text">세련된 아메리칸 감성에 특유의 재치를 가미한 <br />모던하고 클래식한 스타일을 제안합니다.</span>
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
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        title="TOMMY HILFIGER 23FALL STORY"
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/lIacQpfZyy0?autoplay=false&amp;rel=0&amp;playsinline=1&amp;mute=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.hfashionmall.com&amp;widgetid=1">
                                    </iframe>
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

export default Magazine;