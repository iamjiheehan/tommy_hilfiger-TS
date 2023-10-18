import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addCount, decreaseCount, deleteItem, sortName } from "../../store.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as Styles from "./CartContStyle.js"

function Cart() {
    let state = useSelector((state) => state);
    // console.log(state.cart[0].name);

    // dispatch는  store.js 로 요청보내주는 함수
    let dispatch = useDispatch();

    const smallProdcuctStyle = {
        border: "1px solid #ddd",
        width: "100px",
        height: "80px",
        cursor: "pointer",
    };

    let textverticalAlign = {
        verticalAlign: "middle",
        textAlign: "center",
    };

    return (
        <>
            <Styles.CartWrap id="cartWrap">
                {/* <h5 style={{ padding: "50px" }}>
                    {state.user.name} {state.user.age}의 
                    장바구니
                </h5> */}
                {/* <button onClick={()=>{ dispatch(increase())}}>나이+</button>
                <button onClick={()=>{ dispatch(increase(100))}}>나이+</button> */}
                <h3 className="page-title">장바구니</h3>
                <Styles.CartCont>
                    <div className="tab-wrap">
                        <ul className="tabs tab-btn">
                            <li className="on">
                                <button type="button"><span className="gnrlCartCnt">택배(1)</span></button>
                            </li>
                            <li>
                                <button type="button"><span className="pkupCartCnt">매장수령(0)</span></button>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="order-tbl type-cart">
                        <div className="head">
                            <div className="cell-check">
                                <label className="check-skin only">
                                    <input type="checkbox" className="allChk" /><span>전체 선택</span>
                                </label>
                            </div>
                            <div className="cell-info">상품정보</div>
                            <div className="cell-price">상품금액</div>
                            <div className="cell-btn">선택</div>
                            <div className="cell-dlv">배송정보</div>
                        </div>
                    </div> */}
                    <div className="body">
                        <Table className="order-tbl type-cart">
                            <thead>
                                <tr className="head">
                                    <th className="cell-check">
                                        <label className="check-skin only">
                                            <input type="checkbox" className="allChk" /><span>전체 선택</span>
                                        </label>
                                    </th>
                                    <th className="cell-info">상품정보</th>
                                    <th className="cell-amt">상품수량</th>
                                    <th className="cell-price">상품금액</th>
                                    <th className="cell-btn">선택</th>
                                </tr>
                            </thead>
                            <tbody className="body">
                                {/* {state.cart.map((a, i) => (
                                    <tr key={i}>
                                        <td style={{ ...textverticalAlign, textAlign: "right" }}>
                                            {state.cart[i].count}
                                        </td>
                                        <td>
                                            <Link to={`/detail/${state.cart[i].id}`}>
                                                <img
                                                    src={`img/${state.cart[i].imgurl}`}
                                                    style={smallProdcuctStyle}
                                                />
                                            </Link>
                                        </td>
                                        <td style={textverticalAlign}>
                                            {state.cart[i].name}
                                        </td>
                                        <td style={textverticalAlign}>
                                            {state.cart[i].count}
                                        </td>
                                        <td style={textverticalAlign}>
                                            <Button
                                                onClick={() => {
                                                    dispatch(addCount(state.cart[i].id));
                                                }}
                                                variant="outline-success"
                                                style={{ marginRight: "10px" }}
                                            >
                                                +
                                            </Button>

                                            <Button
                                                onClick={() => {
                                                    dispatch(
                                                        decreaseCount(state.cart[i].id)
                                                    );
                                                }}
                                                variant="outline-warning"
                                                style={{ marginRight: "10px" }}
                                            >
                                                -
                                            </Button>

                                            <Button
                                                onClick={() => {
                                                    dispatch(deleteItem(state.cart[i].id));
                                                }}
                                                variant="outline-danger"
                                            >
                                                상품삭제
                                            </Button>
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </Table>
                    </div>
                </Styles.CartCont>
            </Styles.CartWrap>
        </>
    );
}

export default Cart;
