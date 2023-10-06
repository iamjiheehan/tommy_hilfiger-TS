import React from 'react';

import * as Styles from '../SubHeader/SubHeaderStyle'

function SubHeader() {
    return (
        <>
            <header>
                <div className="header-inner">
                    <div className="header-wrap">
                        <h1 className="header-logo"><a href="/main">H FASHION</a></h1>
                        <nav className="header-util">
                            <button type="button" className="btn-search"><span>검색열기</span></button>
                            <span><a href="#!">로그인</a></span>
                            <span><a href="#!">회원가입</a></span>
                        </nav>
                        <div className="dp-header">

                            <div className="dp-header-btns">
                                <a href="/">홈</a>
                                <button type="button" className="btn-menu"><span>전체메뉴</span></button>
                            </div>

                            <h2 className="dp-header-logo">
                            </h2>
                        </div>
                    </div>
                    <div className="header-search">
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
                    <nav id="gnb">
                        <div className="header-wrap">
                            <div className="gnb-menu">
                                <div className="gnb-category">
                                    <a href="#!">
                                        <span>
                                            여성</span>
                                    </a>
                                    <div className="depth2">
                                        <div className="depth2-inner">
                                            <ul className="depth2-menu hide">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02">여성 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A17">
                                                                EXCLUSIVE</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A01">
                                                                티셔츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A04">
                                                                아우터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A06">
                                                                데님</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A09">
                                                                원피스</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A11">
                                                                가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A14">
                                                                수영복</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A16">
                                                                스포츠웨어</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02" cnryn="N">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A03">
                                                                니트/스웨터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A02">
                                                                셔츠/블라우스</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A05">
                                                                팬츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A08">
                                                                언더웨어</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A10">
                                                                스커트</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A12">
                                                                신발</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA02A15">
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
                                            <ul className="depth2-menu hide">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01">남성 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A18">
                                                                EXCLUSIVE</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A02">
                                                                셔츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A04">
                                                                아우터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A06">
                                                                데님</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A08">
                                                                언더웨어</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A10">
                                                                신발</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A13">
                                                                악세서리</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01" cnryn="N">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A01">
                                                                티셔츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A03">
                                                                니트/스웨터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A05">
                                                                팬츠</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A07">
                                                                수트정장</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A09">
                                                                가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A12">
                                                                수영복</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA01A14">
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
                                            <ul className="depth2-menu hide">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA03">키즈 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA03A03">
                                                                EXCLUSIVE</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA03A02">
                                                                여아</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA03" cnryn="N">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA03A01">
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
                                            <ul className="depth2-menu hide">
                                                <li>
                                                    <h3>카테고리</h3>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04">잡화 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A10">
                                                                EXCLUSIVE</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A01">
                                                                여성신발</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A03">
                                                                여성패션잡화</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A05">
                                                                남성가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A07">
                                                                키즈패션잡화</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04" cnryn="N">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A08">
                                                                모자</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A02">
                                                                여성가방</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A04">
                                                                남성신발</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA04A06">
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
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08">라이프스타일 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08A01">
                                                                홈/리빙</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08A02">
                                                                키친</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08A06">
                                                                펫</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08A08">
                                                                등산</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08" cnryn="N">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08A04">
                                                                데스크/가전/토이</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08A05">
                                                                뷰티</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA08A09">
                                                                캠핑</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="/display/category/list?dspCtgryNo=HFMA05" dspctgryno="HFMA05">
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
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05">골프 메인</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A01">
                                                                남성 아우터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A03">
                                                                남성 하의</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A05">
                                                                여성 아우터</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A07">
                                                                여성 하의</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A09">
                                                                골프 악세서리</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="depth2-menu-list01">
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05" cnryn="N">전체상품</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A02">
                                                                남성 상의</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A04">
                                                                남성 골프화</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A06">
                                                                여성 상의</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A08">
                                                                여성 골프화</a>
                                                        </li>
                                                        <li>
                                                            <a href="#!" onClick="goCategoryLink(this);" tp="CTGRY" dspctgryno="HFMA05A10">
                                                                골프 가방</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnb-category">
                                    <a href="/display/otltMain">
                                        아울렛</a>
                                    <div className="depth2">
                                        <div className="depth2-inner active">
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
                            </div>
                            <ul className="gnb-etc">
                                <li>
                                    <a href="/display/searchBrand">
                                        브랜드</a>
                                </li>
                                <li>
                                    <a href="/article/list">
                                        매거진</a>
                                </li>
                                <li>
                                    <a href="/display/newItem">
                                        신상품</a>
                                </li>
                                <li>
                                    <a href="/display/best">
                                        베스트</a>
                                </li>
                                <li>
                                    <a href="/special/list">
                                        기획전</a>
                                </li>
                                <li>
                                    <a href="/event/list">
                                        이벤트</a>
                                </li>
                                <li>
                                    <a href="/display/HLive">
                                        라이브</a>
                                </li>
                                <li>
                                    <a href="/review/reviewList">
                                        리뷰플러스</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default SubHeader;