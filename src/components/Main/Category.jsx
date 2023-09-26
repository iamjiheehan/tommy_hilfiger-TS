import React from 'react';

import * as Styles from './MainStyle';

function Category() {
    return (
        <div>
            <section id='categories'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">MORE CATEGORIES</h2>
                    </Styles.NewTitle>
                    <Styles.MoreContent>
                        <div className="slide-container">
                            <ul className="swiper-wrapper">
                                <li className="swiper-item">
                                    <a href="#!" className="link-item">
                                        <img src="https://cdn.hfashionmall.com/display/category/BDM/A08/contents/752_203145_1_KOR_20230906171304.jpg?RS=593x593&amp;AR=0&amp;CS=425x593" alt="" />
                                        <span className="text">남성 아우터</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="slide-nav">
                                <button className="slide-nav-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next">
                                    <span className="offscreen"></span>
                                </button>
                            </div>
                        </div>
                    </Styles.MoreContent>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Category;