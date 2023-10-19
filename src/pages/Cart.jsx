import React, { useEffect } from 'react'

import SubHeader from '../components/SubHeader/SubHeader'
import CartCont from '../components/Cart/CartCont'
import Footer from '../components/Footer/Footer'

export default function Cart() {

    useEffect(() => {
        window.scrollTo(0, 0); // 화면이동시 가장 위로가도록 설정
    })

    return (
        <>
            <SubHeader />
            <CartCont/>
            <Footer />
        </>
    )
}
