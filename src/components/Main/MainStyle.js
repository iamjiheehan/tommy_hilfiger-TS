import styled from "styled-components";

import moreArrow from "../../assets/images/ico_more_arr_dark_blue.png"
import btnlike from "../../assets/images/btn_like.png"

export const Banner = styled.div`
    min-width: 1366px;
    max-width: 1920px;
    height: 533px;

    object-fit: cover;
`;

export const Box= styled.div`
    position: relative;
    padding-top: 0;
    overflow: hidden;

`;

export const Text = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 80px 80px;
    color: #fff;
    z-index: 5;

    .etc {
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
    }

    .title {
        display: block;
        margin: 8px 0 16px;
        font-size: 34px;
        line-height: 44px;
        font-weight: 700;
        letter-spacing: 0.02em;
        overflow: hidden;
        height: 88px;
        max-height: 88px;
        line-height: 44px;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        white-space: normal;
        height: auto;
}

    .sub {
        font-size: 15px;
        line-height: 24px;
        font-weight: 400;
        overflow: hidden;
        height: 48px;
        max-height: 48px;
        line-height: 24px;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        white-space: normal;
        height: auto;
    }
`;

export const ViewMore = styled.p`
    padding: 12px;
    background: #fff;
    text-align: center;
    color: #00174f;
    font-size: 14px;
    letter-spacing: 0.02em;
    margin-top: 24px;
    min-width: 256px;
    line-height: 20px;

    cursor: pointer;

    .view-text{
        font-weight: 900;
        height: 44px;
    }
`;

// 카테고리 섹션 || 두번쨰 섹션 --------------------------------------------------------

export const Container = styled.div`
    /* min-width: 1366px;
    max-width: 1920px; */
    /* 미디어 쿼리조절하기----------------------------- */
    margin: 90px auto 0;
    padding: 0 80px;


    .item-brand {
        margin: 0 0 8px 0;
        font-weight: 400;
        color: var(--themeTextColor);
        line-height: 16px;
        letter-spacing: inherit;
    }

    .swiper-wrapper {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }

    .item-img {
        position: relative;
        display: block;
        overflow: hidden;
        padding-top: 150%;
    }

    .item-img .img-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .item-box .btn-like {
        position: absolute;
        top: 18px;
        right: 18px;

        width: 23px;
        height: 21px;
        font-size: 0;
    } 

    .item-box .btn-like:after {
    opacity: 0;
}

    .item-box .btn-like:after, .btn-like span {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 23px;
        height: 21px;
        background: url(${btnlike}) no-repeat;
        opacity: 0.3;
        transition: opacity .3s;
    }


    .item-name {
        color: var(--themeTextColor);
        overflow: hidden;
        max-height: 34px;
        line-height: 17px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        white-space: normal;
        height: auto;
        font-size: 14px;
        font-weight: 500;
    }

    .product-list .item-price {
        margin: 7px 0 0;
    }

    .item-price * {
        margin-right: 7px;
    } 

    .item-price .price {
        color: var(--themeTextColor);
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }

    .item-price .regular {
        color: var(--themeRegularColor);
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }

    .item-price .percent {
        color: var(--themePercentColor);
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }

    .item-box .item-info {
        padding-top: 20px;
    }
    .content-wrap{
        font-size: 0;
        text-align: center;
    }

    .btn_line-before::before {
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        display: inline-block;
        width: 1px;
        height: 13px;
        background-color: #d9d9d9;
        vertical-align: top;
    }

    button > span {
        font-size: 15px;
        font-weight: bolder;

        line-height: 18px;
    }
`;

export const BrandTab = styled.div`
    width: 100%;
    font-size: 0;
    text-align: center;


    button {
        position: relative;
        margin-left: 25px;
        padding-left: 26px;

        
        &:not(:first-child){
            color: #a5aabc;
        }
    }


`;

export const BrandContent = styled.div`
    width: 100%;
    font-size: 0;
    text-align: center;

    margin-top: 30px;

    ul {
        display: inline-block;
        margin: 0 7px 30px;
        font-size: 0;
        vertical-align: top;

    }

    ul > li {
        display: inline-block;
        width: 94px;
        text-align: center;
        vertical-align: top;


        &:not(:first-child) {
            margin-left: 14px;
        }
    }

    ul > li > a {
        display: block;
    }

    ul > li > a > img {
        object-fit: cover;
        vertical-align: top;
    }

    ul > li > a > span {
        display: block;
        margin-top: 15px;
        color: #00174f;
        font-weight: bolder;
        line-height: 18px;
        word-break: break-word;
    }
`;

export const NewTitle = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-bottom: 20px;


    i {
        display: inline-block;
        width: 7px;
        height: 12px;
        background: url(${moreArrow}) center no-repeat;
        background-size: 7px 12px;
        vertical-align: top;

        margin: 7px 0 0 8px;
    }

    .right-box {
        margin-left: auto;
    }

    .title {
        color: #00174f;
        /* margin: 0 0 20px 0; */
        font-size: 22px;
        font-weight: 900;
        line-height: 32px;
    }

    .btn-more-view {
        display: inline-block;
        font-size: 0;
        vertical-align: top;
    }
`;

