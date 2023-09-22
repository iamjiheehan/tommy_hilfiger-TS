import React from 'react';

import * as Styles from './FooterStyle';

function Footer() {
    return (
        <>
            <Styles.FooterWrap>
                <div className="inner">
                    <p className="logo">현대백화점 그룹 공식 패션몰</p>
                    <div className="familysite"></div>
                    <div className="link"></div>
                    <div className="info"></div>
                    <div className="copy"></div>
                </div>
            </Styles.FooterWrap>
        </>
    );
}

export default Footer;