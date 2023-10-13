import React from "react";
import { addItem } from "./store";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

export default function Detail(props) {
    
    let selproduct = props.shoes.find((x) => x.id === id);
    let dispatch = useDispatch();

    let { id } = useParams();
    let history = useHistory();

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <img src={"/" + selproduct.imgUrl} width="80%" />
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
                            {" "}
                            주문상품 확인하기{" "}
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
