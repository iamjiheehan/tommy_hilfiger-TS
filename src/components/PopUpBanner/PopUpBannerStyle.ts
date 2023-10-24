import styled from "styled-components";

import backimg from "../../assets/images/popUpBanner.jpg";

import closeBtn from "../../assets/images/btn_topban_close.svg";

export const Container = styled.div`
    background-image: url(${backimg});

    position: relative;
    width: 100%;
    height: 50px;
    background-size: auto 50px;
    background-repeat: repeat-x;
    background-position: center;
    z-index: 1;

    .top-line-box {
        min-width: 1366px;
        max-width: 1920px;
        margin: auto;
    }

    .top-line-box a {
        display: block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: var(--topLineTextColor, #fff);
        font-size: 12px;
        letter-spacing: 0.02em;
        font-weight: 800;
        outline: none;
    }

    .btn-top-close {
        width: 30px;
        height: 30px;
        position: absolute;
        margin-top: -15px;
        top: 50%;
        right: 10px;
    }

    .btn-top-close::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        background: var(--topLineTextColor, #fff);
        -webkit-mask-image: url(${closeBtn});
        mask-image: url(${closeBtn});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 15px;
    }

    .btn-top-close span {
        font-size: 0;
        color: transparent;
        position: absolute;
        overflow: hidden;
        height: 1px;
        width: 1px;
        clip: rect(1px, 1px, 1px, 1px);
    }
`;
