import styled from "styled-components";
import breadcrumb from "../../assets/images/icon_breadcrumb.png";

import linkarrow from "../../assets/images/icon_link_arrow2.png";
import like from "../../assets/images/btn_like_sub.png";
import share from "../../assets/images/icon-share-sub.png";
import colorChip from "../../assets/images/colorChip-sub.jpg";
import select from "../../assets/images/select.png";

export const Container = styled.div`
    background-color: #fff;
    /* height: 500px; */
    min-width: 1280px;
    max-width: 1920px;
    padding: 140px 80px 160px;
    margin: 0 auto;

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

    .swiper-slide {
        width: 50%;
        flex: 0 0 auto;

        flex-shrink: 1 !important;
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
        z-index: -1;
        white-space: nowrap;

        opacity: 0;

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
`;
