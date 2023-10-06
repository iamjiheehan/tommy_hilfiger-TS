import React from 'react';

import * as Styles from '../SubHeader/SubHeaderStyle'

function SubHeader() {
    return (
        <>
            <Styles.Header>
                <div className="inner">
                    <div className="wrap">
                        <h1 className="logo"><a href="/main">H FASHION</a></h1>
                        <nav className="util">
                            <button className="btn-search"><span>버튼 ㅋ</span></button>
                            <span><a href="#!">로그인</a></span>
                            <span><a href="#!">회원가입</a></span>
                            <span><a href="#!">마이페이지</a></span>
                            <span><a href="#!">장바구니</a></span>
                        </nav>
                        {/* <div>
                            <div className="btns">
                                <a href="/">홈</a>
                                <button type="button" className="btn-menu"></button>
                            </div>
                            <h2 className="logo">
                            </h2>
                        </div> */}
                    </div>
                    <div className="search">
                        <div className="inner">
                            <fieldset>
                                <legend>검색</legend>
                                <div className="search-field">
                                    <div className="input-box">
                                        <input type="text" title="검색어 입력" className="inp-reset" autoComplete="off" />
                                        <div className="etc">
                                            <button type="button" className="btn-clear"><span>지우기</span></button>
                                        </div>
                                    </div>
                                    <button type="button" className="btn-search"><span>검색</span></button>
                                </div>
                            </fieldset>
                            <div className="keyword-wrap">
                                <div className="keyword-related">
                                </div>
                                <div className="keyword-list-wrap">
                                    <section className="keyword-recent">
                                    </section>
                                    <section className="keyword-hot">
                                        <h2 className="title">인기검색어</h2>
                                        <ul className="list">
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn-close">닫기</button>
                    </div>
                    <div className='clear'></div>
                    <div id="gnb">
                        <div className="wrap">
                            <Styles.GnbMenu className="gnb-menu">
                                <div className="gnb-category">
                                    <a href="#!">
                                        <span>
                                            여성</span>
                                    </a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">여성 메인</a>
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
                                                                아우터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                데님</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                원피스</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                수영복</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                스포츠웨어</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                니트/스웨터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                셔츠/블라우스</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                팬츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                언더웨어</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                스커트</a>
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
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="#!">
                                        <span>
                                            남성</span>
                                    </a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">남성 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                EXCLUSIVE</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                셔츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                아우터</a>
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
                                                                신발</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                악세서리</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                티셔츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                니트/스웨터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                팬츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                수트정장</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                수영복</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                스포츠웨어</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="#!" >
                                        <span>
                                            키즈</span>
                                    </a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">키즈 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                EXCLUSIVE</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                여아</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                남아</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="#!">
                                        <span>
                                            잡화
                                        </span>
                                    </a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">잡화 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                EXCLUSIVE</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                여성신발</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                여성패션잡화</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                남성가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                키즈패션잡화</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                모자</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                여성가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                남성신발</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                남성패션잡화</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="#!">
                                        <span>
                                            라이프스타일</span>
                                    </a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">라이프스타일 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                홈/리빙</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                키친</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                펫</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                등산</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                데스크/가전/토이</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                뷰티</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                캠핑</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="#!">
                                        <span>
                                            골프</span>
                                    </a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">골프 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                남성 아우터</a>
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
                                                                여성 하의</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                골프 악세서리</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                남성 상의</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                남성 골프화</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                여성 상의</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                여성 골프화</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                골프 가방</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="#!">
                                        아울렛</a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu">
                                                <li className="depth2-menu-main">
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li><a href="#!">전체 메인</a></li>
                                                        <li><a href="#!" >여성</a></li>
                                                        <li><a href="#!" >남성</a></li>
                                                        <li><a href="#!" >키즈</a></li>
                                                        <li><a href="#!" >잡화</a></li>
                                                        <li><a href="#!" >라이프스타일</a></li>
                                                        <li><a href="#!" >골프</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div></div>
                                <div className="gnb-category">
                                    <a href="#!">
                                        H SHOP</a>
                                </div>
                                <div className="gnb-category">
                                    <a href="#!">
                                        편집샵</a>
                                </div>
                            </Styles.GnbMenu>
                            <Styles.GnbEtc className="gnb-etc">
                                <li>
                                    <a href="#!">
                                        브랜드</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        매거진</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        신상품</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        베스트</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        기획전</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        이벤트</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        라이브</a>
                                </li>
                                <li>
                                    <a href="#!">
                                        리뷰플러스</a>
                                </li>
                            </Styles.GnbEtc>
                        </div>
                    </div>
                </div>
            </Styles.Header>
        </>
    );
}

export default SubHeader;