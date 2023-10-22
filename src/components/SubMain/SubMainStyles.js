import styled from "styled-components";

import filterbtn from "../../assets/images/icon_filter_tab_btn.png";

export const SubContainer = styled.div`
    max-width: 1920px;
    margin-top: 100px;
    padding: 0 80px;

    .title {
        color: var(--themeTextColor);
        font-size: 34px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0.02em;
        margin: 0 0 40px;
        text-align: center;
    }

    .wrap-product-list .list-head {
        position: relative;
        display: flex;
        padding-left: 117px;
        min-height: 50px;
        margin-bottom: 50px;
        border-top: 1px solid #000;
    }

    .list-filter .filter-btn {
        position: absolute;
        top: 0;
        left: 0;
        height: 50px;
        padding: 0 20px;
        background: url(${filterbtn}) no-repeat 100% 50%;
    }

    .list-filter .filter-btn span {
        font-size: 14px;
        line-height: 50px;
    }

    .wrap-product-list .select {
        vertical-align: middle;
    }

    .wrap-product-list .cell > * {
        margin-left: 30px;
    }
    .select {
        position: relative;
        display: inline-block;
    }

    .wrap-product-list .select .sel-list {
        top: 50px;
        left: auto;
        right: 0;
    }
    .select.open .sel-list {
        z-index: 50;
        opacity: 1;
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

    .select .sel-btn {
        width: 100%;
        height: 50px;
        border: 0;
        color: #000;
        padding: 0 30px 0 0;
        line-height: 38px;
        font-size: 14px;
        background: url(../images/select.png) no-repeat 100% 50%;
        border-bottom: 1px solid #ddd;
        text-align: left;
        display: inline-block;
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .select .sel-list ul {
        padding: 25px;
    }

    .select .sel-list label input[type="radio"]:checked ~ span,
    .select .sel-list label input[type="checkbox"]:checked ~ span {
        color: #000;
    }

    .select .sel-list li:hover label span {
        color: #000;
    }

    .select .sel-list label span {
        color: #666;
    }
`;
