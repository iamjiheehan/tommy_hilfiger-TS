import React, { useState } from 'react';
import * as Styles from './MainStyle';
import sectionData from '../../data/firstSection.json';

function MainCategory() {

    const data = sectionData[0];

    //탭 활성화 
    const [active, setActive] = useState(0);
    function ActiveTab(index:number) {
        setActive(index);
    }

    return (
        <div>
            <section id='first'>
                <Styles.Container>
                    <div className="content-wrap">
                        <Styles.BrandTab className="brand-line-tab">
                        <button type="button" onClick={() => ActiveTab(0)} className={active === 0 ? 'on' : ''}><span>CATEGORY</span></button>
                            <button type="button" onClick={() => ActiveTab(1)} className={`${active === 1 ? 'on' : ''} btn_line-before`}><span>DISCOVER</span></button>
                        </Styles.BrandTab>
                        <Styles.BrandContent
                            className={`brand-line-cont tab-cont2 ${active === 0 ? 'on' : ''}`}>
                            <ul className="brand-line-list">
                                {data.people.map((item, index) => (
                                    <li className="brand-line-item" key={index}>
                                        <a href="javascript:void(0);" className="link-item">
                                            <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.title} />
                                            <span className="text">{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="brand-line-list">
                                {data.icon.map((item, index) => (
                                    <li className="brand-line-item" key={index}>
                                        <a href="javascript:void(0);" className="link-item">
                                            <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.title} />
                                            <span className="text">{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Styles.BrandContent>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default MainCategory;