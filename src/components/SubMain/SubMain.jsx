import React, { useEffect } from 'react'

import * as Styles from './SubMainStyles';

import { useLocation } from 'react-router-dom';


export default function SubMain() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const tabId = params.get("tab")

    useEffect(() =>{
        console.log(tabId);
    })
    
    return (
        <>
            <Styles.SubContainer>
                <h2 className='title'>
                    TOMMY HILFIGER MEN
                </h2>
                <div className='wrap-product-list'>
                    <div className="list-head">
                        <div className="list-filter">
                            <div className="filter-btn">
                                <span>FILTER</span>
                            </div>
                            <div class="filter-selected"></div>
                        </div>
                        <div className="cell">
                            <div class="select">
                                <button type="button" class="sel-btn">신상품순</button>
                                <div class="sel-list">
                                    <ul id="sortColum">
                                        <li><label><input type="radio" name="pdSort" value="NEW_GOD_SEQ" checked="" /> <span>신상품순</span></label></li>
                                        <li><label><input type="radio" name="pdSort" value="SALE_QTY_SEQ" /> <span>이름순</span></label></li>
                                        <li><label><input type="radio" name="pdSort" value="LWET_PRC_SEQ" /> <span>낮은가격순</span></label></li>
                                        <li><label><input type="radio" name="pdSort" value="BEST_PRC_SEQ" /> <span>높은가격순</span></label></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="product-list" id='productList'>

                </ul>
            </Styles.SubContainer >
        </>
    )

};
