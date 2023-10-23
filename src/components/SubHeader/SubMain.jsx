import React, { useEffect, useState } from 'react';

import * as Styles from '../ProductMain/ProductMainStyle';

import NewInMenData from '../../data/NewIn/men';
import NewInWomenData from '../../data/NewIn/women';
import NewInGolfData from '../../data/NewIn/golf';
import NewInKidsData from '../../data/NewIn/kids';
import NewInJeansData from '../../data/NewIn/tommyJeans';
import NewInShoesData from '../../data/NewIn/shoes';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store';

export default function SubMain({ tabId }) {
    //  사이즈 모달창1
    const [show, setShow] = useState(false);
    function SetModal() {
        setShow(!show);
    }

    //  사이즈 모달창2
    const [showSize, setShowSize] = useState(false);
    function SetSizeModal() {
        setShowSize(!showSize);
    }

    //탭 활성화 
    const [tab, setTab] = useState(0);
    function ActiveTab(index) {
        setTab(index);
    }

    //  장바구니 팝업창
    const [popUp, setPopUp] = useState(false);
    function ActivePop() {
        setPopUp(!popUp);
        console.log(item);
    }

    //탭 클릭시 스크롤 이동
    // 탭 클릭시 스크롤 이동
    const btnArr = document.querySelectorAll('button[id^="tab"]');
    for (let i = 0; i < btnArr.length; i++) {
        btnArr[i].addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector('.tab' + (i + 1));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // 부드러운 스크롤
                    block: 'center' // 뷰포트 내에서 요소를 중앙에 위치시킵니다
                });
            }
        });
    }


    // 모든 제품 데이터를 하나의 배열로 병합
    const productData = [
        ...NewInMenData,
        ...NewInWomenData,
        ...NewInGolfData,
        ...NewInKidsData,
        ...NewInJeansData,
        ...NewInShoesData,
    ];

    const [products, setProducts] = useState([]);
    const [item, setItem] = useState();

    useEffect(() => {
        console.log("SubMain 컴포넌트에서 받은 tabID 값: " + tabId);
        // tabId와 일치하는 아이템만 필터링
        const filteredItems = productData.filter(item => item.id === tabId);
        setProducts(filteredItems);
        setItem(filteredItems[0]);
        console.log("일치하는 아이템들:", filteredItems);
    }, [tabId]);

    // Redux 상태 관리

    const dispatch = useDispatch();

    function SendToCart(items) {
        console.log("Item to add to the cart:", items);
        dispatch(addItem(items));
        // ActivePop();
    }

    return (
        <>
            <Styles.Container id='productMain'>
                {products.map(item => (
                    <div key={item.id}>
                        <h1 className='subtitle'>{item.brand}</h1>
                        <div className="view-top">
                            <div className="top-left">
                                <div className="left-swiper">
                                    <div className="img-container">
                                        <button type="button" className="btn-popup" value="1">
                                            {item.img && (
                                                <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.name} />
                                            )}
                                        </button>
                                        <button type="button" className="btn-popup" value="2">
                                            {item.imgSub && (
                                                <img src={`${process.env.PUBLIC_URL}/${item.imgSub}`} alt={item.name} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Styles.TopRight className='top-right'>
                                <div className="etc-btn">
                                    <button type="button" className="btn-like"><span></span></button>
                                    <span className="bar">|</span>
                                    <button type="button" className="btn-share"><span></span></button>
                                </div>
                                <p className="item-brand">
                                    <a href="#!">
                                        {item.brand}
                                    </a>
                                </p>
                                <p className="item-tag">
                                    <span className="code">{item.id}</span>
                                    <span className="tag" style={{ color: "#C2935F" }}>
                                    </span>
                                </p>
                                <p className="item-name">{item.name}</p>
                                <div className="item-price">
                                    <p className="price"><span>{item.regular}</span></p>
                                    <p className="coupon">
                                        <span className="num">
                                            {item.price}
                                        </span>
                                        <span className="txt">회원/멤버십 쿠폰가
                                            <button type="button" className="btn-tooltip">툴팁보기</button>
                                        </span>
                                        <button type="button" className="btn-coupon"><span>쿠폰다운로드</span>
                                        </button>
                                    </p>
                                </div>
                                <Styles.ViewOption className="view-option">
                                    <div className="row size">
                                        <div className="select">
                                            <button type="button" className="sel-btn">
                                                사이즈를 선택하세요. <span className="val"></span>
                                            </button>
                                            <div className={`sel-list ${show ? "" : "hide"}`}>
                                                <ul>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>S</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>L</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>XL</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="radio" />
                                                            <span>XXL (2XL)</span>
                                                            <span className="soldout">(품절)</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button type="button" className="btn-size">
                                            <span>사이즈 가이드</span>
                                        </button>
                                        <div className="guide">
                                            <span className="sizeRecommandArea">
                                                <button type="button"></button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <button name="btnShoppingBag" type="button" className="btn-basket btn-type" onClick={ActivePop}>
                                            <span>장바구니</span>
                                        </button>
                                        <button name="btnBuynow" type="button" className="btn-buy btn-type" onClick={ActivePop}>
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
                    </div>
                ))}
                <Styles.ViewDetails className="view-detail">
                    <div className="detail-tab">
                        <ul className="tabs">
                            <li className={tab === 0 ? "on" : ""}><button type="button" id='tab1' onClick={() => ActiveTab(0)}><span>상품상세정보</span></button></li>
                            <li className={tab === 1 ? "on" : ""}><button type="button" id='tab2' onClick={() => ActiveTab(1)}><span>리뷰(0)</span></button></li>
                            <li className={tab === 2 ? "on" : ""}><button type="button" id='tab3' onClick={() => ActiveTab(2)}><span>상품 QnA(0)</span></button></li>
                        </ul>
                        {/* 상품 상세 정보 */}
                        <Styles.DetailInfo className='detail-info tab1'>
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
                                        {/* <tr>
                                                <th scope="row">색상</th>
                                                <td>ARMY GREEN</td>
                                            </tr> */}
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
                            <Styles.DetailReview id="tabContentReview" className='tab2'>
                                <h3 className="sec-title">리뷰</h3>
                                <div className="review-list">
                                    <div className="head">
                                        <p className="txt">상품 구매 후 리뷰 작성시 H.Plus를 드립니다. (포토리뷰 1,000포인트, 텍스트리뷰 300포인트 증정)</p>
                                        <div id="review-filter" className="option">
                                            <div className="select">
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
                                        <div className="option">
                                            <button type="button" className="btn-beige"><span>포토리뷰</span></button>
                                            <button type="button" className="btn-black"><span>리뷰작성</span></button>
                                        </div>
                                    </div>
                                    <div id="reviewNodata" className="nodata">
                                        지금 첫 리뷰를 작성해주세요.<br />
                                        포토리뷰 1,000포인트, 텍스트 리뷰 300포인트를 증정합니다. (상품구매시)
                                    </div>
                                </div>
                            </Styles.DetailReview>
                            <Styles.DetailReview id="tabContentQna" className='tab3'>
                                <h3 className="sec-title">상품 Q&A</h3>
                                <div className="review-list">
                                    <div className="head">
                                        <p className="txt" style={{ float: "left" }}>상품에 대한 배송, 교환, 취소등의 자세한 문의사항은 <a href="#!"> 고객센터 1:1문의</a>를 이용하여 주시기 바랍니다.</p>
                                        <button type="button" className="btn-black"><span>리뷰작성</span></button>
                                    </div>
                                    <div id="reviewNodata" className="nodata">
                                        등록된 상품문의가 없습니다.
                                    </div>
                                </div>
                            </Styles.DetailReview>
                            <Styles.DetailReview id="tabContentReview">
                                <h4 className='sec-title'>배송/교환/반품</h4>
                                <div className='detail-table'>
                                    <table>
                                        <caption>배송/교환/반품</caption>
                                        <colgroup><col style={{ width: "180px", textAlign: "left" }} /></colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">배송기간</th>
                                                <td>
                                                    - 상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.- 상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.- 동일 브랜드의 상품이라도 상품별 출고일시가 달라 각각 배송될 수 있습니다.- 일부 주문상품 또는 예약상품의 경우 기본 배송일 외에 추가 배송 소요일이 발생될 수 있습니다.- 도서 산간 지역은 별도의 배송비와 반품비가 추가될 수 있습니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">반품배송비</th>
                                                <ul className="txt-list">
                                                    <li>전체 반품 시 : 5,000원</li>
                                                    <li>부분 반품 시 : 2,500원 (단, 부분 반품 후 결제금액이 3만원 미만인 경우 5,000원)
                                                        <br /> * 반품비는 브랜드/입점사별로 상이할 수 있습니다.
                                                        <br /> * 도서산간 지역은 추가 배송비가 부과됩니다.</li>
                                                </ul>
                                            </tr>
                                            <tr>
                                                <th scope="row">교환배송비</th>
                                                <td>
                                                    <ul className="txt-list">
                                                        <li>5,000원 (교환상품 배송비 + 2,500원)
                                                            <br />* 교환배송비는 브랜드/입점사별로 상이할 수 있습니다.</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">교환/반품 유의사항</th>
                                                <td>
                                                    - 상품 수령일로부터 7일 이내 반품/환불 가능합니다.
                                                    <br /> - 상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다.
                                                    <br /> - 고객 부주의로 상품이 훼손, 변경된 경우 반품 / 교환이 불가능 합니다.
                                                    <br /> - 주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.
                                                    <br /> - 임의반품은 불가하오니 반드시 고객센터나 MY Page&gt; 주문취소/교환/반품 신청을 통해서 신청접수를 하시기 바랍니다.
                                                    <br /> - 특정브랜드의 상품설명에 별도로 기입된 교환/반품/AS기준이 우선합니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">교환 안내</th>
                                                <td>
                                                    교환 가능 기간
                                                    <br /> 교환 신청은 배송 완료 후 7일 내 가능합니다.
                                                    <br />
                                                    <br /> 교환 불가 상품
                                                    <br /> 단순 변심의 경우 최초 배송된 상품의 상태와 다를 시 (세탁 또는 착용 후 외출하신 경우) 교환 및 반품이 불가합니다.
                                                    <br /> 쥬얼리와 언더웨어 상품은 착용 이후 교환 및 반품이 불가합니다.
                                                    <br /> 맞춤제작의 경우 제작이 시작된 이후에는 취소,교환 및 반품이 불가합니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">반품안내</th>
                                                <td>
                                                    반품 가능 기간
                                                    <br />반품 신청은 배송 완료 후 7일 내 가능합니다.
                                                    <br />
                                                    <br /> 반품 불가 상품
                                                    <br /> 단순 변심의 경우 최초 배송된 상품의 상태와 다를 시 (세탁 또는 착용 후 외출하신 경우) 교환 및 반품이 불가합니다.
                                                    <br /> 쥬얼리와 언더웨어 상품은 착용 이후, 교환 및 반품이 불가합니다.
                                                    <br /> 맞춤제작의 경우 제작이 시작된 이후에는 취소,교환 및 반품이 불가합니다.
                                                    <br /> 상품박스, 별도 부속물등이 정상적인 상태에서 반품진행이 원활하게 진행될 수 있습니다.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Styles.DetailReview>
                        </Styles.DetailTable>
                    </div>
                    <Styles.DetailOption className="detail-option">
                        <div className='sticky-wrap'>
                            <Styles.ViewOption className="view-option">
                                <div className="row size" style={{ paddingRight: "0" }}>
                                    <div className="select">
                                        <button type="button" className="sel-btn" onClick={SetSizeModal}>사이즈를 선택하세요. <span className="val"></span></button>
                                        <div className={`sel-list ${showSize ? "" : "hide"}`}>
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
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="guide">
                                        <span className="sizeRecommandArea">
                                            <button type="button"></button>
                                        </span>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button name="btnShoppingBag" type="button" className="btn-basket btn-type" onClick={ActivePop}>
                                        <span>장바구니</span>
                                    </button>
                                    <button name="btnBuynow" type="button" className="btn-buy btn-type" onClick={ActivePop}>
                                        <span>
                                            <input type="hidden" />
                                            바로구매
                                        </span>
                                    </button>
                                </div>
                            </Styles.ViewOption>
                        </div>
                    </Styles.DetailOption>
                </Styles.ViewDetails>
                {popUp && (
                    <Styles.LayerPopup>
                        <div className="layer-wrap">
                            <div className="layer-header">
                                <h2 className="layer-title">장바구니 담기 완료</h2>
                            </div>
                            <div className="layer-container">
                                <div className="layer-content layer-shopping-bag">
                                    <p className="txt">해당 상품이 장바구니에 담겼습니다.<br />장바구니로 이동하시겠습니까? </p>
                                    <div className="btn-box">
                                        <button type="button" className="btn-basket btn-type" onClick={ActivePop}><span>계속 쇼핑하기</span></button>
                                        <Link to="/cart">
                                            <button type="button" className="btn-buy btn-type" onClick={() => SendToCart(item)}><span>장바구니 보기</span></button>
                                        </Link>
                                    </div>
                                    <section className="item-slide"></section>
                                </div>
                            </div>
                            <button type="button" className="btn-layer-close" onClick={ActivePop}>닫기</button>
                        </div>
                    </Styles.LayerPopup>
                )}
            </Styles.Container>
        </>
    );
}
