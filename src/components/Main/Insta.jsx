import React from 'react';

import * as Styles from './MainStyle';

function Insta() {
    return (
        <div>
            <section id='insta'>
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">INSTAGRAM</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-insta" target="_blank">
                                <span className="text">@tommyhilfiger</span>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <div className="slide-container insta">
                        <ul className="swiper-wrapper">
                            <li className="swiper-item">
                                <button type="button" className="btn-popup" value="1">
                                    <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/377929315_835516981439575_4094441858562293023_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=QO8ctWWtXV8AX86q_pR&amp;_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfByIckuZYeWdUsezkdqSieZKxAIft81DLeNtw2Z7r74AA&amp;oe=650F08E1&amp;RS=336x336&amp;AR=0&amp;CS=336x336" alt="" />
                                </button>
                            </li>
                            <li className="swiper-item">
                                <button type="button" className="btn-popup" value="1">
                                    <img src="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/377929315_835516981439575_4094441858562293023_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=QO8ctWWtXV8AX86q_pR&amp;_nc_ht=scontent-nrt1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfByIckuZYeWdUsezkdqSieZKxAIft81DLeNtw2Z7r74AA&amp;oe=650F08E1&amp;RS=336x336&amp;AR=0&amp;CS=336x336" alt="" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Insta;