import React from 'react';

import * as Styles from './MainStyle';

import MainBanner1 from '../../assets/images/main_banner-1.jpg'

function Main() {
    return (
        <>
            {/* 메인배너 */}
            <section>
                <Styles.Box>
                    <Styles.Banner className="img">
                        <a href="#!">
                            <img src={MainBanner1} alt="MainBanner1" />
                        </a>
                    </Styles.Banner>
                    <Styles.Text className="str" href="#!">
                        <span className="etc">
                            TOMMY HILFIGER X TOMMY JEANS
                        </span>
                        <strong className="title">가을 니트 맛집, 타미힐피거</strong>
                        <span className="sub">ALL-TIME ESSENTIALS</span>
                        <Styles.ViewMore><span className='view-text'>VIEW MORE</span></Styles.ViewMore>
                    </Styles.Text>
                </Styles.Box>
            </section>
            {/* 첫번째 탭 */}
            <section>
                <Styles.Container>
                    <div className="content-wrap">
                        <Styles.BrandTab className="brand-line-tab">
                            <button type="button"><span>CATEGORY</span></button>
                            <button type="button" className='btn_line-before'><span>DISCOVER</span></button>
                        </Styles.BrandTab>
                        <Styles.BrandContent className="brand-line-cont tab-cont2 on">
                            <ul className="brand-line-list">
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_1_KOR_20230906161337.jpg?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">MEN</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_2_KOR_20230906161349.jpg?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">WOMEN</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_3_KOR_20230906165844.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">KIDS</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_4_KOR_20230906165852.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">ACC</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202932_5_KOR_20230705150708.jpg?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">GOLF</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="brand-line-list">
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A05" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_2_KOR_20230707153200.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">신상품</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A04" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_4_KOR_20230707153208.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">베스트</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A03" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_3_KOR_20230707153216.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">아카이브</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A02" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_1_KOR_20230707153222.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">브랜드소개</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A09" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_5_KOR_20230707153232.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">리뷰플러스</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A06" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_6_KOR_20230707153247.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">기획전</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A07" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_7_KOR_20230707153254.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">뉴스</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A08" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_8_KOR_20230707153239.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">매거진</span>
                                    </a>
                                </li>
                            </ul>
                        </Styles.BrandContent>
                        <div className="brand-line-cont tab-cont2" style={{ display: "none" }}>
                            <ul className="brand-line-list">
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A05" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_2_KOR_20230707153200.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">신상품</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A04" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_4_KOR_20230707153208.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">베스트</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A03" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_3_KOR_20230707153216.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">아카이브</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A02" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_1_KOR_20230707153222.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">브랜드소개</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A09" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_5_KOR_20230707153232.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">리뷰플러스</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A06" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_6_KOR_20230707153247.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">기획전</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A07" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_7_KOR_20230707153254.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">뉴스</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!CtgryNo=THMA18A08" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202941_8_KOR_20230707153239.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">매거진</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="brand-line-list">
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_1_KOR_20230906161337.jpg?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">MEN</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_2_KOR_20230906161349.jpg?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">WOMEN</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_3_KOR_20230906165844.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">KIDS</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/743_202932_4_KOR_20230906165852.png?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">ACC</span>
                                    </a>
                                </li>
                                <li className="brand-line-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A60/contents/743_202932_5_KOR_20230705150708.jpg?RS=128x128&amp;AR=0&amp;CS=112x128" alt="" />
                                        <span className="text">GOLF</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Styles.Container>
            </section>
            {/* 두번째 탭  || New In */}
            <section>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">NEW IN</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-more-view type-dark-blue">
                                <span className="text">전체보기</span>
                                <i className="more-arr-dark-blue"></i>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <Styles.NewTab>
                        <button type="button" class="on">
                            <span>BRAND LINE</span>
                        </button>
                        <button type="button">
                            <span>CATEGORY</span>
                        </button>
                    </Styles.NewTab>
                    <Styles.NewCategory>
                        <button type="button" className='on'><span>ALL</span></button>
                        <button type="button"><span>MEN</span></button>
                        <button type="button"><span>WOMEN</span></button>
                        <button type="button"><span>TOMMY JEANS</span></button>
                        <button type="button"><span>KIDS</span></button>
                        <button type="button"><span>SHOES</span></button>
                        <button type="button"><span>GOLF</span></button>
                    </Styles.NewCategory>
                    <Styles.NewContent>
                        <div className="slide-container">
                            <ul className="swiper-wrapper">
                                <li className="swiper-item">
                                    <figure className="item-box">
                                        <div className="item-img">
                                            <div className="img-box">
                                                <a href="#!">
                                                    <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/08/03/GM0123080322170_1_ORGINL_1691130517534.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="폴로 칼라 바시티 재킷" /></div>
                                                </a>
                                            </div>
                                            <button type="button" className="btn-like"></button>
                                            <button type="button" className="btn-quick"></button>
                                        </div>
                                        <figcaption className="item-info">
                                            <a href="#!">
                                                <div className="item-brand">TOMMY HILFIGER WOMEN</div>
                                                <div className="item-name">폴로 칼라 바시티 재킷</div>
                                                <div className="item-opt">
                                                    <div className="item-price">
                                                        <span className="price">310,500</span>
                                                        <del className="regular">345,000</del>
                                                        <span className="percent">10%</span>
                                                    </div>
                                                    <div className="item-label"></div>
                                                </div>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </Styles.NewContent>
                </Styles.Container>
            </section>
        </>
    );
}

export default Main;

