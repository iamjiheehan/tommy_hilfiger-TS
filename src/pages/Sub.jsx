import React, { useEffect } from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SubMain from '../components/SubMain/SubMain';

import { useParams } from 'react-router-dom';

export default function Sub() {

    const { tabId } = useParams(); // 올바르게 tabId를 추출

    useEffect(() => {
        console.log("Sub에서 받은 tabID값 " + tabId);
    }, [tabId]);

    return (
        <>
            <Header />
            <h2>야</h2>
            <SubMain tabId={tabId}/>
            <Footer />
        </>
    )

};
