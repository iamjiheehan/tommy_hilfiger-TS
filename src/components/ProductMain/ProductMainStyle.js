import styled from "styled-components";
import breadcrumb from "../../assets/images/icon_breadcrumb.png";

export const Container = styled.div`
    background-color: #fff;
    /* height: 500px; */
    min-width: 1280px;
    max-width: 1920px;
    padding: 140px 80px 160px;
    margin: 0 auto;

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

    h3 {
    }
`;
