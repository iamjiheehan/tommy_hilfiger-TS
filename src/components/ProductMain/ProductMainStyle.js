import styled from "styled-components";
import breadcrumb from "../../assets/images/icon_breadcrumb.png";

import linkarrow from "../../assets/images/icon_link_arrow2.png";
import like from "../../assets/images/btn_like_sub.png";
import share from "../../assets/images/icon-share-sub.png";
import colorChip from "../../assets/images/colorChip-sub.jpg";
import select from "../../assets/images/select.png";

import arrowNext from "../../assets/images/arrowNext.png";
import arrowPrev from "../../assets/images/arrowPrev.png";

export const Container = styled.div`
    background-color: #fff;
    /* height: 500px; */
    min-width: 1280px;
    max-width: 1920px;
    padding: 130px 80px 160px;
    margin: 0 auto;



    /* 스와이퍼 설정 */

    .swiper-container {
        position: relative;
    }

    .swiper-slide {
        width: 50%;
        flex: 0 0 auto;
        flex-shrink: 0 !important;
    }

    .slide-nav .slide-nav-prev {
        left: 0px;
        width: 71px;
        height: 102px;
        margin-top: -51px;
        opacity: 1;
        background-image: url(${arrowPrev});
        background-repeat: no-repeat;
        background-position: center center;
    }

    .slide-nav .slide-nav-next {
        right: 0px;
        width: 71px;
        height: 102px;
        margin-top: -51px;
        opacity: 1;
        background-image: url(${arrowNext});
        background-repeat: no-repeat;
        background-position: center center;
    }

    .slide-nav {
        position: absolute;
        top: 50%; 
    }

    .swiper-pagination {
        margin: 25px 0 0;
        text-align: center;
    }

    .swiper-pagination .swiper-pagination-bullet-active {
        opacity: 1;
        background: #c2935f;
    }
    .swiper-pagination .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background: #eee;
        border-radius: 50%;
        font-size: 0;
        vertical-align: 6px;
    }

    input[type="radio"],
    input[type="checkbox"],
    input[type="submit"],
    input[type="tel"],
    input[type="number"] {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        font-family: "pre", "돋움", Dotum, arial, sans-serif;
        background: transparent;
        border: 0;
        border-radius: 0;
        vertical-align: top;
        outline: none;
    }

    a {
        color: inherit;
        font-size: inherit;
    }

    .top-left{
        display: table-cell;
        position: relative;
    }

    .breadcrumb-wrap {
        height: 40px;
    }

    .breadcrumb-wrap .breadcrumb {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;

        height: 100%;
        margin: 0 auto;
    }

    .breadcrumb-wrap .breadcrumb li {
        list-style: none;

        position: relative;
        min-height: 14px;
        color: #999;
        font-size: 13px;
        font-weight: 300;
    }
    .breadcrumb-wrap .breadcrumb li.active {
        color: #000 !important;
    }
    .breadcrumb-wrap .breadcrumb li + li {
        margin-left: 12px;
        padding-left: 19px;
    }

    .breadcrumb-wrap .breadcrumb li + li:before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 3px;
        left: 0;
        width: 5px;
        height: 9px;
        background: url(${breadcrumb}) no-repeat 0 0;
        vertical-align: top;
    }

    .view-top {
        position: relative;
        display: table;
        width: 100%;
        table-layout: fixed;
    }

    .top-left {
        display: table-cell;
        position: relative;
    }


`;

