import styled from "styled-components";

import checkbox from "../../assets/images/checkbox.png";
import optIcon from "../../assets/images/icon_link_arrow2.png";
import boxIcon from "../../assets/images/icon_link2.png";
import closeBtn from "../../assets/images/btn_del2.png";


export const CartWrap = styled.div`
    background-color: #fff;
    min-width: 1280px;
    max-width: 1920px;
    padding: 130px 80px 160px;
    margin: 0 auto;

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
        padding: 30px 0;
    }
    .order-tbl {
        border-top: 1px solid #000;
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
    }

    .btn-link::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 24.5rem;
        width: 6px;
        height: 11px;
        margin-top: -5px;
        background: url(${optIcon}) no-repeat 0 0;
    }

    /* 상품사은품 증정 아이콘 */
    .item-link {
        margin-top: 15px;

        display: inline-block;
        margin-right: 18px;
        padding-left: 30px;
        color: #000;
        background: url(${boxIcon}) no-repeat 0 50%;
        background-position: top left;
        .item-text {
            margin-bottom: 0;
        }
    
    }

`;
