import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, deleteItem } from "../../store.js"; // Removed unnecessary 'sortName' import
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as Styles from "./CartContStyle.js";
import { useEffect } from "react";

function Cart() {
    const items = useSelector((state) => state.cart.items); // Redux 스토어로부터 장바구니 아이템 가져오기
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("카트로 넘어온 아이템은", items);
    });


    const textVerticalAlign = {
        verticalAlign: "middle",
        textAlign: "center",
    };

    return (
        <>
            <Styles.CartWrap id="cartWrap">
                <h3 className="page-title">장바구니</h3>
                <Styles.CartCont>
                    <div className="tab-wrap">
                        <ul className="tabs tab-btn">
                            <li className="on">
                                <button type="button">
                                    <span className="gnrlCartCnt">택배(1)</span>
                                </button>
                            </li>
                            <li>
                                <button type="button">
                                    <span className="pkupCartCnt">매장수령(0)</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
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
                                    <tr key={item.id}>
                                        <td className="cell-check">
                                            <label className="check-skin only">
                                                <input type="checkbox" className="allChk" />
                                                <span>전체 선택</span>
                                            </label>
                                        </td>
                                        <td className="cell-info">
                                            <Link to={`/detail/${item.id}`}>
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
                                                        <div class="item-state">[입점 판매 상품]</div>
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
                                            {item.count}
                                        </td>
                                        <td style={textVerticalAlign} className="cell-price item-opt">
                                            {(parseFloat(item.price.replace(/,/g, '')) * item.count).toLocaleString()} 원
                                        </td>
                                        <td style={textVerticalAlign} className="cell-btn item-opt">
                                            <Button
                                                onClick={() => {
                                                    dispatch(addCount(item.id));
                                                }}
                                                variant="outline-success"
                                                style={{ marginRight: "10px" }}
                                            >
                                                +
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    dispatch(minusCount(item.id));
                                                }}
                                                variant="outline-warning"
                                                style={{ marginRight: "10px" }}
                                            >
                                                -
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    dispatch(deleteItem(item.id));
                                                }}
                                                variant="outline-danger"
                                            >
                                                상품삭제
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Styles.CartCont>
            </Styles.CartWrap>
        </>
    );
}

export default Cart;