export const TopRight = styled.div`
    display: table-cell;
    position: relative;
    vertical-align: top;
    z-index: 2;
    width: 460px;
    padding-left: 80px;
    background: #fff;

    span {
        font-size: inherit;
    }

    .item-brand {
        margin: 30px 0 70px;
        font-weight: 300;
    }

    .item-brand a {
        padding-right: 14px;
        background: url(${linkarrow}) no-repeat 100% 50%;
    }

    .etc-btn {
        position: absolute;
        top: 30px;
        right: 0;

        .bar {
            display: inline-block;
            margin: 0 10px;
            height: 18px;
            vertical-align: middle;
            font-size: 0;
            border-left: 1px solid #eee;
        }
    }

    .btn-like::after {
        content: "";
        position: absolute;
        top: 0;
        left: -25px;
        right: 0;
        display: block;
        width: 23px;
        height: 21px;
        background: url(${like}) no-repeat;
        opacity: 0.3;
        transition: opacity 0.3s;
    }
    .btn-share {
        font-size: 0;
        width: 17px;
        height: 19px;
        background: url(${share}) no-repeat;
    }

    .item-tag {
        margin-bottom: 10px;
    }

    .item-name {
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
    }

    .product-view-top .item-price {
        margin: 10px 0 0;
    }

    .item-price .price {
        font-size: 30px;
    }

    .item-price .coupon .num {
        display: inline-block;
        margin: 5px 0;
        font-size: 30px;
        color: #c2935f;
        margin-right: 5px;
    }

    .coupon .txt {
        display: inline-block;
        margin-left: 0;
        margin-right: 7px;
        vertical-align: middle;
        font-size: 14px;

        .btn-tooltip {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: #eee;
            font-size: 0;
            vertical-align: middle;
            border-radius: 2px;

            margin-bottom: 3px;
        }
        :before {
            content: "?";
            display: inline-block;
            font-size: 12px;
            color: #666;
        }
    }

    .coupon .btn-coupon {
        line-height: 24px;
        height: 26px;
        margin-left: 0;
        vertical-align: middle;

        min-width: 90px;
        height: 30px;
        padding: 0 10px;
        line-height: 28px;
        font-size: 12px;
        border-radius: 2px;

        color: #fff !important;
        background: #333;
    }

    .item-price .coupon > * {
        line-height: 30px;
        vertical-align: middle;
    }

    [class*="btn-type"] span {
        position: relative;
    }
`;

export const ViewOption = styled.div`
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #eee;

    .row ~ .row {
        margin-top: 10px;
    }

    span {
        font-size: inherit;
    }

    .color {
        position: relative;
        margin-top: -10px;
        padding-right: 115px;

        .txt {
            position: absolute;
            top: 18px;
            right: 0;
            font-size: 13px;
            color: #000;
        }
    }

    .color-check {
        position: relative;
        display: inline-block;
        cursor: pointer;

        .etc {
            position: absolute;
            z-index: 2;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            padding-top: 16px;
            border-radius: 50%;
            font-family: "돋움", "noto";
            font-size: 11px;
            color: #666;
            text-align: center;
            line-height: 0;

            margin: 10px 8px 0 0;
        }
    }

    .color-check .pdImage {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;

        display: inline-block;
        font-size: 0;
        background-size: contain;

        background: rgba(0, 0, 0, 0.2) url(${colorChip}) no-repeat 50% 50%;
    }

    input .pdImage ::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
    }

    input .pdImage ::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        z-index: 2;
    }

    /* 사이즈 선택 구간 */

    .size {
        position: relative;
        padding-right: 115px;
    }

    .select {
        width: 100%;
        font-size: 14px;

        position: relative;
        display: inline-block;

        .sel-btn {
            display: inline-block;
            width: 100%;
            height: 40px;
            padding: 0 30px 0 0;
            line-height: 38px;
            font-size: 14px;
            color: #ccc;
            background: url(${select}) no-repeat 100% 50%;
            border-bottom: 1px solid #ddd;
            text-align: left;
            display: inline-block;
            width: 100%;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        li ~ li {
            margin-top: 15px;
        }
    }

    .select .sel-list {
        position: absolute;
        top: 40px;
        left: 0;
        min-width: 100%;
        background: #fff;
        border: 1px solid #666;
        transform-origin: 100% 0;
        z-index: 2;
        white-space: nowrap;

        /* opacity: 0; */

        ul {
            padding: 25px;
        }

        label {
            display: block;
            position: relative;
            cursor: pointer;
            white-space: nowrap;

            span {
                color: #666;
                font-size: 14px;
            }
        }
    }

    .btn-size {
        position: absolute;
        top: 5px;
        right: 0;
        height: 26px;
        line-height: 24px;
        color: #000 !important;
        background: #eee;

        min-width: 90px;
        height: 30px;
        padding: 0 10px;
        line-height: 28px;
        font-size: 12px;
        border-radius: 2px;
    }

    .btn-box {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        /* margin-top: 50px; */
        margin-top: 10px;
    }

    .btn-box [class*="btn-type"] + [class*="btn-type"] {
        margin-left: 10px;
    }

    .btn-basket {
        width: 100%;
        height: 60px;
        line-height: 58px;
        font-size: 16px;
        border-radius: 6px;

        color: #fff !important;
        background: #333;
    }

    .btn-buy {
        width: 100%;
        height: 60px;
        line-height: 58px;
        font-size: 16px;
        border-radius: 6px;

        color: #fff !important;
        background: #c2935f;
    }
`;

