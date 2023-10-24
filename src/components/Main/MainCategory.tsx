import React, { useState } from 'react';
import * as Styles from './MainStyle';
import sectionData from '../../data/firstSection.json';

function MainCategory() {

    const data = sectionData[0];
    
    const [active, setActive] = useState(0);

    const trigger = (value)=>{
        setActive(value);
    };

    return (
        <div>
            <section id='first'>
                <Styles.Container>
                    <div className="content-wrap">
                        <Styles.BrandTab className="brand-line-tab">
                        <button type="button" onClick={() => trigger(0)} className={active === 0 ? 'on' : ''}><span>CATEGORY</span></button>
                            <button type="button" onClick={() => trigger(1)} className={`${active === 1 ? 'on' : ''} btn_line-before`}><span>DISCOVER</span></button>
                        </Styles.BrandTab>
                        <Styles.BrandContent 
                            className={`brand-line-cont tab-cont2 ${active === 0 ? 'on' : ''}`} 
                            active={active === 1}>
                                {/* active={active === 1}: 이 부분은 컴포넌트에 active라는 props를 전달하는 부분 */}
                                {/* active props는 현재 어떤 탭이 활성화되어 있는지 나타내기 위해 사용됨. */}
                                {/* active 변수가 1일 때 ('Discover' 탭이 활성화된 상태) active props에 true가 전달됨. */}
                            <ul className="brand-line-list">
                                {data.people.map((item, index) => (
                                    <li className="brand-line-item" key={index}>
                                        <a href="#!" className="link-item">
                                            <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.title} />
                                            <span className="text">{item.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="brand-line-list" active={!active}>
                                {data.icon.map((item, index) => (
                                    <li className="brand-line-item" key={index}>
                                        <a href="#!" className="link-item">
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
