import React, { useState } from 'react';

import * as Styles from './PopUpBannerStyle';


function PopUpBanner() {

    const [modalOpen, setModalOpen] = useState(true);
    const modalClose = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            {modalOpen && (
                <Styles.Container className='container'>
                    <div className="top-line-box">
                        <a href="#!">
                            가족보다 더 가족 같은 사이, 스트레이 키즈와 타미힐피거의 ‘Always together’ 캠페인</a>
                        <button type="button"
                            className="btn-top-close"
                            onClick={modalClose}
                        ><span>닫기</span></button>
                    </div>
                </Styles.Container>
            )}
        </>
    );
}

export default PopUpBanner;