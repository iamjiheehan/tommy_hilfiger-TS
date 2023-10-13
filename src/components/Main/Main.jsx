import React from 'react';

import * as Styles from './MainStyle';

import Banner from './Banner';
import MainCategory from './MainCategory';
import Category from './Category';
import Campaign from './Campaign';
import Promotion from './Promotion';
import Insta from './Insta';
import Review from './Review';
import Coupon from './Coupon';
import Focus from './Focus';


//상세페이지 구현 필요한 컴포넌트들
import NewIn from './NewIn';
import Md from './Md';
import Ranking from './Ranking';
import Issue from './Issue';
import Magazine from './Magazine';


function Main() {

    return (
        <>
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
                {/* 여덟번째 섹션 || MAGAZINE */}
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
                    <button type="button" className="top"><span>TOP</span></button>
                </Styles.FixedBtn>
            </Styles.MainContainer >
        </>
    );
}

export default Main;

