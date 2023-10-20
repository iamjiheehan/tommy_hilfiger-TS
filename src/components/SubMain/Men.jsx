import React, { useEffect } from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import * as Styles from '../components/Main/MainStyle';


export default function MenMain() {

    return (
        <>
            <Styles.MainContainer>
                <h2>f</h2>
            </Styles.MainContainer >
            <Styles.FixedBtn id='fixedbtn'>
                <button type="button" className="history"><span>최근 본 상품 보기</span></button>
                <button type="button" className="bnc"><span>혜택 보기</span></button>
                <button type="button" className="top"><span>TOP</span></button>
            </Styles.FixedBtn>
        </>
    )

};
