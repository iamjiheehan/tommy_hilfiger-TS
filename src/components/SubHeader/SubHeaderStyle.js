import styled from "styled-components";

import sublogo from "../../assets/images/sub_logo_new.png";
import searchBtn from "../../assets/images/btn_search_head.png";

export const Header = styled.div`
    display: block;

    a,
    span {
    }

    /* .depth2-menu, */
    .search {
        display: none;
    }

    .inner {
        position: absolute;
        z-index: 100;
        left: 0;
        width: 100%;
        min-width: 1280px;
        background: #000;
    }

    .search {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        text-align: center;
    }

    .inner .wrap {
        min-width: 1280px;
        max-width: 1920px;
        padding: 0 80px;
        margin: 0 auto;
    }
    .inner .wrap .btns a {
        font-size: 0;
    }

    .inner .wrap .logo {
        position: relative;
        float: left;
        height: 95px;

        &::after {
            content: "";
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }
    }

    .inner .wrap .logo a {
        display: inline-block;
        width: 183px;
        height: 23px;
        background: url(${sublogo}) no-repeat;
        vertical-align: middle;
        font-size: 0;
    }

    .inner .wrap .util {
        margin: 35px 0 0 0;
        position: relative;
        float: right;
        color: #fff;
        font-size: 0;
        white-space: nowrap;

        span {
            position: relative;
            display: inline-block;
            margin-left: 12px;
            padding-left: 12px;
            color: #ffffff;
            vertical-align: middle;
        }

        span > a {
            white-space: nowrap;
            font-size: 13px;
            color: #fff;
        }

        span ~ span::after {
            content: "";
            position: absolute;
            top: 8px;
            left: 0;
            height: 13px;
            border-left: 1px solid #fff;
            opacity: 0.3;
        }
    }
    .btn-search {
        width: 30px;
        height: 30px;
        background: url(${searchBtn}) no-repeat;
        vertical-align: middle;
        color: #fff;

        span {
            position: relative;
            font-size: 1px;
            visibility: hidden;
        }
    }

    #gnb {
        position: relative;
        color: #fff;
    }
`;

export const GnbMenu = styled.div`
    float: left;
    max-width: 750px;

    .gnb-category {
        float: left;
        margin-left: -15px;

        a {
            display: block;
            min-height: 34px;
            padding: 0 15px;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
        }

        a span {
            display: block;
            height: 26px;
            font-size: 14px;
        }

        /* 호버메뉴 */
        .depth2 {
            position: absolute;
            top: 34px;
            right: 0;
            left: 0;
            min-height: 235px;
            padding: 10px 0 30px;
            background: #fff;
            color: #000;
            /* transform: scaleY(0); */
            transform-origin: 0 0;
            /* z-index: -1;
                opacity: 0; */

            a {
                color: #666;
                white-space: nowrap;
                font-size: 13px;
                font-weight: 300;
                padding-left: 0;
            }
        }

        ul[class^="depth2-menu-list"] {
            display: inline-flex;
            flex-flow: column wrap;
            min-height: 224px;
            max-height: 340px;
        }

        .depth2-inner {
            display: flex;
            width: 100%;
            min-width: 1280px;
            max-width: 1920px;
            margin: 0 auto;
            padding: 0 80px;
        }
    }
`;

export const GnbEtc = styled.div`
    float: right;

    li {
        float: left;
        margin-left: 15px;

        a {
            min-height: 34px;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
        }
    }
`;
