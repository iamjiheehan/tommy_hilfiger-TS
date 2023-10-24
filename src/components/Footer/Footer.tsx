import React, { useState } from 'react';

import * as Styles from './FooterStyle';

function Footer() {
    const [isOpen, setMenu] = useState<boolean>(false); // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu((prevIsOpen) => !prevIsOpen); // on,off 개념 boolean
    }

    return (
        <>
            <Styles.FooterWrap>
                <div className="inner">
                    <p className="logo"></p>
                    <Styles.FamilySite>
                        <button type="button" className={`btn ${isOpen ? 'active' : ''}`}
                            onClick={toggleMenu}>FAMILY SITE</button>
                        <div className={`list ${isOpen ? 'active' : ''}`}>
                            <p>
                                쇼핑몰 사이트
                            </p>
                            <ul>
                                <li><a href="#!" target="_blank" title="새창으로 열림">더현대닷컴</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대백화점 DUTY FREE</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">e슈퍼마켓</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대Hmall</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대리바트몰</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대렌탈케어</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">더한섬닷컴</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">EQL</a></li>
                            </ul>
                            <p>
                                관계사 사이트
                            </p>
                            <ul>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대백화점그룹</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대백화점</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대그린푸드</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대홈쇼핑</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대리바트몰</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">㈜현대H&amp;S</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대렌탈케어</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대드림투어</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">에버다임</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">씨엔에스푸드시스템</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대케이터링시스템</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대IT&amp;E</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">현대이지웰</a></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">한섬</a></li>
                            </ul>
                        </div>
                    </Styles.FamilySite>
                    <Styles.Link>
                        <div className="box">
                            <p className="title">ABOUT</p>
                            <ul className="list">
                                <li><a href="#!">회사소개</a></li>
                                <li><a href="#!">매장안내</a></li>
                                <li><a href="#!">고객센터</a></li>
                                <li><button type="button">이용약관</button></li>
                                <li><a href="#!" target="_blank" title="새창으로 열림">ESG</a></li>
                            </ul>
                        </div>
                        <div className="box">
                            <p className="title">HELP</p>
                            <ul className="list">
                                <li>
                                    <a href="#!">회원혜택</a>
                                </li>
                                <li><a href="#!">한섬 VVIP 혜택</a></li>
                                <li><button><strong className="privacy">개인정보처리방침</strong></button></li>
                                <li><a href="#!">고객의 소리</a></li>
                            </ul>
                        </div>
                        <div className="sns">
                            <ul>
                                <li className="facebook"><a href="#!" target="_blank">Facebook</a></li>
                                <li className="post"><a href="#!" target="_blank">Post</a></li>
                                <li className="insta"><a href="#!" target="_blank">Instagram</a></li>
                            </ul>
                        </div>
                    </Styles.Link>
                    <Styles.Info>
                        <p>(주)한섬<br />서울특별시 강남구 도산대로 523(청담동)
                            <br />대표이사 : 김민덕
                            <br />사업자등록번호 : 120-81-26337
                            <br />통신판매업신고 : 제 2009-서울강남-00826 호
                            <br />개인정보보호책임자 : 윤인수
                            <br />호스팅서비스 : (주)한섬
                            <a href="#!" target="_blank">사업자정보확인</a>
                            <button>채무지급보증안내</button>
                        </p>
                        <p className="contact">
                            <span>전화 1800-5700(유료)</span>
                            <span>팩스 02-476-8169</span>
                            <span>이메일
                                <a href="#!">hfashionmall@hyundaihmall.com</a>
                            </span>
                        </p>
                    </Styles.Info>
                    <Styles.Copy>
                        <small>COPYRIGHT 2023 HANDSOME CO.LTD.ALL RIGHTS RESERVED</small>
                        <p className="brand">
                            H FASHION은 루즈앤라운지, SJYP, 타미힐피거, CK캘빈클라인, DKNY, CLUB MONACO, TOM GREYHOUND, FOURM THE STORE, FOURM STUDIO, FOURM MEN'S LOUNGE, MUE,<br /> OUR LEGACY, ASPESI, VERONICA BEARD, MOOSE KNUCKLES, BALLY, LANVIN PARIS, 3.1 PHILLIP LIM의 공식 온라인몰이며, 정품만 취급합니다.
                        </p>
                    </Styles.Copy>
                </div>
            </Styles.FooterWrap>
        </>
    );
}

export default Footer;