export const InfoBot = styled.div`
    margin-top: 35px;
    .review {
        font-size: 13px;
        font-weight: 300;
    }

    .list {
        margin-top: 25px;

        li ~ li {
            margin-top: 15px;
        }
    }

    .row {
        position: relative;
        padding-left: 85px;
        font-size: 13px;

        .title {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
`;

export const ViewList = styled.div`
    margin-top: 60px;

    span {
        font-size: inherit;
    }

    button {
        margin: 10px 50px 20px 0;

        display: inline-block;
        padding: 0 0 10px;
        border-bottom: 2px solid transparent;
        line-height: 1;
        color: #999;
        font-size: 16px;
    }

    button.on {
        border-bottom: 2px solid #000;
        font-weight: 700;
        color: #000;
    }

    .item-brand {
        margin: 0 0 4px;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0.5px;
        line-height: 21px;
    }

    .item-name {
        display: -webkit-box;
        overflow: hidden;
        max-height: 34px;
        overflow: hidden;
        height: 2.8;
        max-height: 2.8;
        line-height: 1.4;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        white-space: normal;
        height: auto;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.3;
    }

    .item-price {
        margin: 7px 0 0;
    }

    .btn-like {
        font-size: 0;

        position: absolute;
        top: 18px;
        right: 18px;

        width: 23px;
        height: 21px;
        font-size: 0;
    }

    .btn-like:after {
        /* opacity: 0; */
    }

    .btn-like:after,
    .btn-like span {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 23px;
        height: 21px;
        background: url(${like}) no-repeat;
        opacity: 0.3;
        transition: opacity 0.3s;
    }

    .swiper-wrapper {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }

    .swiper-slide {
        display: inline-block;
        width: 20%;
        margin-bottom: 40px;
        vertical-align: top;

        flex-shrink: 1 !important;
    }
`;

export const ViewDetails = styled.div`
    position: relative;
    margin-top: 80px;
    padding-right: 336px;

    span {
        font-size: inherit !important;
    }

    .sec-title {
        margin: 80px 0 20px;
        color: #000;
        font-size: 24px;
        font-weight: 600;
    }

    .detail-tab {
        position: relative;
        margin-top: -1px;
        border-right: 1px solid #ddd;

        .tabs {
            position: absolute;
            z-index: 10;
            top: 0;
            right: -1px;
            left: 0;
            margin: 0;

            display: -webkit-box;
            display: -moz-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            margin-bottom: 45px;
            border-bottom: 1px solid #000;
            text-align: center;

            li {
                flex: 1;
            }

            li.on {
                margin-bottom: -1px;
            }

            li.on button {
                font-weight: 700;
                background: #fff;
                border-bottom-width: 0 !important;
                z-index: 10;
            }

            li button {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
                color: #000;
                font-size: 15px !important;
                line-height: 54px;
                background: #f8f8f8;
                border: 1px solid #eee;
                border-bottom-width: 0;
                border-color: #ddd;
                font-weight: 300;
                z-index: 10;
            }
            li + li button{
                border-left: 0 !important;
            }

            .tab-wrap2 > .tabs > li + li button::before,
            .tab-wrap2 > .tabs > li + li a::before
            {
                content: '';
                width: 1px;
                height: 12px;
                background: #ddd;
                position: absolute;
                top: 50%;
                left: 0;
                -webkit-transform: translate(0, -50%);
                -ms-transform: translate(0, -50%);
                -moz-transform: translate(0, -50%);
                transform: translate(0, -50%);
            }
        }
    }
`;

