import React from 'react'

import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import PopUpBanner from '../../components/PopUpBanner/PopUpBanner'

export default function Home() {
  return (
    <>
      <PopUpBanner />
      <Header />
      <Main />
      <Footer />
    </>
  )
};


