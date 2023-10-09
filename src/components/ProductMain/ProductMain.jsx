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
                <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni repellat illo, veniam dolorum quia facilis labore nulla eius assumenda tempore saepe eligendi voluptatum soluta cupiditate nisi sunt quidem mollitia!
                </h3>
            </Styles.Container>
        </>
    )
}
