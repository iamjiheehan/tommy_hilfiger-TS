import React, { useEffect } from "react";

import * as Styles from "./SubHeaderStyle";
import { Link, useNavigate } from "react-router-dom";

function SubHeader() {
    
    useEffect(() => {
        const target: HTMLElement | null = document.querySelector("header");

        const handleScroll = () => {
            const scrollValue = window.scrollY;

            if (target !== null) {
                if (scrollValue >= 77) {
                    target.classList.add("fixed");
                } else {
                    target.classList.remove("fixed");
                }
            }
        };

        // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너를 추가합니다.
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리하여 메모리 누수를 방지
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

        const navigate = useNavigate();
    
        let handleTabChange = (productId: string) => {
            navigate(`/product/${productId}`);
            console.log("subHeader 컴포넌트에서 보내는 " + productId);
        };

    return (
        <>
            <Styles.Header id="subheader">
                <header>
                    <div className="inner">
                        <div className="wrap">
                            <h1 className="logo">
                                <Link to={`/`}>
                                    <a href="javascript:void(0);">H FASHION</a>
                                </Link>
                            </h1>
                            <nav className="util">
                                <button className="btn-search">
                                    <span>버튼</span>
                                </button>
                                <span>
                                    <a href="javascript:void(0);">로그인</a>
                                </span>
                                <span>
                                    <a href="javascript:void(0);">회원가입</a>
                                </span>
                                <span>
                                    <a href="javascript:void(0);">마이페이지</a>
                                </span>
                                <span>
                                    <a href="javascript:void(0);">장바구니</a>
                                </span>
                            </nav>
                            <div className="clear"></div>
                        </div>
                        <div className="search">
                            <div className="inner">
                                <fieldset>
                                    <legend>검색</legend>
                                    <div className="search-field">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                title="검색어 입력"
                                                className="inp-reset"
                                                autoComplete="off"
                                            />
                                            <div className="etc">
                                                <button
                                                    type="button"
                                                    className="btn-clear"
                                                >
                                                    <span>지우기</span>
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn-search"
                                        >
                                            <span>검색</span>
                                        </button>
                                    </div>
                                </fieldset>
                                <div className="keyword-wrap">
                                    <div className="keyword-related"></div>
                                    <div className="keyword-list-wrap">
                                        <section className="keyword-recent"></section>
                                        <section className="keyword-hot">
                                            <h2 className="title">
                                                인기검색어
                                            </h2>
                                            <ul className="list"></ul>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-close">
                                닫기
                            </button>
                        </div>
                        <div id="gnb">
                            <div className="wrap">
                                <Styles.GnbMenu className="gnb-menu">
                                    <div className="gnb-category" onClick={() => handleTabChange("NW003")}>
                                        <a href="javascript:void(0);">
                                            <span>여성</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NM010")}>
                                        <a href="javascript:void(0);">
                                            <span>남성</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NK003")}>
                                        <a href="javascript:void(0);">
                                            <span>키즈</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NS002")}>
                                        <a href="javascript:void(0);">
                                            <span>잡화</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NG007")}>
                                        <a href="javascript:void(0);">
                                            <span>라이프스타일</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NG004")}>
                                        <a href="javascript:void(0);">
                                            <span>골프</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NT001")}>
                                        <a href="javascript:void(0);">
                                            <span>아울렛</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NT004")}>
                                        <a href="javascript:void(0);">
                                            <span>H SHOP</span>
                                        </a>
                                    </div>
                                    <div className="gnb-category" onClick={() => handleTabChange("NS006")}>
                                        <a href="javascript:void(0);">
                                            <span>편집샵</span>
                                        </a>
                                    </div>
                                </Styles.GnbMenu>
                                <Styles.GnbEtc className="gnb-etc">
                                    <li onClick={() => handleTabChange("NW003")}>
                                        <a href="javascript:void(0);">브랜드</a>
                                    </li>
                                    <li onClick={() => handleTabChange("NM010")}>
                                        <a href="javascript:void(0);">매거진</a>
                                    </li>
                                    <li onClick={() => handleTabChange("NS002")}>
                                        <a href="javascript:void(0);">신상품</a>
                                    </li>
                                    <li onClick={() => handleTabChange("NS006")}>
                                        <a href="javascript:void(0);">베스트</a>
                                    </li>
                                    <li onClick={() => handleTabChange("NG007")}>
                                        <a href="javascript:void(0);">기획전</a>
                                    </li>
                                    <li onClick={() => handleTabChange("NS006")}>
                                        <a href="javascript:void(0);">이벤트</a>
                                    </li>
                                    <li onClick={() => handleTabChange("NT004")}>
                                        <a href="javascript:void(0);">라이브</a>
                                    </li>
                                    <li onClick={() => handleTabChange("NS006")}>
                                        <a href="javascript:void(0);">리뷰플러스</a>
                                    </li>
                                </Styles.GnbEtc>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </header>
            </Styles.Header>
        </>
    );
}

export default SubHeader;
