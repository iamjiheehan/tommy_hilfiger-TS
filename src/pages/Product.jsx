import React, { useEffect } from 'react'

import SubHeader from '../components/SubHeader/SubHeader'
import ProductMain from '../components/ProductMain/ProductMain'
import Footer from '../components/Footer/Footer'

export default function Product() {

    useEffect(() => {
        window.scrollTo(0, 0); // 화면이동시 가장 위로가도록 설정
    },[]);

    return (
        <>
            <SubHeader />
            <ProductMain/>
            <Footer />
        </>
    )
}
