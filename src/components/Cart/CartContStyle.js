import styled from "styled-components";

import checkbox from "../../assets/images/checkbox.png";
import optIcon from "../../assets/images/icon_link_arrow2.png";
import boxIcon from "../../assets/images/icon_link2.png";
import closeBtn from "../../assets/images/btn_del2.png";
import icon_breadcrumb from "../../assets/images/icon_breadcrumb.png";
import icon_arr4 from "../../assets/images/icon_link_arrow4.png";
import nodata from "../../assets/images/icon_nodata.png";


export const CartWrap = styled.div`
    background-color: #fff;
    min-width: 1280px;
    max-width: 1920px;
    padding: 130px 80px 160px;
    margin: 0 auto;

    ol {
        list-style: none;
    }

    .breadcrumb-wrap {
        width: 100%;
        height: 40px;

        span,
        .active {
            color: #999;
            font-size: 14px;
        }
        .breadcrumb li {
            margin-left: 12px;
            padding-left: 19px;
        }

        .breadcrumb {
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
            min-width: 1280px;
            max-width: 1920px;
            height: 100%;
            /* padding: 0 80px; */
            margin: 0 auto;

            .bc-home {
                position: relative;
                min-height: 14px;
                font-weight: 300;
            }
        }

        .breadcrumb li {
            position: relative;
        }

        .breadcrumb .active:before {
            content: "";
            display: inline-block;
            position: absolute;
            top: 7px;
            left: 0;
            width: 5px;
            height: 9px;
            background: url(${icon_breadcrumb}) no-repeat 0 0;
            vertical-align: top;
        }
    }

    .page-title {
        margin: 40px 0 40px;
        color: #000;
        font-size: 34px;
        font-weight: 500;
        text-align: center;
    }

    table {
        display: inline-block !important;
    }
`;

export const CartCont = styled.div`
    span {
        font-size: inherit;
    }

    .order-tbl .body {
        display: table;
        width: 100%;
        table-layout: fixed;
        /* padding: 30px 0; */
    }
    .order-tbl {
        border-top: 1px solid #000;
    }
    .order-tbl .row {
        padding: 30px 0;
    }
    .order-tbl .row ~ .row {
        border-top: 1px solid #eee;
    }
    .order-tbl .row,
    .order-tbl .inner,
    .order-tbl .info-row {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tab-wrap {
        position: relative;
        width: 100%;
        .tabs {
            margin-bottom: 40px;
            font-size: 0;
            text-align: center;
        }
    }

    .tab-wrap > .tabs > li {
        display: inline-block;
        position: relative;
        vertical-align: top;
        font-size: 18px;
        min-height: 31px;
    }

    .tab-wrap > .tabs > li.on button {
        font-weight: 700;
        color: #000;
        border-color: #000;
    }

    .tab-wrap > .tabs > li button {
        display: inline-block;
        width: 100%;
        padding: 0 0 10px 0;
        color: #999;
        border-bottom: 3px solid transparent;
        font-size: 18px;
        line-height: 1;
        vertical-align: top;
    }

    .tab-wrap > .tabs > li + li {
        margin-left: 29px;
        padding-left: 30px;
    }

    .tab-wrap > .tabs > li + li::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 3px;
        left: 0;
        width: 1px;
        height: 12px;
        background: #ddd;
        vertical-align: top;
    }

    .head {
        display: table;
        width: 100%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        table-layout: fixed;
        border-bottom: 1px solid #ccc;
    }

    .cell-check {
        width: 60px;
        text-align: center;
    }

    /* 상품정보 */
    .cell-info {
        width: 620px;
    }

    /* 상품수량 */
    .cell-amt {
        width: 160px;
    }

    /* 상품금액 */
    .cell-price {
        position: relative;
        text-align: center;
        width: 180px;
    }

    /* 선택 */
    .cell-btn {
        position: relative;
        width: 180px;
        text-align: center;

        .btn-buy-small {
            min-width: 90px;
            height: 30px;
            padding: 0 10px;
            line-height: 28px;
            font-size: 12px;
            border-radius: 2px;
            color: #fff !important;
            background: #333;
        }

        .btn-del {
            width: 13px;
            height: 13px;
            position: absolute;
            top: 0;
            right: 34px;
            background: url(${closeBtn}) no-repeat;
            font-size: 0;
        }
    }

    .order-tbl [class*="cell-"] {
        display: table-cell;
        vertical-align: middle;
        table-layout: fixed;
    }

    .check-skin {
        display: inline-block;
        position: relative;
        vertical-align: top;
        overflow: hidden;
        cursor: pointer;
    }

    .check-skin input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 5;
    }

    .check-skin.only input + span {
        padding-left: 22px;
        font-size: 0;
    }

    .check-skin input + span {
        display: inline-block;
        position: relative;
        min-height: 22px;
        padding-left: 32px;
        font-size: 14px;
        color: #000;
        line-height: 22px;
        vertical-align: top;
        z-index: 3;
    }

    .check-skin input + span:before {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 22px;
        height: 22px;
        background: url(${checkbox}) no-repeat 0 0;

        z-index: 999;
    }

    .check-skin input:checked + span:before {
        background-position: 0 -22px;
    }

    /* --------------------------------body ----------------------------------*/

    .body {
        position: relative;
        /* padding-right: 160px; */
        border-bottom: 1px solid #eee;
    }

    .nodata .txt-nodata {
        font-size: 16px;
        color: #000;
        padding: 100px 0;
        text-align: center;
    }


    .nodata .txt-nodata::before {
        content: '';
        display: block;
        width: 54px;
        height: 64px;
        margin: 0 auto 30px;
        background: url(${nodata}) no-repeat 0 0;
        vertical-align: top;
    }

    .first {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;

        .item-state {
            color: #c2935f;
            margin: 0 0 10px;
        }
    }

    .item-img {
        width: 86px;
        height: 129px;
    }

    .item-text {
        display: inline-block;
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 300;
        margin: 0 0 10px;
        word-break: break-all;
        font-weight: 300;

        color: #000 !important;
        font-size: 14px;
    }

    .item-opt {
        display: inline-block;
        margin-right: 20px;
        font-weight: 300;
    }

    /* 옵션변경 뒤 아이콘 */

    .btn-link {
        display: inline-block;
        position: relative;
        padding-right: 14px;
        font-size: 14px;
        vertical-align: top;
        width: 63px;
    }

    .btn-link::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 0;
        width: 6px !important;
        height: 11px;
        margin-top: -5px;
        background: url(${optIcon}) no-repeat 0 0;
    }

    /* 상품사은품 증정 아이콘 */
    .item-link {
        margin-top: 15px;

        /* display: inline-block; */
        margin-right: 18px;
        padding-left: 30px;
        color: #000;
        background: url(${boxIcon}) no-repeat 0 50%;
        background-position: top left;
        .item-text {
            margin-bottom: 0;
        }
    }

    /* 선택삭제, 품절삭제 버튼 */

    .btn-del-m {
        margin-right: 2px;
        min-width: 90px;
        height: 40px;
        padding: 0 20px;
        line-height: 38px;
        color: #000 !important;
        background: #eee;
        font-size: 13px !important;
        font-weight: 300;
        vertical-align: top;
    }
`;

