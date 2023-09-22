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

export const BtnWrap = styled.div`
    position: absolute;
    /* left: 80px; */

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
    
        position: relative;
    }

    .btn-list::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background: #00174f;
        position: absolute;
        bottom: 0;
        left: 0;
        top:1px;
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

        &::after {
            content: "";
            position: absolute;
            top: 3px;
            left: 0;
            height: 10px;
            border-left: 1px solid #000;
        }

        &:first-of-type::after {
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

    position: relative;

    .header-main-gnb ul {
        display: flex;
        justify-content: center;
        margin: auto;
        list-style: none;
    }

    .header-main-gnb ul > li {
        display: block;
        margin: 0 5px;
        padding: 0 10px;
        letter-spacing: 0;
    }
`;

export const NewCategory = styled.div`


        position: absolute;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 10;

    .gnb-new-box {
        min-width: 1366px;
        max-width: 1920px;
        margin: auto;
        position: relative;
        padding: 0 80px;

    }

    .gnb-new-box .menu-contents {
        padding: 40px 0;
    }

    .gnb-new-box .menu-contents .brand-cate-wrap {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .gnb-new-box .menu-contents .brand-cate-wrap .brand-cate-list {
        width: 150px;
        margin-right: 20px;
    }

    .gnb-new-box .menu-contents .brand-cate-wrap .brand-cate-list li {
        /* padding-bottom: 16px; */
        padding-bottom: 8px;
    }

    .gnb-new-box .menu-contents .brand-cate-wrap .brand-cate-list li a {
        font-size: 13px;
        color: var(--themeTextColor);
        font-weight: 400;
        outline: none;
    }

    .gnb-new-box .menu-contents .brand-cate-wrap .brand-cate-list li:first-of-type a {
        font-weight: 600;
        
    }
`;

export const NewBrand = styled.div`
            position: absolute;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 10;

    .gnb-new-box {
        min-width: 1366px;
        max-width: 1920px;
        margin: auto;
        position: relative;
        padding: 0 80px;
    }
`;