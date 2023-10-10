import React from 'react'

import * as Styles from './ProductMainStyle'

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
                <div className="resposive-wrap">
                    <div className="view-top">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                    </div>
                    <div className="view-list"></div>
                    <div className="view-detail">
                        <div className="detail-tab"></div>
                        <div className="detail-option"></div>
                    </div>
                </div>
            </Styles.Container>
        </>
    )
}
