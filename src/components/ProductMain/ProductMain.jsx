import React from 'react'

import * as Styles from './ProductMainStyle'

import data from '../../data/Product.json'

export default function ProductMain() {
    return (
        <>
            <Styles.Container id='productMain'>
                <div className="breadcrumb-wrap">
                    <ol className="breadcrumb">
                        <li className="bc-home"><a href="/">HOME</a></li>
                        <li>
                            <a href="#!">
                                TOMMY HILFIGER MEN</a>
                        </li>
                        <li className="">
                            <a href="#!">
                                남성</a>
                        </li>
                        <li className="">
                            <a href="#!">
                                아우터</a>
                        </li>
                        <li className="active">
                            다운/패딩</li>
                    </ol>
                </div>
                <div className="responsive-wrap">
                    <div className="view-top">
                        <div className="top-left">
                            <div className="left-swiper">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="https://cdn.hfashionmall.com/goods/THBR/23/09/22/GM0123092244419_4_ORGINL_1695373248443.jpg?RS=960x960&AR=0&CS=640x960" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="https://cdn.hfashionmall.com/goods/THBR/23/09/22/GM0123092244419_5_ORGINL_1695373248599.jpg?RS=960x960&AR=0&CS=640x960" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Styles.TopRight className='top-right'>
                            <div className="etc-btn">
                                <button type="button" class="btn-like"><span></span></button>
                                <span class="bar">|</span>
                                <button type="button" class="btn-share"><span></span></button>
                            </div>
                            <p className="item-brand">
                                <a href="#!">
                                    TOMMY HELFIGER MEN
                                </a>
                            </p>
                            <p className="item-tag">
                                <span className="code">T12D9QOT020MT1RBN</span>
                                <span className="tag" style={{ color: "#C2935F" }}>
                                </span>
                            </p>
                            <p className="item-name">뉴욕 가먼트다이 덕다운 푸퍼</p>
                            <div className="item-price">
                                <p class="price"><span>579,000</span></p>
                                <p class="coupon">
                                    <span class="num">
                                        521,100</span>
                                    <span class="txt">회원/멤버십 쿠폰가
                                        <button type="button" class="btn-tooltip">툴팁보기</button>
                                    </span>
                                    <button type="button" class="btn-coupon"><span>쿠폰다운로드</span>
                                    </button>
                                </p>
                            </div>
                            <Styles.ViewOption className="view-option">
                                <div className="row color">
                                    <label className="color-check">
                                        <input type="radio" />
                                        <span className="pdImage">
                                            ARMY GREEN</span>
                                    </label>
                                    <p class="txt">
                                        ARMY GREEN</p>
                                </div>
                                <div className="row size">
                                    <div className="select">
                                        <button type="button" className="sel-btn">사이즈를 선택하세요. <span class="val"></span></button>
                                        <div className="sel-list">
                                            <ul>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            S</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            M</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            L</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            XL</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        <input type="radio" />
                                                        <span>
                                                            XXL
                                                            (2XL)
                                                        </span>
                                                        <span className="soldout">(품절)</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" className="btn-size" ><span>사이즈 가이드</span></button>
                                    <div className="guide">
                                        <span className="sizeRecommandArea">
                                            <button type="button"></button>
                                        </span>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button name="btnShoppingBag" type="button" className="btn-basket btn-type">
                                        <span>장바구니</span>
                                    </button>
                                    <button name="btnBuynow" type="button" className="btn-buy btn-type">
                                        <span>
                                            <input type="hidden" />
                                            바로구매
                                        </span>
                                    </button>
                                </div>
                            </Styles.ViewOption>
                            <Styles.InfoBot className="info-bot">
                                <p className="review"><a href="#!">첫 리뷰를 남겨주세요!</a></p>
                                <ul className='list'>
                                    <li className='row'>
                                        <span className="title">배송비</span>
                                        <span>30,000이상 구매시 무료(도서산간추가 3000원)</span>
                                    </li>
                                    <li className='row'>
                                        <span className="title">한섬마일리지</span>
                                        <span>최대 6% 적립</span>
                                    </li>
                                    <li className='row'>
                                        <span className="title">H포인트</span>
                                        <span>0.1% 적립</span>
                                    </li>
                                </ul>
                            </Styles.InfoBot>
                        </Styles.TopRight>
                    </div>
                    {/* 추천 아이템 리스트 */}
                    <Styles.ViewList className="view-list">
                        <div className="tab-wrap">
                            <button type="button" className='on'><span>모델 착용 상품</span></button>
                            <button type="button"><span>이 상품을 본 고객이 구매한 상품</span></button>
                        </div>
                        <div className="tab-content">
                            <div className="swiper-container product-list">
                                <ul className="swiper-wrapper">
                                    <li class="swiper-slide">
                                        <figure class="item-box">
                                            <div class="item-img">
                                                <div class="img-box">
                                                    <a href="#!">
                                                        <img src="https://cdn.hfashionmall.com/goods/THBR/23/07/18/GM0123071817764_1_ORGINL_1689666172845.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="스트레이트핏 단톤 블랙 데님 팬츠" />
                                                    </a>
                                                </div>
                                                <button type="button" class="btn-like">
                                                    <span>좋아요</span>
                                                </button>
                                            </div>
                                            <figcaption class="item-info">
                                                <a href="#!">
                                                    <div class="item-brand">TOMMY HILFIGER MEN</div>
                                                    <div class="item-name">스트레이트핏 단톤 블랙 데님 팬츠</div>
                                                    <div class="item-price">
                                                        <span class="price">199,000</span>
                                                    </div>
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="swiper-slide">
                                        <figure class="item-box">
                                            <div class="item-img">
                                                <div class="img-box">
                                                    <a href="#!">
                                                        <img src="https://cdn.hfashionmall.com/goods/THBR/23/07/18/GM0123071817764_1_ORGINL_1689666172845.jpg?RS=600x600&amp;AR=0&amp;CS=400x600" alt="스트레이트핏 단톤 블랙 데님 팬츠" />
                                                    </a>
                                                </div>
                                                <button type="button" class="btn-like">
                                                    <span>좋아요</span>
                                                </button>
                                            </div>
                                            <figcaption class="item-info">
                                                <a href="#!">
                                                    <div class="item-brand">TOMMY HILFIGER MEN</div>
                                                    <div class="item-name">스트레이트핏 단톤 블랙 데님 팬츠</div>
                                                    <div class="item-price">
                                                        <span class="price">199,000</span>
                                                    </div>
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Styles.ViewList>
                    <Styles.ViewDetails className="view-detail">
                        <div className="detail-tab">
                            <ul class="tabs" style={{ width: "870px" }}>
                                <li class="on"><button type="button"><span>상품상세정보</span></button></li>
                                <li class=""><button type="button"><span>리뷰(0)</span></button></li>
                                <li class=""><button type="button"><span>상품 QnA(0)</span></button></li>
                            </ul>
                            {/* 상품 상세 정보 */}
                            <Styles.DetailInfo className='detail-info'>
                                <h3 className='hidden'>상품상세정보</h3>
                                <div className="info-wrap">
                                    <div className="info-text">
                                        푹신하고 소프트한 감촉을 느낄 수 있는 푸퍼 자켓 입니다. 전면과 소매 부분에 실리콧 뱃지로 아이코닉한 포인트를 더하였으며 솔리드한 컬러감과 적당한 기장감으로 다양한 룩에 두루 매치하기 좋은 아이템 입니다. 하이넥 형태의 지퍼 클로저로 보온성을 더하였습니다.
                                    </div>
                                </div>
                                <div className="html-wrap">
                                    <p>뉴욕 가먼트다이 덕다운 푸퍼</p>
                                    <p>* Model Size : 키 188cm 69KG B 36 W 28 H 36 / 착용사이즈: 아우터 L </p>
                                    <p>* 코디용 아이템은 함께 배송되지 않습니다. 주문 전, 상품 컷 이미지를 확인해 주세요.</p>
                                    <p>* 모니터의 해상도에 따라 색상이 실제 상품과 약간의 차이가 있을 수 있으며, 교환 및 반품/환불의 사유가 될 수 없음을 알려 드립니다.</p>
                                </div>
                            </Styles.DetailInfo>
                            <Styles.DetailTable>
                                <h4 className='sec-title'>상품고시정보</h4>
                                <div className='detail-table'>
                                    <table>
                                        <caption>상품고시정보</caption>
                                        <colgroup><col style={{ width: "180px", textAlign: "left" }} /></colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">제품 주소재</th>
                                                <td>
                                                    겉감<br />안감: 나일론 100%
                                                    <br />충전재: 오리털 70% 깃털 30%</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">색상</th>
                                                <td>ARMY GREEN</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">치수</th>
                                                <td>
                                                    L/ 가슴둘레:130cm, 어깨단면:48cm, 소매기장:69cm, 소매폭:15cm, 소매통:26cm, 총장:75cm</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제조자</th>
                                                <td>TOMMY HILFIGER</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">수입자/병행수입</th>
                                            </tr>
                                            <tr>
                                                <th scope="row">제조국</th>
                                                <td>중국</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">세탁방법 및 취급시 주의사항</th>
                                                <td>
                                                    - 뒤집어서 세탁 후 건조시키십시오.<br />
                                                    - 여밈을 모두 잠그고 세탁하십시오.<br />
                                                    - 깨끗한 테니스 공 3개를 건조 사이클에 넣으십시오.<br /></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제조연월</th>
                                                <td>2023.07</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">품질보증기준</th>
                                                <td>관련법 및 소비자분쟁해결 규정에 따름</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">A/S 책임자,전화번호</th>
                                                <td>
                                                    (주)한섬,18005700</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Styles.DetailReview id="tabContentReview">
                                    <h3 className="sec-title">리뷰</h3>
                                    <div className="review-list">
                                        <div className="head">
                                            <p className="txt">상품 구매 후 리뷰 작성시 H.Plus를 드립니다. (포토리뷰 1,000포인트, 텍스트리뷰 300포인트 증정)</p>
                                            <div id="review-filter" className="option">
                                                <div class="select">
                                                    <button type="button" className="sel-btn">최신순</button>
                                                    <div id="review-sortFilter" className="sel-list">
                                                        <ul>
                                                            <li><label><input type="radio" value="new" /> <span>최신순</span></label></li>
                                                            <li><label><input type="radio" value="like" /> <span>공감순</span></label></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="select">
                                                    <button type="button" className="sel-btn">사이즈</button>
                                                    <div className="sel-list">
                                                        <ul>
                                                            <li>
                                                                <label>
                                                                    <input type="radio" value="S" />
                                                                        <span>S</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input type="radio" value="M" />
                                                                        <span>M</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input type="radio" value="L" />
                                                                        <span>L</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input type="radio" value="XL" />
                                                                        <span>XL</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input type="radio" value="XXL" />
                                                                        <span>XXL</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-beige"><span>필터적용</span></button>
                                            </div>
                                            <div class="option">
                                                <button type="button" className="btn-beige"><span>포토리뷰</span></button>
                                                <button type="button" className="btn-black"><span>리뷰작성</span></button>
                                            </div>
                                        </div>
                                        <div id="reviewNodata" class="nodata">
                                            지금 첫 리뷰를 작성해주세요.<br />
                                            포토리뷰 1,000포인트, 텍스트 리뷰 300포인트를 증정합니다. (상품구매시)
                                        </div>
                                    </div>
                                </Styles.DetailReview>
                                <Styles.DetailReview id="tabContentReview">
                                    <h3 className="sec-title">배송/교환/반품</h3>
                                    <div className="review-list">
                                    <table>
                                        <caption>배송/교환/반품</caption>
                                        <colgroup><col style={{ width: "180px", textAlign: "left" }} /></colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">제품 주소재</th>
                                                <td>
                                                    겉감<br />안감: 나일론 100%
                                                    <br />충전재: 오리털 70% 깃털 30%</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">색상</th>
                                                <td>ARMY GREEN</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">치수</th>
                                                <td>
                                                    L/ 가슴둘레:130cm, 어깨단면:48cm, 소매기장:69cm, 소매폭:15cm, 소매통:26cm, 총장:75cm</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제조자</th>
                                                <td>TOMMY HILFIGER</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">수입자/병행수입</th>
                                            </tr>
                                            <tr>
                                                <th scope="row">제조국</th>
                                                <td>중국</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">세탁방법 및 취급시 주의사항</th>
                                                <td>
                                                    - 뒤집어서 세탁 후 건조시키십시오.<br />
                                                    - 여밈을 모두 잠그고 세탁하십시오.<br />
                                                    - 깨끗한 테니스 공 3개를 건조 사이클에 넣으십시오.<br /></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제조연월</th>
                                                <td>2023.07</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">품질보증기준</th>
                                                <td>관련법 및 소비자분쟁해결 규정에 따름</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">A/S 책임자,전화번호</th>
                                                <td>
                                                    (주)한섬,18005700</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </Styles.DetailReview>
                            </Styles.DetailTable>
                        </div>
                        <div className="detail-option"></div>
                    </Styles.ViewDetails>
                </div>
            </Styles.Container>
        </>
    )
}