export const DetailInfo = styled.section`
    padding-top: 130px;
    padding-bottom: 45px;
    display: block;

    p, span {
        font-size: inherit !important;
    }

    .hidden {
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute;
        width: 1px;
        height: 1px;
    }
    .info-wrap {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .info-text {
        position: relative;
        width: 1000px;
        margin-bottom: 40px;
        padding: 38px 40px 38px 204px;
        background-color: #f6f6f6;
        line-height: 24px;
        font-family:sans-serif;
        font-size: 14px !important;
    }

    .info-text::before {
        content: "md's comment";
        text-transform: uppercase;
        position: absolute;
        top: 30px;
        left: -8px;
        height: 46px;
        line-height: 46px;
        padding: 0 20px;
        background-color: #000;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    }

    .info-text::after {
        content: "";
        position: absolute;
        top: 76px;
        left: -8px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 8px 8px 0;
        border-color: transparent #333 transparent transparent;
    }

    .html-wrap {
        font-size: 14px !important;
        font-weight: 400;
        color: #666;
        line-height: 1.6;
        word-break: break-all;
    }

`;

export const DetailTable = styled.div`
    /* 상품고시정보 */


    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    table th {
        font-weight: 400;
        color: #666;

    }

    table td {
        color: #666;
    }

    .txt-list li {
        position: relative;
        padding-left: 11px;
        color: #666;
        font-size: 14px;
        line-height: 1.6;
        word-break: break-all;
    }

    .txt-list > li + li {
        margin-top: 7px;
    }

    .txt-list > li::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 9px;
        left: 0;
        width: 2px;
        height: 2px;
        background: #666;
    }

    colgroup {
        display: table-column-group;
    }

    .detail-table {
        padding: 20px 20px 0;
        border-top: 1px solid #000;
    }

    .detail-table th, .detail-table td {
        padding: 8px 0;
        text-align: left !important;
        font-size: 14px;
        line-height: 24px;
        vertical-align: top;
    }

`;

export const DetailReview = styled.section`
    .review-list {
        position: relative;
        margin-top: 30px;
        padding-right: 10px;
    }

    .review-list .head {
        position: relative;
        margin-bottom: 10px;
        text-align: right;
    }

    .review-list .head .txt {
        margin: 10px 0 0;
        font-size: 13px;
        color: #666;
        text-align: left;
        line-height: 14px;
    }

    .head .option {
        float: left;
        margin-top: 20px;
    }

    .head .option + .option {
        float: right;
        font-size: 0;
    }

    .head .option + .option [class*="btn-"] {
        margin-left: 6px;
    }
    
    .head [class*="btn-"] {
        vertical-align: middle;
        margin-left: 4px;
    }

    .head:after {
        content: "";
        display: block;
        clear: both;
    }

    .select {
        position: relative;
        display: inline-block;
        width: auto;
    }

    .select .sel-list {
        position: absolute;
        top: 40px;
        left: 0;
        min-width: 100%;
        background: #fff;
        border: 1px solid #666;
        transform-origin: 100% 0;
        z-index: -1;
        opacity: 0;
        white-space: nowrap;
    }



    button {
        min-width: 90px;
        height: 30px;
        padding: 0 10px;
        line-height: 28px;
        font-size: 12px;
        border-radius: 2px;
    }

    .btn-beige {
        color: #000 !important;
        background: #eee8dc;
    }

    .btn-black {
        color: #fff !important;
        background: #333;
    }

    .select .sel-btn {
        width: auto;
        max-width: 100%;
        color: #ccc;

        height: 30px;
        /* margin-left: 10px; */
        padding: 0 40px 0 0;
        line-height: 30px;
        border: 0;
        font-size: 14px;
        vertical-align: middle;
        background: url(${select}) no-repeat 100% 50%;
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
    }

    .nodata {
        padding: 100px 0;
        border-top: 1px solid #000;
        border-bottom: 1px solid #eee;
        text-align: center;

        line-height: 1.5;

        font-size: 14px;
    }

`;

export const DetailOption = styled.div`

    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    width: 336px;
    height: 100%;

    .sticky-wrap {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .view-option {
        width: 336px;
        margin: 0;
        padding: 67px 0 0 40px;

        position: sticky;
        top: 90px;
    }
`;
