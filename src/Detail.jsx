import React from "react";
import { addItem } from "./store";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

export default function Detail({ shoes }) {
    let { id } = useParams();
    let selproduct = shoes.find((x) => x.id === id);
    let dispatch = useDispatch();
    let history = useHistory();

    if (!selproduct) {
        // Handle the case where the selected product is not found.
        return <div>Product not found.</div>;
    }

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <img src={"/" + selproduct.imgUrl} width="80%" alt={selproduct.title} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{selproduct.title}</h4>
                    <p>{selproduct.content}</p>
                    <p>{selproduct.price}</p>
                    <Button
                        variant="primary"
                        onClick={() => {
                            dispatch(
                                addItem({
                                    id: selproduct.id,
                                    imgurl: selproduct.imgUrl.replace("img/", ""),
                                    name: selproduct.title,
                                    count: 1,
                                })
                            );
                        }}
                        style={{ marginRight: "10px" }}
                    >
                        주문하기
                    </Button>
                    <Link to="/cart">
                        <Button variant="outline-success">
                            주문상품 확인하기
                        </Button>
                    </Link>
                    <button className='btn btn-danger' onClick={ () => {
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>
        </>
    )
}