export const FinalPrice = styled.div`
    margin: 80px 0 0;
    position: relative;

    .inner {
        padding: 70px 0;
        background: #f8f3f0;
        border-top: 1px solid #000;
        text-align: center;
        font-size: 14px;
    }

    .inner > span {
        display: inline-block;
        text-align: left;
    }
    .symbol-plus {
        vertical-align: 36px;
    }

    [class*="symbol"] {
        position: relative;
        width: 30px;
        height: 30px;
        margin: 0 50px;
        font-size: 0;
    }
    .symbol-minus {
        vertical-align: middle;
    }

    [class*="symbol"] {
        position: relative;
        width: 30px;
        height: 30px;
        margin: 0 50px;
        font-size: 0;
    }

    .symbol-eq {
        height: 13px;
        vertical-align: 30px;
        margin-left: 80px;
    }

    .symbol-eq:before,
    .symbol-eq:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 1px;
        background: #000;
    }

    .price .txt {
        display: block;
        margin: 0 0 10px;
        color: #000;
    }

    .price .num {
        font-size: 28px;
    }

    .price.sale .num {
        color: #c2935f;
    }

    .symbol-minus:before {
        content: "";
        display: inline-block;
        width: 30px;
        height: 1px;
        background: #000;
    }

    .symbol-eq:before,
    .symbol-eq:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 1px;
        background: #000;
    }

    .symbol-plus {
        vertical-align: 36px;
    }

    .symbol-plus:before,
    .symbol-plus:after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 30px;
        background: #000;
    }

    .symbol-plus:after {
        transform: rotate(90deg);
    }

    .symbol-eq {
        height: 13px;
        vertical-align: 30px;
        margin-left: 80px;

        &::after {
            top: 100%;
        }
    }

    .price.total .num,
    .price.total .etc {
        font-size: 28px;
    }
`;

export const BtnBox = styled.div`
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
        margin-top: 50px;
        gap: 1rem;
    }

    .btn-box [class$="-lg"],
    .btn-box [class$="-xlg"] {
        min-width: 210px;
    }

    btn-box [class*="btn-type"] + [class*="btn-type"] {
        margin-left: 10px;
    }

    a:active,
    a:hover,
    a:link,
    a:visited {
        text-decoration: none;
    }

    [class*="btn-type2"] {
        color: #fff !important;
        background: #c2935f;
    }

    [class*="btn-type4"] {
        color: #fff !important;
        background: #333;
    }
    [class*="btn-type"] {
        display: inline-block;
        position: relative;
        padding: 0 19px;
        font-size: 13px;
        border-radius: 4px;
        text-align: center;
        vertical-align: top;
    }

    .btn-type4-lg {
        min-width: 250px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        border-radius: 6px;
    }

    .btn-type2-lg {
        min-width: 250px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        border-radius: 6px;
    }

    /* 텍스트박스 */

    .btn-box + .txt-list {
        margin-top: 80px;
    }
    .txt-list > li {
        position: relative;
        padding-left: 11px;
        color: #666;
        font-size: 13px;
        line-height: 1.6;
        word-break: break-all;
    }

    .txt-list > li + li {
        margin-top: 7px;
    }

    .txt-list > li::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 9px;
        left: 0;
        width: 2px;
        height: 2px;
        background: #666;
    }

    .txt-list .point-link {
        margin-left: 16px;
    }

    .point-link {
        display: inline-block;
        padding-right: 16px;
        color: #c2935f;
        background: url(${icon_arr4}) no-repeat 100% 50%;
        border-bottom: 1px solid;
        font-size: 13px !important;
        font-weight: 300;
    }
`;
