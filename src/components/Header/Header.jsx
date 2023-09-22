import React from 'react';

import * as Styles from './HeaderStyle';
// 이미지 임포트
import logo from '../../assets/images/header_logo.png'

function Header() {
    return (
        <>
            <header className='header'>
                <div className="header_inner">
                    <Styles.MainFlex className="header">
                        <div className="header-new-logo">
                            <Styles.Link href="#!">H FASHION</Styles.Link>
                        </div>
                        <Styles.Absolute>
                            <h2 className="header-logo">
                                <a href="#!">
                                    <img src={logo} alt="TOMMY HILFIGER" />
                                </a>
                            </h2>
                        </Styles.Absolute>
                        <div className="header-util">
                            <button type="button" className="btn-search" id="btnSearchLayer"></button>
                            <span><a href="#!">로그인</a></span>
                            <span><a href="#!">회원가입</a></span>
                            <span><a href="#!">마이페이지</a></span>
                            <span><a href="#!">장바구니</a></span>
                        </div>
                    </Styles.MainFlex>
                    <Styles.GnbWrap className="header-gnb">
                        <Styles.BtnWrap >
                            <button className='btn-list' type="button"><span>카테고리</span></button>
                            <button className='btn-list' marginright="0" type="button"><span>브랜드</span></button>
                        </Styles.BtnWrap>
                        <div className='header-main-gnb'>
                            <ul>
                                <li className="on">
                                    <a href="#!">MAIN</a>
                                </li>
                                <li className="">
                                    <a href="!">
                                        MEN</a>
                                </li>
                                <li className="">
                                    <a href="#!">
                                        WOMEN</a>
                                </li>
                                <li className="">
                                    <a href="#!">
                                        TOMMY JEANS</a>
                                </li>
                                <li className="">
                                    <a href="#!">
                                        KIDS</a>
                                </li>
                                <li className="">
                                    <a href="#!">
                                        SHOES</a>
                                </li>
                                <li className="">
                                    <a href="#!">
                                        GOLF</a>
                                </li>
                            </ul>
                        </div>
                    </Styles.GnbWrap>
                </div>
                <Styles.NewCategory>
                    <div className="gnb-new-box hide">
                        <div className="menu-contents">
                            <div className="brand-cate-wrap">
                                <ul className="brand-cate-list">
                                    <li>
                                        <a href="#!">
                                            여성</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            EXCLUSIVE</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            니트/스웨터</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            티셔츠</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            셔츠/블라우스</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            아우터</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            팬츠</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            데님</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            언더웨어</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            원피스</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            스커트</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            가방</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            신발</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            악세서리</a>
                                    </li>
                                </ul>
                                <ul className="brand-cate-list">
                                    <li>
                                        <a href="#!">
                                            남성</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            EXCLUSIVE</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            티셔츠</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            셔츠</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            니트/스웨터</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            아우터</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            팬츠</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            데님</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            수트정장</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            언더웨어</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            가방</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            신발</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            악세서리</a>
                                    </li>
                                </ul>
                                <ul className="brand-cate-list">
                                    <li>
                                        <a href="#!">
                                            키즈</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            EXCLUSIVE</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            남아</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            여아</a>
                                    </li>
                                </ul>
                                <ul className="brand-cate-list">
                                    <li>
                                        <a href="#!">
                                            잡화</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            EXCLUSIVE</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            모자</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            여성신발</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            여성가방</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            여성패션잡화</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            남성신발</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            남성가방</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            남성패션잡화</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            키즈패션잡화</a>
                                    </li>
                                </ul>
                                <ul className="brand-cate-list">
                                    <li>
                                        <a href="#!;">
                                            라이프스타일</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            펫</a>
                                    </li>
                                </ul>
                                <ul className="brand-cate-list">
                                    <li>
                                        <a href="#!">
                                            골프</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            남성 아우터</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            남성 상의</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            남성 하의</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            여성 아우터</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            여성 상의</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            여성 하의</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            골프 악세서리</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            골프 가방</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Styles.NewCategory>
                <Styles.NewBrand>
                    <div className="gnb-new-box">
                        <div class="menu-contents">
                            <div class="brand-line-wrap">
                                <a href="#!" class="btn-brand-line">
                                    <div class="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_7_KOR_20230712043648.jpg?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                    <div class="title">MAIN</div>
                                </a>
                                <a href="#!" class="btn-brand-line">
                                    <div class="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_1_KOR_20230906182644.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                    <div class="title">MEN</div>
                                </a>
                                <a href="#!" class="btn-brand-line">
                                    <div class="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_2_KOR_20230906182653.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                    <div class="title">WOMEN</div>
                                </a>
                                <a href="#!" class="btn-brand-line">
                                    <div class="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_3_KOR_20230906182702.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                    <div class="title">JEANS</div>
                                </a>
                                <a href="#!" class="btn-brand-line">
                                    <div class="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_5_KOR_20230906164555.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                    <div class="title">KIDS</div>
                                </a>
                                <a href="#!" class="btn-brand-line">
                                    <div class="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_4_KOR_20230906182350.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                    <div class="title">SHOES</div>
                                </a>
                                <a href="#!" class="btn-brand-line">
                                    <div class="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_6_KOR_20230906164615.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                    <div class="title">GOLF</div>
                                </a>
                            </div>
                            <div class="brand-line-search-wrap">
                                <div class="brand-search-container">
                                    <fieldset class="brand-search-header">
                                        <legend>검색</legend>
                                        <div class="input-info-group brand-search-field">
                                            <div class="input-box">
                                                <input type="text" name="brandSearch" id="brandSearch" title="브랜드 검색" placeholder="브랜드를 입력하세요." class="inp-reset inp-search" autocomplete="off" />
                                            </div>
                                            <button type="button" class="btn-search"><span>검색</span></button>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="brand-search-cont">
                                    <div class="bs-list-container">
                                        <p class="bs-list-nodata">
                                            관심있는 브랜드에 하트를 눌러 보세요!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Styles.NewBrand>
            </header>
        </>
    );
}

export default Header;

