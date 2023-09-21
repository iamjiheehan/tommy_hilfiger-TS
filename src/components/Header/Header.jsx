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
                            <span borderleft="none"><a href="#!">로그인</a></span>
                            <span><a href="#!">회원가입</a></span>
                            <span><a href="#!">마이페이지</a></span>
                            <span><a href="#!">장바구니</a></span>
                        </div>
                    </Styles.MainFlex>
                    <Styles.GnbWrap className="header-gnb">
                        <Styles.BtnList >
                            <button className='btn-list' type="button"><span>카테고리</span></button>
                            <button className='btn-list' marginright="0" type="button"><span>브랜드</span></button>
                        </Styles.BtnList>
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
                    </Styles.GnbWrap>
                </div>
            </header>
        </>
    );
}

export default Header;

