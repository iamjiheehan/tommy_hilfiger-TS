import React, { useEffect } from 'react'

import SubHeader from '../components/SubHeader/SubHeader'
import CartCont from '../components/Cart/CartCont'
import Footer from '../components/Footer/Footer'

import * as Styles from '../components/Main/MainStyle';


export default function Cart() {
    useEffect(() => {
        window.scrollTo(0, 0); // 화면이동시 가장 위로가도록 설정
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <SubHeader />
            <CartCont />
            <Styles.FixedBtn id='fixedbtn'>
                <button type="button" className="history"><span>최근 본 상품 보기</span></button>
                <button type="button" className="bnc"><span>혜택 보기</span></button>
                <button type="button" className="top" onClick={handleScrollToTop}><span>TOP</span></button>
            </Styles.FixedBtn>
            <Footer />
        </>
    )
}
