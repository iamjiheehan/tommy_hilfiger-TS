import React from 'react';

import * as Styles from './MainStyle';

import MainBanner1 from '../../assets/images/main_banner-1.jpg'
import vidBack from '../../assets/images/img_video_thumb_h.png'
import MDbanner from '../../assets/images/mdPickBanner.jpg';

function Main() {
    return (
        <>
            <Styles.MainContainer>
                {/* 메인배너 */}
                <section id='mainBanner'>
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
                {/* 첫번째 섹션 */}
                <section id='first'>
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
                {/* 두번째 섹션  || New In */}
                <section id='newIn'>
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
                {/* 세번째 섹션 || MORE CATOEGORIES */}
                <section id='categories'>
                    <Styles.Container>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">MORE CATEGORIES</h2>
                        </Styles.NewTitle>
                        <Styles.MoreContent>
                            <div className="slide-container">
                                <ul className="swiper-wrapper">
                                    <li class="swiper-item">
                                        <a href="#!" className="link-item">
                                            <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/752_203145_1_KOR_20230906171304.jpg?RS=593x593&amp;AR=0&amp;CS=425x593" alt="" />
                                            <span class="text">남성 아우터</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Styles.MoreContent>
                    </Styles.Container>
                </section>
                {/* 네번째 섹션  || TOP RANKING */}
                <section id='ranking'>
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
                                <span>ALL</span>
                            </button>
                            <button type="button">
                                <span>MEN</span>
                            </button>
                            <button type="button">
                                <span>WOMEN</span>
                            </button>
                            <button type="button">
                                <span>JEANS</span>
                            </button>
                            <button type="button">
                                <span>KIDS</span>
                            </button>
                            <button type="button">
                                <span>SHOES</span>
                            </button>
                            <button type="button">
                                <span>GOLF</span>
                            </button>
                        </Styles.NewTab>
                        <Styles.RankingTab>
                            <button type="button" className='on'><span>실시간</span></button>
                            <button type="button"><span>일간</span></button>
                            <button type="button"><span>주간</span></button>
                            <button type="button"><span>월간</span></button>
                        </Styles.RankingTab>
                        <Styles.NewContent>
                            <div className="slide-container">
                                <ul className="swiper-wrapper">
                                    <li className="swiper-item">
                                        <figure className="item-box">
                                            <div className="item-img">
                                                <div className="img-box">
                                                    <a href="#!" onclick="goGodDetail('GM0123052602707')">
                                                        <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/26/GM0123052602707_1_ORGINL_1685088055492.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="스트레치 옥스포드 롱슬리브 셔츠" /></div>
                                                    </a>
                                                </div>
                                                <button type="button" className="btn-like"><span></span></button>
                                                <button type="button" className="btn-quick"><span></span></button>
                                            </div>
                                            <figcaption className="item-info">
                                                <a href="#!">
                                                    <span className="item-rank rank-top">
                                                        1</span>
                                                    <div className="item-brand">TOMMY HILFIGER KIDS</div>
                                                    <div className="item-name">스트레치 옥스포드 롱슬리브 셔츠</div>
                                                    <div className="item-opt">
                                                        <div className="item-price">
                                                            <span className="price">59,670</span>
                                                            <del className="regular">78,000</del>
                                                            <span className="percent">24%</span>
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
                {/* 다섯번째 섹션 TOMMY ISSUE */}
                <section id='issue'>
                    <Styles.Container>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">TOMMY ISSUE</h2>
                        </Styles.NewTitle>
                        <Styles.IssueContent>
                            <div className="slide-container">
                                <ul className="swiper-wrapper">
                                    <li className="swiper-item">
                                        <div className="season-visual-wrap">
                                            <a href="#!" className="season-visual-box">
                                                <img src="https://cdn.hfashionmall.com/display/plan/81/10181/10181_1PCE_PC_KOR_20230530180758.jpg?RS=729x729&amp;AR=0&amp;CS=729x729" alt="10181" />
                                            </a>
                                        </div>
                                        <div className="season-info-wrap">
                                            <div className="season-text-box">
                                                <p className="season-title">
                                                    DISNEY X TOMMY</p>
                                                <p className="season-subtitle">
                                                    디즈니 콜라보 아이템 단독 30% OFF</p>
                                                <a href="#!" className="btn-season-more">
                                                    <span className="text">VIEW COLLECTION</span>
                                                </a>
                                            </div>
                                            <ul className="product-list">
                                                <li>
                                                    <figure className="item-box">
                                                        <div className="item-img">
                                                            <div className="img-box">
                                                                <a href="#!">
                                                                    <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/30/GM0123053003551_1_ORGINL_1685434258767.jpg?RS=473x473&amp;AR=0&amp;CS=316x473" alt="[DISNEY X TOMMY] 폴카 도트 베스트" /></div>
                                                                </a>
                                                            </div>
                                                            <button type="button" className="btn-like"><span></span></button>
                                                        </div>
                                                        <figcaption className="item-info">
                                                            <a href="#!">
                                                                <div className="item-brand">TOMMY HILFIGER MEN</div>
                                                                <div className="item-name">[DISNEY X TOMMY] 폴카 도트 베스트</div>
                                                                <div className="item-opt">
                                                                    <span className="item-price">
                                                                        <div className="item-price">
                                                                            <span className="price">255,500</span>
                                                                            <del className="regular">365,000</del>
                                                                            <span className="percent">30%</span>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </figcaption>
                                                    </figure>
                                                </li><li>
                                                    <figure className="item-box">
                                                        <div className="item-img">
                                                            <div className="img-box">
                                                                <a href="#!">
                                                                    <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/23/GM0123052301199_1_ORGINL_1684911309120.jpg?RS=473x473&amp;AR=0&amp;CS=316x473" alt="[DISNEY X TOMMY] 폴카 도트 폴로 니트 탑" /></div>
                                                                </a>
                                                            </div>
                                                            <button type="button" className="btn-like" onclick="likeToggle();"><span></span></button>
                                                        </div>
                                                        <figcaption className="item-info">
                                                            <a href="#!">
                                                                <div className="item-brand">TOMMY HILFIGER WOMEN</div>
                                                                <div className="item-name">[DISNEY X TOMMY] 폴카 도트 폴로 니트 탑</div>
                                                                <div className="item-opt">
                                                                    <span className="item-price">
                                                                        <div className="item-price">
                                                                            <span className="price">206,500</span>
                                                                            <del className="regular">295,000</del>
                                                                            <span className="percent">30%</span>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </figcaption>
                                                    </figure>
                                                </li><li>
                                                    <figure className="item-box">
                                                        <div className="item-img">
                                                            <div className="img-box">
                                                                <a href="#!">
                                                                    <div className="img"><img src="https://cdn.hfashionmall.com/goods/THBR/23/05/18/GM0123051899221_1_ORGINL_1684479923608.jpg?RS=473x473&amp;AR=0&amp;CS=316x473" alt="[DISNEY X TOMMY] 체스트 후디" /></div>
                                                                </a>
                                                            </div>
                                                            <button type="button" className="btn-like" onclick="likeToggle();"><span></span></button>
                                                        </div>
                                                        <figcaption className="item-info">
                                                            <a href="#!">
                                                                <div className="item-brand">TOMMY HILFIGER KIDS</div>
                                                                <div className="item-name">[DISNEY X TOMMY] 체스트 후디</div>
                                                                <div className="item-opt">
                                                                    <span className="item-price">
                                                                        <div className="item-price">
                                                                            <span className="price">115,500</span>
                                                                            <del className="regular">165,000</del>
                                                                            <span className="percent">30%</span>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </figcaption>
                                                    </figure>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Styles.IssueContent>
                    </Styles.Container>
                </section>
                {/* 여섯번째 섹션 || FOCUS ON */}
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
                                                <figure class="item-box">
                                                    <div class="item-img">
                                                        <div class="img-box">
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
                                        <div class="vod-box-back">
                                            <img src={vidBack} alt="대체텍스트" />
                                        </div>
                                        <iframe
                                            className="vod-box"
                                            frameborder="0"
                                            allowfullscreen="1"
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
                {/* 일곱번째 섹션 || MD's Pick */}
                <section id='md'>
                    <Styles.MDbanner>
                        <img src={MDbanner} className="visual-img-box" alt="" />
                        <div className="visual-text-box">
                            <p className="pick-subtitle">MD가 추천하는 아이템 모음</p>
                            <p className="pick-title">MD's PICK</p>
                        </div>
                        <div className="category-tab">
                            <button type="button" className="on">
                                <span>MEN</span>
                            </button>
                            <button type="button" className="">
                                <span>WOMEN</span>
                            </button>
                            <button type="button" className="">
                                <span>JEANS</span>
                            </button>
                            <button type="button" className="">
                                <span>KIDS</span>
                            </button>
                            <button type="button" className="">
                                <span>SHOES</span>
                            </button>
                        </div>
                    </Styles.MDbanner>
                    <Styles.MdContent>
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
                    </Styles.MdContent>
                </section>
                {/* 여덟번째 섹션 || MAGAZINE */}
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
                                        <div class="vod-box-back">
                                            <img src={vidBack} alt="대체텍스트" />
                                        </div>
                                        <iframe
                                            className="vod-box"
                                            frameborder="0"
                                            allowfullscreen="1"
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
                {/* 아홉번째 섹션 || PROMOTION */}
                <section id='promotion'>
                    <Styles.Container>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">PROMOTION</h2>
                        </Styles.NewTitle>
                        <div className="category-tab season">
                            <button type="button" className="on">
                                <span>다양한 기획전을 만나보세요!</span>
                            </button>
                        </div>
                        <div className="slide-container season">
                            <ul className="swiper-wrapper">
                                <li className="swiper-item">
                                    <a href="#!">
                                        <div className="season-visual-wrap">
                                            <div className="season-visual-box">
                                                <img src="https://cdn.hfashionmall.com/display/plan/76/10676/10676_1PCE_PC_KOR_20230818160645.jpg?RS=576x576&amp;AR=0&amp;CS=576x576" alt="1" />
                                            </div>
                                        </div>
                                        <div className="season-info-wrap">
                                            <div className="season-text-box">
                                                <p className="season-title">
                                                    TOMMY MEN｜ARCHIVE FIT</p>
                                                <p className="season-subtitle">
                                                    새롭게 선보이는 아카이브핏을 만나보세요</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Styles.Container>
                </section>
                {/* 열번째 섹션 || INSTAGRAM */}
                <section id='insta'>
                    <Styles.Container>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">INSTAGRAM</h2>
                            <div className="right-box">
                                <a href="https://www.instagram.com/tommyhilfiger" className="btn-insta" target="_blank">
                                    <span class="text">@tommyhilfiger</span>
                                </a>
                            </div>
                        </Styles.NewTitle>
                        <div className="slide-container insta">
                            <ul className="swiper-wrapper">
                                <li className="swiper-item">
                                    <button type="button" className="btn-popup" value="1">
                                        <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/377929315_835516981439575_4094441858562293023_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=QO8ctWWtXV8AX86q_pR&amp;_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfByIckuZYeWdUsezkdqSieZKxAIft81DLeNtw2Z7r74AA&amp;oe=650F08E1&amp;RS=336x336&amp;AR=0&amp;CS=336x336" alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </Styles.Container>
                </section>
                {/* 열한번째 섹션 || COUPON */}
                <section id='coupon'>
                    <Styles.CouponBanner>
                        <a href="#!" class="link-banner">
                            <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/760_203151_3_KOR_20230823102444.jpg?RS=1920x1920&amp;AR=0&amp;CS=1920x180" alt="" />
                            <div class="text-box">
                                <p class="text">TOMMY 23SS SEASON OFF</p>
                                <p class="sub-text">최대 49% OFF + 추가 쿠폰 혜택</p>
                            </div>
                        </a>
                    </Styles.CouponBanner>
                </section>
                {/* 열두번째 섹션 || CAMPAIGN */}
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
                                        <li className="swiper-item on">
                                            <a href="#!" class="link-item">
                                                <div className="text-wrap">
                                                    <span className="text">TOMMY JEANS</span>
                                                </div>
                                                <div className="img-wrap">
                                                    <img src="https://cdn.hfashionmall.com/display/trnd/10/6810/6810_KOR_20230907134307.jpg?RS=658" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="swiper-item">
                                            <a href="#!" class="link-item">
                                                <div className="text-wrap">
                                                    <span className="text">TOMMY JEANS</span>
                                                </div>
                                                <div className="img-wrap">
                                                    <img src="https://cdn.hfashionmall.com/display/trnd/41/6141/6141_KOR_20230601175723.png?RS=658" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="swiper-item">
                                            <a href="#!" class="link-item">
                                                <div className="text-wrap">
                                                    <span className="text">TOMMY JEANS</span>
                                                </div>
                                                <div className="img-wrap">
                                                    <img src="https://cdn.hfashionmall.com/display/trnd/41/6141/6141_KOR_20230601175723.png?RS=658" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="swiper-item">
                                            <a href="#!" class="link-item">
                                                <div className="text-wrap">
                                                    <span className="text">TOMMY JEANS</span>
                                                </div>
                                                <div className="img-wrap">
                                                    <img src="https://cdn.hfashionmall.com/display/trnd/41/6141/6141_KOR_20230601175723.png?RS=658" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="slide-nav">
                                        <button className="slide-nav-prev">
                                            <span className="offscreen"></span>
                                        </button>
                                        <button className="slide-nav-next">
                                            <span className="offscreen"></span>
                                        </button>
                                    </div>
                                </div>
                            </Styles.CampaignWrap>
                        </Styles.CampaignWrap>
                    </Styles.Container>
                </section>
                {/* 열세번째 섹션 || REVIEW */}
                <section id="review">
                    <Styles.Container>
                        <Styles.NewTitle className="title-wrap">
                            <h2 className="title">BEST REVIEW</h2>
                            <div className="right-box">
                                <a href="#!" className="btn-more-view type-dark-blue">
                                    <span className="text">전체보기</span>
                                    <i className="more-arr-dark-blue"></i>
                                </a>
                            </div>
                        </Styles.NewTitle>
                        <Styles.RankingTab>
                            <button type="button" className='on'><span>ALL</span></button>
                            <button type="button"><span>BEST</span></button>
                            <button type="button"><span>JEANS</span></button>
                            <button type="button"><span>WOMEN</span></button>
                            <button type="button"><span>MEN</span></button>
                            <button type="button"><span>KIDS</span></button>
                        </Styles.RankingTab>
                        <div className='slide-section'>
                            <div className='slide-container review'>
                                <ul className='swiper-wrapper'>
                                    <li className="swiper-item">
                                        <figure className="item-box">
                                            <div className="item-img top">
                                                <div className="img-box">
                                                    <a href="#!">
                                                        <img src="https://cdn.hfashionmall.com/contents/review/3952815993173785.jpeg?RS=425&amp;AO=1" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <figcaption className="item-info">
                                                <div className="review-product">
                                                    <figure className="item-box">
                                                        <span className="item-img">
                                                            <a href="#!">
                                                                <img src="https://cdn.hfashionmall.com/goods/THBR/23/01/27/GM0123012734122_1_ORGINL_1675669026031.jpg?RS=90x90&amp;AR=0&amp;CS=60x90" alt="" />
                                                            </a>
                                                        </span>
                                                        <figcaption className="item-info">
                                                            <a href="#!">
                                                                <div className="item-brand">TOMMY HILFIGER WOMEN</div>
                                                                <div className="item-name"></div>
                                                                <div className="item-opt">
                                                                    <div className="item-price">
                                                                        <span className="price">72,450</span>
                                                                        <del className="regular">115,000</del>
                                                                        <span className="percent">37%</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                <div className="review-info">
                                                    <div className="rating-option-box">
                                                        <span className="review-rating"><span className="ico">별점</span></span>
                                                        <span className="prd-option"><span></span> / <span>BLACK</span></span>
                                                    </div>
                                                    <p className="review-desc">170 56kg
                                                        일단 민소매 같은 이너 따로 안 챙겨 입어도 될 정도로
                                                        소재가 대박 좋아요!
                                                        넥 부분은 깊이 파여 있어서 신경은 써야겠지만
                                                        그만큼 목이 가늘고 길어 보여서 오히려 더 맘에 들어요💖 얇아서 여기저기 다 잘 입을 수 있는 옷이에요~
                                                        강력 추천👍🏻
                                                    </p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                                <div className="slide-nav">
                                        <button className="slide-nav-prev">
                                            <span className="offscreen"></span>
                                        </button>
                                        <button className="slide-nav-next">
                                            <span className="offscreen"></span>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </Styles.Container>
                </section>
            </Styles.MainContainer >
        </>
    );
}

export default Main;

