import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decreaseCount, deleteItem, addItem } from "../../store.js"; // 불필요한 'sortName' 및 'cart' import 제거
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as Styles from "./CartContStyle.js";
import { useEffect } from "react";

function Cart() {
    const item = useSelector((state) => state.cart); // Redux 스토어로부터 장바구니 아이템 가져오기
    const dispatch = useDispatch();
    

    const cartItems = useSelector((state) => state.cart.items);
    const selectedItem = useSelector((state) => state.detail);

    useEffect(() =>{
        console.log(cartItems,selectedItem);
});

    const smallProductStyle = {
        border: "1px solid #ddd",
        width: "100px",
        height: "80px",
        cursor: "pointer",
    };

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
                                {/* {cartItems.map((item) => ( */}
                                    <tr key={item.id}>
                                        <td className="cell-check">
                                            <label className="check-skin only">
                                                <input type="checkbox" className="allChk" />
                                                <span>전체 선택</span>
                                            </label>
                                        </td>
                                        <td className="cell-info">
                                            <Link to={`/detail/${item.id}`}>
                                                <img
                                                    src={`img/${item.imgurl}`}
                                                    style={smallProductStyle}
                                                    alt={`img/${item.name}`}
                                                />
                                                {item.name}
                                            </Link>
                                        </td>
                                        <td style={textVerticalAlign} className="cell-amt">
                                            {item.count}
                                        </td>
                                        <td style={textVerticalAlign} className="cell-price">
                                            {item.price}
                                        </td>
                                        <td style={textVerticalAlign} className="cell-btn">
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
                                                    dispatch(decreaseCount(item.id));
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
                                {/* ))} */}
                            </tbody>
                        </Table>
                    </div>
                </Styles.CartCont>
            </Styles.CartWrap>
        </>
    );
}

export default Cart;
