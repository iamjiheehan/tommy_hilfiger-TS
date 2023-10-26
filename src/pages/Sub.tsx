import React, { useEffect } from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SubMain from '../components/Sub/SubMain';

import { useParams } from 'react-router-dom';

import * as Styles from '../components/Main/MainStyle';


export default function Sub() {

    // const { tabId } = useParams(); // 올바르게 tabId를 추출
    const { tabId = '' } = useParams();
    useEffect(() => {
        console.log("Sub에서 받은 tabID값 " + tabId);
    }, [tabId]);


    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <>
            <Header />
            <SubMain tabId={tabId}/>
            <Styles.FixedBtn id='fixedbtn'>
                <button type="button" className="history"><span>최근 본 상품 보기</span></button>
                <button type="button" className="bnc"><span>혜택 보기</span></button>
                <button type="button" className="top" onClick={handleScrollToTop}><span>TOP</span></button>
            </Styles.FixedBtn>
            <Footer />
        </>
    )
}
