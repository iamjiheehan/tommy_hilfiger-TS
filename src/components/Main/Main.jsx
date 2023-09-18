import React from 'react';

import * as Styles from './MainStyle';

import MainBanner1 from '../../assets/images/main_banner-1.jpg'

function Main() {
    return (
        <>
            <section>
                <Styles.Box>
                    <Styles.Banner classNameName="img">
                        <a href="#!">
                            <img src={MainBanner1} alt="MainBanner1" />
                        </a>
                    </Styles.Banner>
                    <Styles.Text classNameName="str" href="#!">
                        <span classNameName="etc">
                            TOMMY HILFIGER X TOMMY JEANS
                        </span>
                        <strong classNameName="title">가을 니트 맛집, 타미힐피거</strong>
                        <span classNameName="sub">ALL-TIME ESSENTIALS</span>
                        <Styles.ViewMore><span classNameName='view-text'>VIEW MORE</span></Styles.ViewMore>
                    </Styles.Text>
                </Styles.Box>
            </section>
            <section>
                <Styles.Container>
                    <div className="sec-content-wrap ui-tab2">
                        <div className="brand-line-tab">
                            <button type="button" ><span>CATEGORY</span></button>
                            <button type="button" ><span>DISCOVER</span></button>
                        </div>
                        <div className="brand-line-cont tab-cont2 on">
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
                        </div>
                        <div className="brand-line-cont tab-cont2">
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
        </>
    );
}

export default Main;

