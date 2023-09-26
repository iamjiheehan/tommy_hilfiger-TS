import React from 'react';

import * as Styles from './MainStyle';

function Coupon() {
    return (
        <div>
            <section id='coupon'>
                <Styles.CouponBanner>
                    <a href="#!" className="link-banner">
                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/760_203151_3_KOR_20230823102444.jpg?RS=1920x1920&amp;AR=0&amp;CS=1920x180" alt="" />
                        <div className="text-box">
                            <p className="text">TOMMY 23SS SEASON OFF</p>
                            <p className="sub-text">최대 49% OFF + 추가 쿠폰 혜택</p>
                        </div>
                    </a>
                </Styles.CouponBanner>
            </section>
        </div>
    );
}

export default Coupon;