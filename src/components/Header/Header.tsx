import React, { useEffect, useState } from 'react';

import * as Styles from './HeaderStyle';
// 이미지 임포트
import logo from '../../assets/images/header_logo.png'
import { Link, useNavigate } from 'react-router-dom';

function Header() {

    const [cateActive, setCateActive] = useState(false);
    const [brandActive, setBrandActive] = useState(false);

    const handleCateMouseEnter = () => {
        setCateActive(true);
    };

    const handleCateMouseLeave = () => {
        setCateActive(false);
    };

    const handleBrandMouseEnter = () => {
        setBrandActive(true);
    };

    const handleBrandMouseLeave = () => {
        setBrandActive(false);
    };

    useEffect(() => {
        const target = document.querySelector('header');

        const handleScroll = () => {
            const scrollValue = window.scrollY;

            if (scrollValue >= 77) {
                target?.classList.add('fixed');
            } else {
                target?.classList.remove('fixed');
            }
        };

        // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너를 추가.
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리하여 메모리 누수를 방지
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // 탭 상태 관리
    const [tab, setTab] = useState<number>(0);

    // 탭 활성화 함수
    function ActiveTab(index: number) {
        setTab(index);
    }

    const navigate = useNavigate();

    const handleTabChange = (index: number, tabId: string) => {
        // 먼저 탭 상태를 업데이트합니다.
        ActiveTab(index);
    
        if (index === 0) {
            // 'Main' 탭의 특수한 경우, 루트 경로로 이동
            navigate("/");
        } else {
            // 다른 탭의 경우, 'tabId'가 포함된 적절한 경로로 이동
            navigate(`/sub/${tabId}`);
        }
        console.log("tabId는 " + tabId);
    };
    
    return (
        <>
            <Styles.Header>
                <header className='header'>
                    <div className="inner">
                        <Styles.MainFlex>
                            <div className="header-new-logo">
                            <Link to={`/`}><Styles.Link href="javascript:void(0);">H FASHION</Styles.Link></Link>
                            </div>
                            <Styles.Absolute>
                                <h2 className="header-logo">
                                    <Link to={`/`}>
                                        <a href="javascript:void(0);">
                                            <img src={logo} alt="TOMMY HILFIGER" />
                                        </a>
                                    </Link>
                                </h2>
                            </Styles.Absolute>
                            <div className="header-util">
                                <button type="button" className="btn-search" id="btnSearchLayer"></button>
                                <span><Link to={'/cart'}><a href="javascript:void(0);">로그인</a></Link></span>
                                <span><Link to={'/cart'}><a href="javascript:void(0);">회원가입</a></Link></span>
                                <span><Link to={'/cart'}><a href="javascript:void(0);">마이페이지</a></Link></span>
                                <span><Link to={'/cart'}><a href="javascript:void(0);">장바구니</a></Link></span>
                            </div>
                        </Styles.MainFlex>
                        <Styles.GnbWrap className="header-gnb">
                            <Styles.BtnWrap >
                                <Styles.CustomBtn
                                    className='btn-list'
                                    type="button"
                                    onMouseEnter={handleCateMouseEnter}
                                    onMouseLeave={handleCateMouseLeave}
                                ><span>카테고리</span></Styles.CustomBtn>
                                <Styles.CustomBtn className='btn-list' 
                                    marginright="0"
                                    type="button"
                                    onMouseEnter={handleBrandMouseEnter}
                                    onMouseLeave={handleBrandMouseLeave}
                                ><span>브랜드</span></Styles.CustomBtn>
                            </Styles.BtnWrap>
                            <div className='header-main-gnb'>
                                <ul>
                                    <li className={tab === 0 ? "on" : ""} onClick={() => handleTabChange(0, "")}>
                                        <Link to="/">MAIN</Link>
                                    </li>
                                    <li className={tab === 1 ? "on" : ""} onClick={() => handleTabChange(1, "NM003")}>
                                        <Link to="/sub/NM003">MEN</Link>
                                    </li>
                                    <li className={tab === 2 ? "on" : ""} onClick={() => handleTabChange(2, "NW003")}>
                                        <Link to="/sub/NW003">WOMEN</Link>
                                    </li>
                                    <li className={tab === 3 ? "on" : ""} onClick={() => handleTabChange(3, "NT003")}>
                                        <Link to="/sub/NT003">TOMMY JEANS</Link>
                                    </li>
                                    <li className={tab === 4 ? "on" : ""} onClick={() => handleTabChange(4, "NK003")}>
                                        <Link to="/sub/NK003">KIDS</Link>
                                    </li>
                                    <li className={tab === 5 ? "on" : ""} onClick={() => handleTabChange(5, "NS003")}>
                                        <Link to="/sub/NS003">SHOES</Link>
                                    </li>
                                    <li className={tab === 6 ? "on" : ""} onClick={() => handleTabChange(6, "NG003")}>
                                        <Link to="/sub/NG003">GOLF</Link>
                                    </li>
                                </ul>
                            </div>
                        </Styles.GnbWrap>
                    </div>
                    <Styles.NewCategory>
                        {cateActive && (
                            <div className="gnb-new-box"
                                onMouseEnter={handleCateMouseEnter}
                                onMouseLeave={handleCateMouseLeave}>
                                <div className="menu-contents">
                                    <div className="brand-cate-wrap">
                                        <ul className="brand-cate-list">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여성</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    EXCLUSIVE</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    니트/스웨터</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    티셔츠</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    셔츠/블라우스</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    아우터</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    팬츠</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    데님</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    언더웨어</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    원피스</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    스커트</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    가방</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    신발</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    악세서리</a>
                                            </li>
                                        </ul>
                                        <ul className="brand-cate-list">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남성</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    EXCLUSIVE</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    티셔츠</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    셔츠</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    니트/스웨터</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    아우터</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    팬츠</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    데님</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    수트정장</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    언더웨어</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    가방</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    신발</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    악세서리</a>
                                            </li>
                                        </ul>
                                        <ul className="brand-cate-list">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    키즈</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    EXCLUSIVE</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남아</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여아</a>
                                            </li>
                                        </ul>
                                        <ul className="brand-cate-list">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    잡화</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    EXCLUSIVE</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    모자</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여성신발</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여성가방</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여성패션잡화</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남성신발</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남성가방</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남성패션잡화</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    키즈패션잡화</a>
                                            </li>
                                        </ul>
                                        <ul className="brand-cate-list">
                                            <li>
                                                <a href="javascript:void(0);;">
                                                    라이프스타일</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    펫</a>
                                            </li>
                                        </ul>
                                        <ul className="brand-cate-list">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    골프</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남성 아우터</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남성 상의</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    남성 하의</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여성 아우터</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여성 상의</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    여성 하의</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    골프 악세서리</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    골프 가방</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Styles.NewCategory>
                    <Styles.NewBrand>
                        {brandActive && (
                            <div className="gnb-new-box"
                                onMouseEnter={handleBrandMouseEnter}
                                onMouseLeave={handleBrandMouseLeave}
                            >
                                <div className="menu-contents">
                                    <Styles.BrandLine>
                                        <a href="javascript:void(0);" className="btn-brand-line">
                                            <div className="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_7_KOR_20230712043648.jpg?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                            <div className="title">MAIN</div>
                                        </a>
                                        <a href="javascript:void(0);" className="btn-brand-line">
                                            <div className="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_1_KOR_20230906182644.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                            <div className="title">MEN</div>
                                        </a>
                                        <a href="javascript:void(0);" className="btn-brand-line">
                                            <div className="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_2_KOR_20230906182653.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                            <div className="title">WOMEN</div>
                                        </a>
                                        <a href="javascript:void(0);" className="btn-brand-line">
                                            <div className="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_3_KOR_20230906182702.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                            <div className="title">JEANS</div>
                                        </a>
                                        <a href="javascript:void(0);" className="btn-brand-line">
                                            <div className="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_5_KOR_20230906164555.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                            <div className="title">KIDS</div>
                                        </a>
                                        <a href="javascript:void(0);" className="btn-brand-line">
                                            <div className="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_4_KOR_20230906182350.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                            <div className="title">SHOES</div>
                                        </a>
                                        <a href="javascript:void(0);" className="btn-brand-line">
                                            <div className="img"><img src="https://cdn.hfashionmall.com/display/category/THM/A18/A01/contents/741_202767_6_KOR_20230906164615.png?RS=242x242&amp;AR=0&amp;CS=242x90" alt="" /></div>
                                            <div className="title">GOLF</div>
                                        </a>
                                    </Styles.BrandLine>
                                    <Styles.BrandSearch>
                                        <div className="brand-search-container">
                                            <fieldset className="brand-search-header">
                                                <legend>검색</legend>
                                                <div className="input-info-group brand-search-field">
                                                    <div className="input-box">
                                                        <input type="text" name="brandSearch" id="brandSearch" title="브랜드 검색" placeholder="브랜드를 입력하세요." className="inp-reset inp-search" autoComplete="off" />
                                                    </div>
                                                    <button type="button" className="btn-search"><span>검색</span></button>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="brand-search-cont">
                                            <div className="btnTab">
                                                <div className="btn btn-all" id="searchTabList">
                                                    <button type="button" id="searchMyBrnd"><span>MY</span></button>
                                                    <button type="button" id="searchTotalBrnd" className="on"><span>전체</span></button>
                                                </div>
                                                <div className="btn btn-alphabet" id="searchAlphabetList">
                                                    <button type="button"><span>A</span></button>
                                                    <button type="button"><span>B</span></button>
                                                    <button type="button"><span>C</span></button>
                                                    <button type="button"><span>D</span></button>
                                                    <button type="button"><span>E</span></button>
                                                    <button type="button"><span>F</span></button>
                                                    <button type="button"><span>G</span></button>
                                                    <button type="button"><span>H</span></button>
                                                    <button type="button"><span>I</span></button>
                                                    <button type="button"><span>J</span></button>
                                                    <button type="button"><span>K</span></button>
                                                    <button type="button"><span>L</span></button>
                                                    <button type="button"><span>M</span></button>
                                                    <button type="button"><span>N</span></button>
                                                    <button type="button"><span>O</span></button>
                                                    <button type="button"><span>P</span></button>
                                                    <button type="button"><span>R</span></button>
                                                    <button type="button"><span>S</span></button>
                                                    <button type="button"><span>T</span></button>
                                                    <button type="button"><span>U</span></button>
                                                    <button type="button"><span>V</span></button>
                                                    <button type="button"><span>W</span></button>
                                                    <button type="button"><span>X</span></button>
                                                    <button type="button"><span>Y</span></button>
                                                    <button type="button"><span>Z</span></button>
                                                    <button type="button"><span>0~9</span></button>
                                                </div>
                                            </div>
                                            <div className="list-container">
                                                <p className="list-nodata">
                                                    관심있는 브랜드에 하트를 눌러 보세요!
                                                </p>
                                            </div>
                                            <div className="list-container brand-list-scroll-box">
                                                <Styles.SearchList>
                                                    <div className="alphabet-wrap">
                                                        <h3 className="title">한섬 공식 브랜드</h3>
                                                    </div>
                                                    <div className="brand-wrap">
                                                        <ul className="brand-list" id="brandSearchList">
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            TOMMY HILFIGER<br />
                                                                            <span className="name-ko">타미힐피거</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            TOMMY JEANS<br />
                                                                            <span className="name-ko">타미진스</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CLUB MONACO<br />
                                                                            <span className="name-ko">클럽모나코</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            DKNY<br />
                                                                            <span className="name-ko">디케이앤와이</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ck Calvin Klein<br />
                                                                            <span className="name-ko">CK 캘빈클라인</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            OUR LEGACY<br />
                                                                            <span className="name-ko">아워레가시</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            VERONICA BEARD<br />
                                                                            <span className="name-ko">베로니카 비어드</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ASPESI<br />
                                                                            <span className="name-ko">아스페시</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            SJYP<br />
                                                                            <span className="name-ko">에스제이와이피</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            rouge＆lounge<br />
                                                                            <span className="name-ko">루즈앤라운지</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            TOM GREYHOUND<br />
                                                                            <span className="name-ko">톰그레이하운드</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            MUE<br />
                                                                            <span className="name-ko">무이</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            FOURM THE STORE<br />
                                                                            <span className="name-ko">폼더스토어</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            FOURM STUDIO<br />
                                                                            <span className="name-ko">폼스튜디오</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            FOURM LOUNGE<br />
                                                                            <span className="name-ko">폼 라운지</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BALLY<br />
                                                                            <span className="name-ko">발리</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            MOOSE KNUCKLES<br />
                                                                            <span className="name-ko">무스너클</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            LANVIN PARIS<br />
                                                                            <span className="name-ko">랑방 파리</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            3.1 Phillip Lim<br />
                                                                            <span className="name-ko">필립림</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Styles.SearchList>
                                                <Styles.SearchList id="lowBrandSearchList">
                                                    <div className="alphabet-wrap">
                                                        <h3 className="title">A</h3>
                                                    </div>
                                                    <div className="brand-wrap">
                                                        <ul className="brand-list">
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ACC ART BOOKS<br />
                                                                            <span className="name-ko">에이씨씨 아트 북스 by FOURM LOUNGE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ADIDAS<br />
                                                                            <span className="name-ko">아디다스 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ADIDAS<br />
                                                                            <span className="name-ko">아디다스 by FOURM LOUNGE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ADIDAS<br />
                                                                            <span className="name-ko">아디다스 by MUE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AGOLDE<br />
                                                                            <span className="name-ko">에이골디 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AGOLDE<br />
                                                                            <span className="name-ko">에이골디 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AGOLDE<br />
                                                                            <span className="name-ko">에이골디 by MUE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AGOLDE<br />
                                                                            <span className="name-ko">에이골디 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AJE<br />
                                                                            <span className="name-ko">에이지 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AKIRA NAKA<br />
                                                                            <span className="name-ko">아키라 나까 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ALCHEMIST<br />
                                                                            <span className="name-ko">알케미스트 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ALDO<br />
                                                                            <span className="name-ko">알도</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ALEMAIS<br />
                                                                            <span className="name-ko">알레메 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ALIGHIERI<br />
                                                                            <span className="name-ko">알리기에리 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ALIITA<br />
                                                                            <span className="name-ko">알리타 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            allegri<br />
                                                                            <span className="name-ko">알레그리</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ALLUDE<br />
                                                                            <span className="name-ko">얼루드 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ALMOST BLACK<br />
                                                                            <span className="name-ko">올모스트 블랙 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            American Needle<br />
                                                                            <span className="name-ko">아메리칸 니들</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AMOMENTO<br />
                                                                            <span className="name-ko">아모멘토 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ANDERSON`S<br />
                                                                            <span className="name-ko">앤더슨즈 by FOURM LOUNGE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ANINE BING<br />
                                                                            <span className="name-ko">애니빙 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            Antichi Romani<br />
                                                                            <span className="name-ko">안치티 로마니</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            A POINT<br />
                                                                            <span className="name-ko">에이포인트 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ARENA<br />
                                                                            <span className="name-ko">아레나</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ARIES<br />
                                                                            <span className="name-ko">에리즈 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ARIES ARISE<br />
                                                                            <span className="name-ko">에이리스 어라이즈 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ATLANTIQUE ASCOLI<br />
                                                                            <span className="name-ko">아트란틱 아스콜리 by MUE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            ATM<br />
                                                                            <span className="name-ko">에이티엠 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AUTOMATIC FOR THE PEOPLE<br />
                                                                            <span className="name-ko">오토매틱포더피플 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AUTRY<br />
                                                                            <span className="name-ko">오트리 by MUE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AUTRY<br />
                                                                            <span className="name-ko">오트리 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            AVN<br />
                                                                            <span className="name-ko">에이브이엔 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="alphabet-wrap">
                                                        <h3 className="title">B</h3>
                                                    </div>
                                                    <div className="brand-wrap">
                                                        <ul className="brand-list">
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BARACUTA<br />
                                                                            <span className="name-ko">바라쿠타 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BAUM UND PFERDGARTEN<br />
                                                                            <span className="name-ko">바움 운드 페르트가르텐 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BEARBRICK<br />
                                                                            <span className="name-ko">베어브릭 by FOURM LOUNGE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BED J.W. FORD<br />
                                                                            <span className="name-ko">베드 JW 포드 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BEMBIEN<br />
                                                                            <span className="name-ko">벰비앙 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BEMBIEN<br />
                                                                            <span className="name-ko">벰비앙 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BENSIMON<br />
                                                                            <span className="name-ko">벤시몽</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            Bleu de Chauffe<br />
                                                                            <span className="name-ko">블루드쇼프</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BLUEHOUR<br />
                                                                            <span className="name-ko">블루아워 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BODE<br />
                                                                            <span className="name-ko">보드 by MUE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BONFANTI<br />
                                                                            <span className="name-ko">본판티 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BONNE MAISON<br />
                                                                            <span className="name-ko">본 메종 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BORNN<br />
                                                                            <span className="name-ko">본에나멜웨어 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            BOSS<br />
                                                                            <span className="name-ko">보스</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            B SIDES<br />
                                                                            <span className="name-ko">비 사이드 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="alphabet-wrap">
                                                        <h3 className="title">C</h3>
                                                    </div>
                                                    <div className="brand-wrap">
                                                        <ul className="brand-list">
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CA4LA<br />
                                                                            <span className="name-ko">카시라 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CA4LA<br />
                                                                            <span className="name-ko">카시라 by FOURM LOUNGE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            Calvin Klein<br />
                                                                            <span className="name-ko">캘빈클라인</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CAMPER LAB<br />
                                                                            <span className="name-ko">캠퍼랩 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CASEY CASEY<br />
                                                                            <span className="name-ko">케세이 케세이 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like" ><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CATERINA BERTINI<br />
                                                                            <span className="name-ko">카테리나 베르티니 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CFCL<br />
                                                                            <span className="name-ko">씨에프씨엘 by MUE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CHILDREN OF THE DISCORDANCE<br />
                                                                            <span className="name-ko">칠드런오브더디스코던스 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CHINTI AND PARKER<br />
                                                                            <span className="name-ko">친티앤파커 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            Chums<br />
                                                                            <span className="name-ko">첨스</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CITIZENS OF HUMANITY<br />
                                                                            <span className="name-ko">시티젠스 오브 휴머니티 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            COLE COLE<br />
                                                                            <span className="name-ko">꼴레꼴레 by FOURM LOUNGE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            COLE HAAN<br />
                                                                            <span className="name-ko">콜한</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            Coleman<br />
                                                                            <span className="name-ko">콜맨</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            COLLINA STRADA<br />
                                                                            <span className="name-ko">콜리나 스트라다 by FOURM THE STORE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            COMPLETED WORKS<br />
                                                                            <span className="name-ko">컴플리티드 웍스 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            COURREGES<br />
                                                                            <span className="name-ko">꾸레쥬 by MUE</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CRYSTAL HAZE<br />
                                                                            <span className="name-ko">크리스탈 헤이즈 by FOURM STUDIO</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="wrap">
                                                                    <button type="button" className="btn-like"><span>좋아요</span></button>
                                                                    <div className="brand-name">
                                                                        <a href="javascript:void(0);">
                                                                            CURVES<br />
                                                                            <span className="name-ko">커브즈 바이 션 브라운 by TOM GREYHOUND</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Styles.SearchList>
                                            </div>
                                        </div>
                                    </Styles.BrandSearch>
                                </div>
                            </div>
                        )}
                    </Styles.NewBrand>
                </header>
            </Styles.Header>
        </>
    );
}

export default Header;

