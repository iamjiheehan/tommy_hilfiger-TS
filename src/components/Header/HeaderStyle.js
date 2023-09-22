import styled from "styled-components";

import searchImg from "../../assets/images/icon_search_br.svg";
import arrowIcon from "../../assets/images/ico_arrow_link.svg";

export const Link = styled.a`
    display: inline-block;
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    padding-right: 9px;
    position: relative;
    margin-top: 50px;
    z-index: 2;

    &::after {
        width: 6px;
        height: 9px;
        background: #00174f;
        -webkit-mask-image: url(${arrowIcon});
        mask-image: url(${arrowIcon});

        display: inline-block;
        content: "";
        position: absolute;
        right: -8px;
        top: 3px;
    }
`;
export const DivCategory = styled.div`
    position: absolute;
    top: -34px;
    left: 80px;
`;

export const Absolute = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;

    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const BtnList = styled.div`
    position: absolute;
    left: 80px;

    span {
        font-size: 15px;
        font-weight: 400;
        color: #00174f;
    }

    .btn-list {
        cursor: pointer;

        background: transparent;
        display: inline-block;
        padding-bottom: 16px;
        margin-right: ${(props) => props.marginright || "30px"};
    }
`;

export const MainFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    span {
        position: relative;
        display: inline-block;
        margin-left: 12px;
        padding-left: 12px;
        color: #000;
        line-height: 16px;
        font-size: 13px;
        vertical-align: middle;

        &::after{
            content: "";
            position: absolute;
            top: 3px;
            left: 0;
            height: 10px;
            border-left : 1px solid #000;
        }

        &:first-of-type::after{
            opacity: 0;
        }
    }

    .header-new-logo {
        height: 120px;
        text-align: center;
    }

    .btn-search {
        background-image: url(${searchImg});
        width: 24px;
        height: 24px;
        font-size: 0;
        vertical-align: middle;
        position: relative;
        margin-right: 2px;
        background-color: transparent;
    }
`;

export const GnbWrap = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 300;
    text-align: center;

    padding-bottom: 16px;
    letter-spacing: 0;
    min-width: 1286px;
    max-width: 1920px;
    margin: auto;

    ul {
        display: flex;
        justify-content: center;
        margin: auto;
        list-style: none;
    }

    ul > li {
        display: block;
        margin: 0 5px;
        padding: 0 10px;
        letter-spacing: 0;
    }
`;
