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
                <Styles.NewBox>
                    <div className="gnb-new-box">
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
                </Styles.NewBox>
            </header>
        </>
    );
}

export default Header;