export const NewTab = styled.div`
    width: 100%;
    margin: 0 0 20px 0;
    border-bottom: 1px solid #f1f4f8;

    text-align: left;

    button {
        margin: 0 0 -1px 0;
        padding: 0 0 12px 0;
    }

    button~button {
        margin-left: 30px;
    }

    button.on {
    border-bottom: 2px solid var(--themeTextColor);
}

/* -------------------------------- */


    button.on > span {
        color: #00174f;
        font-size: 15px;
        font-weight: 900;
        line-height: 18px;
        opacity: 1;
        letter-spacing: 0.02em;
    }

    button > span {
        color: #a5aabc;
        line-height: 18px;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.02em;
        opacity: 1;
    }
`;

export const NewCategory = styled.div`
    margin: 0 0 24px 0;
    
    text-align: left;

    button {
        margin: 0;
        padding: 8px 20px;
        border: 2px solid #a5aabc;
    }

    button ~ button {
        margin-left: 12px;
    }

    button.on {
        border: 2px solid var(--themeTextColor);

        span {
            color : var(--themeTextColor);
        }
    }
    
    button > span {
        color: #a5aabc;
        font-size: 13px;
        font-weight: 900;
        line-height: 18px;
        opacity: 1;
        letter-spacing: 0.02em;
    }
`;

export const NewContent = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-bottom: 20px;

    text-align: left;

    ul > li {
        display: inline-block;
        /* width: 20%; */
        vertical-align: top;
    }



/* TOP RANKING */

    .item-rank {
        position: absolute;
        text-align: Center;

        top: 12px;
        left: 12px;
        width: 50px;
        height: 50px;
        padding-top: 13px;
        border-radius: 0;
        background-color: #fff;
        color: var(--themeTextHoverColor);
        font-size: 18px;
        font-weight: 900;
        line-height: 24px;
    }


`;

// 세번째 탭 || MORE CATOEGORIES--------------------------------------------------------

export const MoreContent = styled.div`

    .swiper-wrapper .swiper-item {
        width: calc((100% - 60px) / 4);
        margin-right: 20px;
    }

    .link-item {
        display: inline-block;
        position: relative;
        margin: 0;
        padding: 0;
        border: none;
        width: 100%;

        font-size: 0;
    } 

    .link-item:before {
        content: '';
        position: relative;
        display: block;
        width: 100%;
    }

    .link-item:after {
        content: '';
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
        width: 100%;
        height: 100%;
    }

    .img {
        position: absolute;
        left: 0;
        top: 0;
    }

    .text {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0.02em;

    z-index: 3;
}
`;

// 네번째 섹션  || TOP RANKING--------------------------------------------------------

export const RandkingTab = styled.div`
    color: red;
    margin: 0 -10px 24px;
    font-size: 0;

    text-align: left;

    button {
        display: inline-block;
        margin: 0 5px;
        padding: 0 5px;
        vertical-align: top;
    }

    button span {
        display: inline-block;
        color: var(--themeTextColor);
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        vertical-align: top;
        opacity: .4;
    }

    button.on span {
        font-weight: 700;
        color: var(--themeTextColor);
        opacity: 1;
    }
`;

// 다섯번째 섹션 TOMMY ISSUE--------------------------------------------------------

export const IssueContent = styled.div`

    div {
        text-align: left;
    }

    .slide-container {
        position: relative;
        margin: 0 -80px;
    }

    .swiper-wrapper .swiper-item {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 0 80px;
    }

    .swiper-wrapper .swiper-item .season-visual-wrap {
        flex-shrink: 0;
        width: 41.4204%;
    }

    .swiper-wrapper .swiper-item .season-info-wrap {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        flex: 1;
        align-content: space-between;
        margin: -7px 0 0 40px;
        flex-direction: column;
    }

    .swiper-wrapper .swiper-item .season-info-wrap .product-list {
        /* width: calc(100% + 22px); */
        margin-top: 40px;
    }

    .season-info-wrap .season-text-box {
        margin : 0 11px;
    }
    
    .season-info-wrap .season-text-box .season-title {
        color: var(--themeTextColor);
        font-size: 34px;
        font-weight: 900;
    }

    .season-info-wrap .season-text-box .season-subtitle {
        margin-top: 4px;
        color: var(--themeSubTextColor);
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
    }

    .season-text-box .btn-season-more {
        display: inline-block;
        height: 44px;
        margin-top: 20px;
        padding: 10px 32px;
        border: 2px solid var(--themeTextColor);
        background-color: #fff;
        vertical-align: top;
    }

    .season-info-wrap .season-text-box .btn-season-more .text {
        display: inline-block;
        color: var(--themeTextColor);
        font-size: 14px;
        font-weight: 900;
        line-height: 20px;
        vertical-align: top;
    }
    .season-info-wrap .product-list li {
        width: calc(100% / 3);
        margin-bottom: 0;
    }

    .season-info-wrap .product-list {
        width: calc(100% + 22px);
        margin-top: 40px;
    }

    .product-list .item-box {
        position: relative;
        margin: 0 11px;
        font-size: 14px;
    }
    
    .product-list li {
        display: inline-block;
        margin-bottom: 40px;
        vertical-align: top;
    }

`;