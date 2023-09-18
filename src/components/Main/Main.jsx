import React from 'react';

import * as Styles from './MainStyle';


import MainBanner1 from  '../../assets/images/main_banner-1.jpg'

function Main() {
    return (
        <>
            <section>
                <Styles.Banner className="img">
                    <a href="#!">
                        <img src={MainBanner1} alt="MainBanner1" />
                    </a>
                </Styles.Banner>
                <div className="str">
                    <a href="#!">
                        <span className="etc">
                            <span>TOMMY HILFIGER X TOMMY JEANS</span>
                        </span>
                        <strong className="tit">가을 니트 맛집, 타미힐피거</strong>
                        <span className="sub">ALL-TIME ESSENTIALS</span>
                        <p className="txt-viewmore"><span>VIEW MORE</span></p>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Main;