import React from 'react';
import HeaderIcon from './HeaderStyle';

function Header() {
    return (
        <div>
            <header className='header'>
                <div className="header_inner">
                    <div className="header-wrap">
                        <h1 className="header-new-logo">
                            <HeaderIcon href="#"></HeaderIcon>
                        </h1>
                        <nav className="header-util">
                            <button type="button" className="btn-search" id="btnSearchLayer"><span>검색열기</span></button>
                            <span><a href="#!">로그인</a></span>
                            <span><a href="#!">회원가입</a></span>
                        </nav>
                        <div id="layerSimpleGnb" className="layer-pop">
                            <div className="layer-wrap">
                                <div className="layer-header">
                                    <h2 className="layer-title">H FASHION 간편가입 안내</h2>
                                </div>
                                <div className="layer-container">
                                    <div className="layer-content">
                                        <div className="page-info">
                                            <p className="txt-type2">현재 회원님은 H.Point 회원입니다.</p>
                                            <p className="txt-type1">H.Point 통합회원 정보로 H FASHION 회원가입이 가능합니다.<br /> 단, H FASHION 가입 확인을 위해 아래의 정보로 조회가 진행됩니다.<br /> 동의하시면 회원가입 해주시기 바랍니다.</p>
                                        </div>
                                        <p className="txt-simple-info">조회정보 : 이름, 휴대폰번호, 생년월일, CI</p>
                                        <div className="btn-box">
                                            <button type="button" className="btn-type4-lg"><span>취소</span></button>
                                            <a href="#!" className="btn-type2-lg" title="새창으로 열림">간편가입</a>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn-layer-close">닫기</button>
                            </div>
                        </div>
                        <div id="layerPwGnb" className="layer-pop">
                            <div className="layer-wrap">
                                <div className="layer-header">
                                    <h2 className="layer-title">H.POINT 통합 멤버십 비밀번호 변경</h2>
                                </div>
                                <div className="layer-container">
                                    <div className="layer-content">
                                        <div className="page-info">
                                            <p className="txt-type2">H.Point 통합 멤버십<br /> 비밀번호 변경 대상 회원입니다.<br /> 비밀번호를 변경해주세요.</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <button type="button" className="btn-type4-lg"><span>다음에 변경</span></button>
                                        <a href="#!" className="btn-type2-lg">비밀번호 변경</a>
                                    </div>
                                </div>
                                <button type="button" className="btn-layer-close">닫기</button>
                            </div>
                        </div>
                        <div className="dp-header">
                            <div className="dp-header-btns">
                                <a href="/main">홈</a>
                                <button type="button" className="btn-menu"><span>전체메뉴</span></button>
                            </div>
                            <h2 className="dp-header-logo">
                                <a href="/display/brand?brndCtgryNo=BDMA08">
                                    <img src="https://cdn.hfashionmall.com/goods/THBR/689309255928026.png" alt="TOMMY HILFIGER" />
                                </a>
                            </h2>
                            <h2 className="dp-header-logo"><a href="#!"><img src="../resources/images/img_brand_th.png" alt="브랜드명" /></a></h2>
                            <h2 className="dp-header-logo"><a href="#!">SHOES COLLECTION</a></h2>
                            <h2 className="dp-header-logo"><a href="#!">OUTLET</a></h2>
                            <nav className="dp-header-gnb" value="BDMA08">
                                <ul>
                                    <li className="on">
                                        <a href="/display/brand?brndCtgryNo=BDMA08">MAIN</a>
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
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;

