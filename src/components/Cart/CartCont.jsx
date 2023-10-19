import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, deleteItem, calculateFinalPrice } from "../../store.js"; // Removed unnecessary 'sortName' import
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as Styles from "./CartContStyle.js";
import { useEffect, useState } from "react";

function Cart() {
    const items = useSelector((state) => state.cart.items); // Redux 스토어로부터 장바구니 아이템 가져오기
    const dispatch = useDispatch();
    const finalPrice = useSelector((state) => state.cart.finalPrice);

    useEffect(() => {
        window.scrollTo(0, 0);
        // 최종 가격을 계산하는 액션을 디스패치
        dispatch(calculateFinalPrice());
    }, [dispatch, items]);

    const textVerticalAlign = {
        verticalAlign: "middle",
        textAlign: "center",
    };

    //탭 활성화 
    const [tab, setTab] = useState(0);
    function ActiveTab(index) {
        setTab(index);
    }


    return (
        <>
            <Styles.CartWrap id="cartWrap">
                <div className="breadcrumb-wrap">
                    <ol className="breadcrumb">
                        <li className="bc-home"><a href="/"><span>HOME</span></a></li>
                        <li className="active">장바구니</li>
                    </ol>
                </div>
                <h3 className="page-title">장바구니</h3>
                <Styles.CartCont>
                    <div className="tab-wrap">
                        <ul className="tabs tab-btn">
                            <li className={tab === 0 ? "on" : ""} onClick={() => ActiveTab(0)}>
                                <button type="button">
                                    <span className="gnrlCartCnt">택배(1)</span>
                                </button>
                            </li>
                            <li className={tab === 1 ? "on" : ""} onClick={() => ActiveTab(1)}>
                                <button type="button">
                                    <span className="pkupCartCnt">매장수령(0)</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Table className="order-tbl type-cart">
                            <thead>
                                <tr className="head">
                                    <th className="cell-check">
                                        <label className="check-skin only">
                                            <input type="checkbox" className="allChk" />
                                            <span>전체 선택</span>
                                        </label>
                                    </th>
                                    <th className="cell-info">상품정보</th>
                                    <th className="cell-amt">상품수량</th>
                                    <th className="cell-price">상품금액</th>
                                    <th className="cell-btn">선택</th>
                                </tr>
                            </thead>
                            <tbody className="body">
                                {items.map((item) => (
                                    <tr key={item.id} className="row">
                                        <td className="cell-check">
                                            <label className="check-skin only">
                                                <input type="checkbox" className="allChk" />
                                                <span>전체 선택</span>
                                            </label>
                                        </td>
                                        <td className="cell-info">
                                            <Link to={`/product/${item.id}`}>
                                                <div className="first">
                                                    <div>
                                                        {item.img && (
                                                            <img src={`${process.env.PUBLIC_URL}/${item.img}`}
                                                                alt={item.name}
                                                                className="item-img"
                                                            />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="item-state">[입점 판매 상품]</div>
                                                        <p className="item-text">{item.brand}</p>
                                                        <p className="item-text">{item.name}</p>
                                                        <p className="item-text btn-link">옵션변경</p>
                                                        <div className="item-link">
                                                            <p className="item-text">상품사은품 증정</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td style={textVerticalAlign} className="cell-amt item-opt">
                                            <Button
                                                onClick={() => {
                                                    dispatch(addCount(item.id));
                                                }}
                                                variant="outline-success"
                                                style={{ marginRight: "1rem" }}
                                            >
                                                +
                                            </Button>
                                            {item.count}
                                            <Button
                                                onClick={() => {
                                                    dispatch(minusCount(item.id));
                                                }}
                                                variant="outline-warning"
                                                style={{ marginLeft: "1rem" }}
                                            >
                                                -
                                            </Button>
                                        </td>
                                        <td style={textVerticalAlign} className="cell-price item-opt">
                                            {item.finalPrice} 원 {/* 각 상품의 finalPrice 표시 */}
                                        </td>
                                        <td style={textVerticalAlign} className="cell-btn item-opt">
                                            <button type="button" className="btn-buy-small"><span>바로구매</span></button>
                                            <Button
                                                onClick={() => {
                                                    dispatch(deleteItem(item.id));
                                                }}
                                                className="btn-del"
                                            >
                                                상품삭제
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="tbl-btn">
                        <button type="button" className="btn-del-m"><span>선택삭제</span></button>
                    </div>
                    <Styles.FinalPrice>
                        <div className="inner">
                            <span className="price">
                                <span className="txt">상품금액</span>
                                <span id="totalGodAmt" className="num">
                                    {/* 각 항목의 finalPrice 합산 */}
                                    {items.reduce((total, item) => {
                                        return total + parseFloat(item.finalPrice.replace(/,/g, ''));
                                    }, 0).toLocaleString()}
                                </span> 원
                            </span>
                            <span className="symbol-plus">+</span>
                            <span className="price">
                                <span className="txt">배송비</span>
                                <span id="totalDlvAmt" className="num">0</span> 원
                            </span>
                            <span className="symbol-minus">-</span>
                            <span className="price sale">
                                <span className="txt">총 할인금액</span>
                                <span id="totalDcAmt" className="num">0</span> 원
                            </span>
                            <span className="symbol-eq">=</span>
                            <span className="price total">
                                <span className="txt">결제금액</span>
                                <span id="totalOrdAmt" className="num">
                                    {/* 같은 값 사용, 각 항목의 finalPrice 합산 */}
                                    {/* https://velog.io/@loocia1910/%EB%B0%B0%EC%97%B4-reduce-%ED%95%A8%EC%88%98-JavaScript 참고 */}
                                    {items.reduce((total, item) => {
                                        return total + parseFloat(item.finalPrice.replace(/,/g, ''));
                                    }, 0).toLocaleString()}원
                                </span>
                            </span>
                        </div>
                    </Styles.FinalPrice>
                    <Styles.BtnBox>
                        <div className="btn-box">
                            <a href="#!" className="btn-type4-lg">쇼핑 계속하기</a>
                            <a href="#!" className="btn-type2-lg">선택상품 주문하기</a>
                        </div>
                        <ul className="txt-list">
                            <li>장바구니에 담긴 상품은 30일 동안 보관됩니다. 30일이 지난 상품은 자동 삭제됩니다.</li>
                            <li>장바구니에 최대 50개까지 상품 보관이 가능하며, 실제 구매 시에는 가격이나 혜택이 변동될 수 있습니다.</li>
                            <li>장바구니에 담은 상품이 판매종료가 되었을 경우 자동 삭제 됩니다.</li>
                            <li>입점 판매 상품은 장바구니에서 [입점 판매 상품]으로 표시됩니다.<button type="button" className="point-link">입점 판매 상품 안내 보기</button></li>
                        </ul>
                    </Styles.BtnBox>
                </Styles.CartCont>
            </Styles.CartWrap>
        </>
    );
}

export default Cart;
