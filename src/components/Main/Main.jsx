import React from 'react';

import * as Styles from './MainStyle';


import MainBanner1 from  '../../assets/images/main_banner-1.jpg'

function Main() {
    return (
        <>
            <section>
                <Styles.Box>
                    <Styles.Banner className="img">
                        <a href="#!">
                            <img src={MainBanner1} alt="MainBanner1" />
                        </a>
                    </Styles.Banner>
                    <Styles.Text className="str" href="#!">
                        <span className="etc">
                            TOMMY HILFIGER X TOMMY JEANS
                        </span>
                        <strong className="title">가을 니트 맛집, 타미힐피거</strong>
                        <span className="sub">ALL-TIME ESSENTIALS</span>
                        <Styles.ViewMore><span className='view-text'>VIEW MORE</span></Styles.ViewMore>
                    </Styles.Text>
                </Styles.Box>
            </section>
        </>
    );
}

export default Main;