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
        top: 1px;
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

    .gnb-new-box
        .menu-contents
        .brand-cate-wrap
        .brand-cate-list
        li:first-of-type
        a {
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

    .gnb-new-box .menu-contents {
        padding: 40px 0;
    }

    .gnb-new-box .menu-contents .brand-line-wrap {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
    }

    .gnb-new-box .menu-contents .brand-line-wrap .btn-brand-line {
        position: relative;
        display: inline-block;
        flex: 0 1 242px;
    }

    .gnb-new-box
        .menu-contents
        .brand-line-wrap
        .btn-brand-line
        + .btn-brand-line {
        margin-left: 11px;
    }

    .gnb-new-box .menu-contents .brand-line-wrap .btn-brand-line img {
        width: 100%;
        height: 90px;
        object-fit: cover;
        border: 1px solid #eaeaea;
    }

    .gnb-new-box .menu-contents .brand-line-wrap .btn-brand-line .title {
        position: relative;
        color: var(--themeTextColor);
        font-size: 15px;
        font-weight: 700;
        line-height: 21px;
        display: inline-block;
        width: 100%;
        margin-top: 20px;
        text-align: center;
    }

    .brand-search-container {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        z-index: 2;
    }

    .gnb-new-box .menu-contents .brand-line-search-wrap {
        padding-top: 15px;
    }

    .gnb-new-box .menu-contents .brand-line-search-wrap .bs-list-container.brand-list-scroll-box {
        position: relative;
        margin-top: 20px;
        padding-top: 40px;
        border-top: 1px solid #e5e5e5;
    }

    .gnb-new-box .menu-contents .brand-line-search-wrap .brand-search-header {
        width: 690px;
        margin: 0 auto;
    }

    .gnb-new-box
        .menu-contents
        .brand-line-search-wrap
        .brand-search-header
        .brand-search-field {
        margin-top: 25px;

        padding-left: 30px;
        /* padding-left: 40px; */

        overflow: hidden;
        position: relative;
        height: 60px;
        padding-right: 69px;
        border: none;
        border-radius: 3px;
        background-color: #fafafa;

        .btn-search {
            position: absolute;
            top: 9px;
            right: 15px;
            width: 54px;
            height: 42px;
            /* font-size: 0; */
            background: url(${searchImg}) no-repeat 50% 50%/24px;

            span {
                font-size: 0;
            }
        }
    }
    .gnb-new-box
        .menu-contents
        .brand-line-search-wrap
        .brand-search-header
        .brand-search-field
        .input-box {
        width: 100%;
        position: relative;
        margin-top: 20px;

        input[type="text"] {
            line-height: 38px;

            width: 100%;
            height: 100%;
            border: 0;
            font-size: 16px;
            font-weight: 400;
            background: none;

            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            border-radius: 0;
            vertical-align: top;
            outline: none;
        }
    }

    .gnb-new-box .menu-contents .brand-line-search-wrap .brand-search-cont {
        padding-top: 30px;
        padding-bottom: 0;
    }

    .gnb-new-box
        .menu-contents
        .brand-line-search-wrap
        .brand-search-cont
        .bs-list-nodata {
        padding: 30px 0 0 0;
        margin-top: 20px;
        margin-bottom: 40px;
        border-top: 2px solid #000000;
        color: #666666;
        font-size: 16px;
        text-align: center;
    }

    .gnb-new-box
        .menu-contents
        .brand-line-search-wrap
        .brand-search-cont
        .bs-btnTab {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        position: relative;
        margin: 0 auto;

        .bs-btn {
            display: flex;
            margin: 0;
            padding: 0;
            font-size: 0;
            line-height: 0;

            float: left;
        }

        button.on {
            border: 1px solid #000000;
            color: #ffffff;
            background-color: #000000;

            span {
                color: #fff;
            }
        }
        .bs-btn.btn-all button {
            min-width: 90px;
            height: 45px;
            padding: 0 10px;
            margin: 0 5px;
            border: 1px solid #a4a4a4;
            color: #000000;
            font-size: 16px;
            line-height: 28px;
            vertical-align: middle;

            &:first-child {
                margin: 0 10px 0 0;
            }
        }

        .bs-btn.btn-alphabet {
            margin-left: 36px;

            button {
                padding: 0;
                min-width: 30px;
                height: 45px;
                margin: 0 3px;
                color: #969696;
                font-size: 16px;
                line-height: 28px;
                vertical-align: middle;
                border: none;
            }
            button:first-child {
                margin: 0 3px 0 0;
            }
        }
    }
`;
