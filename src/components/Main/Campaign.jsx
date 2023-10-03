import React from 'react';
import * as Styles from './MainStyle';
import data from '../../data/campaign.json';

function Campaign() {
    const imgData = data[0].img; 
    const itemsPerPage = 4; 

    return (
        <div>
            <section id='campaign'>
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
                                <ul className="swiper-wrapper">
                                    {imgData.map((item, index) => (
                                        <li className={`swiper-item ${index % itemsPerPage === 0 ? 'on' : ''}`} key={index}>
                                            <a href="#!" className="link-item">
                                                <div className="text-wrap">
                                                    <span className="text">TOMMY JEANS</span>
                                                </div>
                                                <div className="img-wrap">
                                                    <img src={process.env.PUBLIC_URL + item} alt={index} />
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="slide-nav">
                                    <button
                                        className="slide-nav-prev button-disabled"
                                    >
                                        <span className="offscreen"></span>
                                    </button>
                                    <button
                                        className="slide-nav-next"
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
