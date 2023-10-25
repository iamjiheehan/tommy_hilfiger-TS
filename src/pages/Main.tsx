import React, { useEffect } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PopUpBanner from '../components/PopUpBanner/PopUpBanner';

import Banner from '../components/Main/Banner';
import MainCategory from '../components/Main/MainCategory';
import Category from '../components/Main/Category';
import Campaign from '../components/Main/Campaign';
import Promotion from '../components/Main/Promotion';
import Insta from '../components/Main/Insta';
import Review from '../components/Main/Review';
import Coupon from '../components/Main/Coupon';
import Focus from '../components/Main/Focus';

// 상세페이지 구현 필요한 컴포넌트들
import NewIn from '../components/Main/NewIn';
import Md from '../components/Main/Md';
import Ranking from '../components/Main/Ranking';
import Issue from '../components/Main/Issue';
import Magazine from '../components/Main/Magazine';

import * as Styles from '../components/Main/MainStyle';

export default function Main() {

  useEffect(() => {
    window.scrollTo(0, 0); // 화면이동시 가장 위로가도록 설정
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <PopUpBanner />
      <Header />
      <Styles.MainContainer>
        {/* 메인배너 */}
        <Banner />
        {/* 첫번째 섹션 */}
        <MainCategory />
        {/* 두번째 섹션  || New In */}
        <NewIn />
        {/* 세번째 섹션 || MORE CATOEGORIES */}
        <Category />
        {/* 네번째 섹션  || TOP RANKING */}
        <Ranking />
        {/* 다섯번째 섹션 || TOMMY ISSUE */}
        <Issue />
        {/* 여섯번째 섹션 || FOCUS ON */}
        <Focus />
        {/* 일곱번째 섹션 || MD's Pick */}
        <Md />
        {/* 여덩번째 섹션 || MAGAZINE */}
        <Magazine />
        {/* 아홉번째 섹션 || PROMOTION */}
        <Promotion />
        {/* 열번째 섹션 || INSTAGRAM */}
        <Insta />
        {/* 열한번째 섹션 || COUPON */}
        <Coupon />
        {/* 열두번째 섹션 || CAMPAIGN */}
        <Campaign />
        {/* 열세번째 섹션 || REVIEW */}
        <Review />
        <Styles.FixedBtn id='fixedbtn'>
          <button type="button" className="history"><span>최근 본 상품 보기</span></button>
          <button type="button" className="bnc"><span>혜택 보기</span></button>
          <button type="button" className="top" onClick={handleScrollToTop}><span>TOP</span></button>
        </Styles.FixedBtn>
      </Styles.MainContainer >
      <Footer />
    </>
  );
}
