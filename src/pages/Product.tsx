import React, { useEffect } from 'react';

import SubHeader from '../components/Sub/SubHeader';
import ProductMain from '../components/ProductMain/ProductMain';
import Footer from '../components/Footer/Footer';
import * as Styles from '../components/Main/MainStyle';

export default function Product() {
    // 페이지가 로딩될 때 화면을 맨 위로 스크롤하도록 하는 부분
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // 맨 위로 스크롤하는 함수
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <SubHeader />
            <ProductMain />
            <Styles.FixedBtn id="fixedbtn">
                <button type="button" className="history"><span>최근 본 상품 보기</span></button>
                <button type="button" className="bnc"><span>혜택 보기</span></button>
                <button type="button" className="top" onClick={handleScrollToTop}><span>TOP</span></button>
            </Styles.FixedBtn>
            <Footer />
        </>
    );
}
