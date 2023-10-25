import React, { useState } from "react";
import * as Styles from "./MainStyle";
import sectionData from "../../data/firstSection.json";

// 섹션 데이터에 대한 타입 정의
interface SectionData {
    people: Array<{ img: string; title: string }>;
    icon: Array<{ img: string; title: string }>;
}

function MainCategory() {
    const data: SectionData = sectionData[0];

    const [active, setActive] = useState<number>(0);

    // 탭을 변경하는 함수
    const trigger = (value: number) => {
        setActive(value);
    };

    return (
        <div>
            <section id="first">
                <Styles.Container>
                    <div className="content-wrap">
                        <Styles.BrandTab className="brand-line-tab">
                            <button
                                type="button"
                                onClick={() => trigger(0)}
                                className={active === 0 ? "on" : ""}
                            >
                                <span>CATEGORY</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => trigger(1)}
                                className={`${
                                    active === 1 ? "on" : ""
                                } btn_line-before`}
                            >
                                <span>DISCOVER</span>
                            </button>
                        </Styles.BrandTab>
                        <div
                            className={`brand-line-cont tab-cont2 ${
                                active === 0 ? "on" : ""
                            }`}
                        >
                            <ul className="brand-line-list">
                                {data.people.map((item, index) => (
                                    <li className="brand-line-item" key={index}>
                                        <a href="#!" className="link-item">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/${item.img}`}
                                                alt={item.title}
                                            />
                                            <span className="text">
                                                {item.title}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {active === 1 && (
                                <ul className="brand-line-list">
                                    {data.icon.map((item, index) => (
                                        <li
                                            className="brand-line-item"
                                            key={index}
                                        >
                                            <a href="#!" className="link-item">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/${item.img}`}
                                                    alt={item.title}
                                                />
                                                <span className="text">
                                                    {item.title}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default MainCategory;
