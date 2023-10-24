import styled from "styled-components";

import moreArrow from "../../assets/images/ico_more_arr_dark_blue.png";
import moreArrowWhite from "../../assets/images/ico_more_arr_white.png";
import btnlike from "../../assets/images/btn_like.png";
import vidPlayBtn from "../../assets/images/ico_play_video_tommy.png";
import star from "../../assets/images/tommy_rating_star_back.png";
import fixedIco from "../../assets/images/icon_stickey.png";

export const Banner = styled.div`


    position: relative;
    min-height: 599px;
    max-height: 750px;

    overflow: hidden;

    min-width: 1366px;
    max-width: 1920px;
    margin: 0 auto;


    img {
        width: auto;
    }

    .slide-container {
        overflow: hidden;
        position: relative;

    }

    .slide-container .swiper-wrapper {
        display: flex;
        transition-duration: 3s !important;

    }
    .slide-container .swiper-wrapper .swiper-item {
        flex-shrink: 0;
        overflow: hidden;
        white-space: nowrap;
        font-size: 0;

    }

    .swiper-tool-wrap {
        position: absolute;
        bottom: 60px;
        right: 80px;
        z-index: 9;
    }

    .swiper-tool-wrap .swiper-tool {
        padding: 5px 10px;
        background: rgba(0, 0, 0, 0.4);
        display: inline-flex;
    }

    .swiper-tool-wrap .swiper-tool .swiper-pagination {
        position: relative;
        font-size: 13px;
        line-height: 16px;
    }

    .swiper-tool-wrap
        .swiper-tool
        .swiper-pagination
        .swiper-pagination-current {
        opacity: 1;
        font-weight: 500;
        color: #fff;
        margin: 0 2px;
    }

    .swiper-tool-wrap .swiper-tool .swiper-pagination .swiper-pagination-bar,
    .swiper-tool-wrap .swiper-tool .swiper-pagination .swiper-pagination-total {
        color: #fff;
        opacity: 0.5;
        margin: 0 2px;
    }
`;

export const Box = styled.div`
    position: relative;
    padding-top: 0;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.7) -44.67%,
            rgba(71, 71, 71, 0.35) 22.13%,
            rgba(111, 111, 111, 0) 59.47%
        );
        z-index: 3;
    }
`;

export const Image = styled.div`
    position: relative;
    z-index: 3;
    width: 100%;

    a {
        height: auto;
        display: block;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    a > img {
        object-fit: cover;
    }
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

    .view-text {
        font-weight: 900;
        height: 44px;
    }
`;

// 카테고리 섹션 || 두번쨰 섹션 --------------------------------------------------------

export const MainContainer = styled.div`
    position: relative;

    .swiper-button-next::after,
    .swiper-button-prev::after {
        display: none;
    }

    padding-bottom: 160px;
    position: relative;

    .button-disabled {
        /* opacity: 0.3 !important; */
    }

    .product-list li {
        display: inline-block;
        width: 20%;
        margin-bottom: 40px;
        vertical-align: top;
    }

    .item-brand {
        margin: 0 0 8px 0;
        font-weight: 400;
        color: var(--themeTextColor);
        line-height: 16px;
        letter-spacing: inherit;
        font-size: 13px;
    }

    .slide-container {
        position: relative;
    }

    .swiper-wrapper {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        /* overflow: hidden; */
    }

    .swiper-wrapper .swiper-item {
        flex-shrink: 0;
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

    .item-img .img-box img {
        width: 100%;
    }

    .item-img .img-box a {
        display: block;
    }

    .item-img .img-box * {
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

    .item-box .btn-like:after,
    .btn-like span {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 23px;
        height: 21px;
        background: url(${btnlike}) no-repeat;
        opacity: 0.3;
        transition: opacity 0.3s;
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
    .content-wrap {
        font-size: 0;
        text-align: center;
    }

    .btn_line-before::before {
        content: "";
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

    .season-text-box .season-title {
        color: var(--themeTextColor);
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
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

    /* 아홉번째 섹션 || PROMOTION ---------------------------------------------------------------*/
    .season-text-box .season-subtitle {
        margin-top: 16px;
        color: var(--themeSubTextColor);
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
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

    .season-info-wrap {
        margin-top: 30px;
    }

    .category-tab.season {
        margin: 0 0 24px;
        font-size: 0;

        span {
            color: var(--themeTextColor);
        }
    }

    .slide-container.season .swiper-wrapper .swiper-item {
        width: calc((100% - 20px) / 3);
        margin-right: 16px;
    }

    .slide-container.insta .swiper-wrapper .swiper-item {
        width: calc((100% - 80px) / 5);
        /* margin-right: 20px; */
    }

    /* 열번째 섹션 || INSTAGRAM --------------------------------------------------------------*/

    .btn-insta span {
        color: var(--themeSubTextColor);
    }

    .btn-popup img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;
    }

    .btn-popup {
        position: relative;
        width: 100%;
        padding-top: 100%;
    }

    /* 열세번째 섹션 || 마지막 섹션 || REVIEW || 리뷰 ------------------------------------------------- */

    .slide-container.review {
        position: relative;
    }

    .slide-container.review .swiper-wrapper li {
        width: 25%;
    }

    .slide-container.review .swiper-wrapper .swiper-item .item-box {
        /* margin: 0 20px; */

        position: relative;
        font-size: 14px;
    }

    .slide-container.review .swiper-wrapper .swiper-item .item-box:first-child {
        margin-left: 0;
    }

    .slide-container.review .swiper-wrapper .swiper-item .item-box * {
        height: 100%;
    }

    .slide-container.review .swiper-wrapper .swiper-item .item-box a img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide-container.review .swiper-wrapper .swiper-item .item-box a {
        display: block;
    }

    .slide-container.review .swiper-wrapper .swiper-item .item-box .item-img {
        padding-top: 100%;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .item-img
        .img-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .slide-container.review .swiper-wrapper .swiper-item .item-box .item-info {
        background: var(--themeBgLightColor);
        padding: 24px;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .review-product
        .item-box {
        display: flex;
        align-items: center;
        margin: 0;
        position: relative;
        font-size: 14px;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .review-product
        .item-box
        .item-info {
        flex: 0 1 calc(100% - 80px);
        margin-left: 20px;
        padding: 0;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .item-info
        .review-product
        .item-box
        .item-img {
        flex: 0 0 60px;
        padding-top: 0;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .review-info
        .review-desc {
        color: var(--themeSubTextColor);
        margin-top: 16px;
        font-size: 13px;
        overflow: hidden;
        height: 60px;
        max-height: 60px;
        line-height: 20px;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        white-space: normal;
    }

    /* 13번째 섹션 슬라이더 버튼 */

    #review .slide-nav-prev,
    #review .slide-nav-next {
        top: 274px;
    }

    /* 리뷰 별점 */
    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .review-info {
        border-top: 1px solid var(--themeBgSmLightColor);
        margin-top: 24px;
        padding-top: 24px;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .review-info
        .rating-option-box {
        font-size: 0;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .review-info
        .rating-option-box
        .review-rating {
        display: inline-block;
        width: 102px;
        height: 17px;
        /* background: transparent url(${star}) repeat-x 0 100%; */
        vertical-align: top;

        .ico {
            display: inline-block;
            height: 17px;
            background: transparent var(--ratingFrontUrl) repeat-x;
            font-size: 0;
            vertical-align: top;
        }
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .review-info
        .review-desc {
        color: var(--themeSubTextColor);
        margin-top: 16px;
        font-size: 13px;
        overflow: hidden;
        height: 60px;
        max-height: 60px;
        line-height: 20px;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        white-space: normal;
    }

    .slide-container.review
        .swiper-wrapper
        .swiper-item
        .item-box
        .review-info
        .rating-option-box
        .prd-option {
        display: inline-block;
        color: var(--themeTextColor);
        width: calc(100% - 112px);
        margin-left: 10px;
        font-size: 13px;
        line-height: 18px;
        vertical-align: top;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* 슬라이더 버튼----------------------------------------------------------- */

    .slide-container .slide-nav button:hover {
        cursor: pointer;
    }

    .slide-container .slide-nav button {
        position: absolute;
        width: 48px;
        height: 48px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        opacity: 1;

        z-index: 999;
    }

    .slide-nav .slide-nav-prev {
        left: 16px;
        background-image: var(--swiperPrevUrl);
    }

    .slide-container .slide-nav .slide-nav-next {
        right: 16px;
        background-image: var(--swiperNextUrl);
    }
`;

export const Container = styled.div`
    min-width: 1366px;
    max-width: 1920px;
    /* 미디어 쿼리조절하기----------------------------- */
    margin: 90px auto 0;
    padding: 0 80px;
`;

export const BrandTab = styled.div`
    width: 100%;
    font-size: 0;
    text-align: center;

    button {
        position: relative;
        margin-left: 25px;
        padding-left: 26px;

        & span {
            color: #a5aabc;
        }
        &.on span {
            color: var(--themeTextColor) !important;
        }
    }
`;

export const BrandContent = styled.div`
    width: 100%;
    font-size: 0;
    text-align: center;

    margin-top: 30px;

    display: flex;
    /* flex-direction: column; */
    flex-direction: ${(props) => (props.active ? "column" : "column-reverse")};

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

    .more-arr-dark-blue {
        display: inline-block;
        width: 7px;
        height: 12px;
        background: url(${moreArrow}) center no-repeat;
        background-size: 7px 12px;
        vertical-align: top;

        margin: 7px 0 0 8px;
    }

    .more-arr-dark-white {
        display: inline-block;
        width: 7px;
        height: 12px;
        background: url(${moreArrowWhite}) center no-repeat;
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

    button {
        margin: 0 0 -1px 0;
        padding: 0 0 12px 0;
    }

    button ~ button {
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
            color: var(--themeTextColor);
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
        width: 20%;
        vertical-align: top;

        flex-shrink: 0;
    }

    .slide-container {
        width: 100%;
    }

    .slide-container .swiper-wrapper .swiper-item .item-box {
        /* margin: 0 20px; */
        position: relative;
        font-size: 14px;
    }

    .slide-container .swiper-wrapper .swiper-item .item-box:first-child {
        margin-left: 0;
    }

    /* TOP RANKING */

    .item-rank {
        position: absolute;
        text-align: center;

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
        /* margin-right: 20px; */
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
        content: "";
        position: relative;
        display: block;
        width: 100%;
    }

    .link-item:after {
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.4) 100%
        );
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

export const RankingTab = styled.div`
    color: red;
    margin: 0 -10px 24px;
    font-size: 0;

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
        opacity: 0.4;
    }

    button.on span {
        font-weight: 700;
        color: var(--themeTextColor);
        opacity: 1;
    }
`;

// 다섯번째 섹션 TOMMY ISSUE--------------------------------------------------------

export const IssueContent = styled.div`
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

        align-items: flex-start;
    }

    .swiper-wrapper .swiper-item {
        width: 100%;
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

        flex-shrink: 0;
        width: 41.4204%;
    }

    .swiper-wrapper .swiper-item .season-info-wrap .product-list {
        width: calc(100% + 22px);
        margin-top: 40px;
    }

    .season-info-wrap .season-text-box {
        margin: 0 11px;
    }

    .season-info-wrap .season-text-box .season-title {
        color: var(--themeTextColor);
        font-size: 34px;
        font-weight: 900;
        line-height: 50px;
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
        display: inline-block;
        margin-bottom: 40px;
        vertical-align: top;
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

    .slide-nav .slide-nav-prev {
        left: 96px !important;
    }

    .slide-nav .slide-nav-next {
        right: 96px !important;
    }
`;

// 여섯번째 섹션 || FOCUS ON----------------------------------------------------------------

export const MagazineWrap = styled.div`
    background: var(--themeTextColor);

    padding: 20px;

    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;

    h2,
    span {
        color: #fff !important;
    }

    .title-wrap {
        margin-top: 20px;
        margin-bottom: 0;
        width: 100%;
    }

    .sub-title-wrap .title {
        font-size: 34px;
        font-weight: 900;
        line-height: 44px;
        letter-spacing: 0.02em;
        display: block;
    }

    .sub-title-wrap .text {
        font-size: 15px;
        line-height: 24px;
        margin-top: 16px;
    }

    .left {
        width: 31.2389%;
        /* width: calc(61.6470% - 120px);
        width: calc(100% - 32.4133% - 120px); */
        padding-left: 20px;
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
    }

    .left.no-product {
        justify-content: space-between;
    }

    .left .sub-title-wrap {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        flex: 1;
    }

    .left.no-product .sub-title-wrap {
        flex: 0;
    }

    .left .sub-title-wrap .text {
        font-size: 15px;
        line-height: 24px;
        margin-top: 16px;
    }

    .left .slide-section {
        margin-top: 37px;
        margin-bottom: 30px;
        overflow: hidden;
    }

    .left .slide-section .swiper-scrollbar {
        width: 100%;
        margin-top: 40px;
        margin-left: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.5);
    }

    .left .slide-section .swiper-scrollbar .swiper-scrollbar-drag {
        height: 100%;
        background-color: #fff;

        width: 60.7059px;
    }

    .left .slide-section .slide-container {
        position: relative;
        margin: 0 -10px;
    }

    .left .slide-section .slide-container .swiper-item {
        width: calc(100% / 3);
    }

    .right {
        align-self: auto;
        width: calc(100% - 31.2389% - 120px);
    }

    .right .magazine-video-box {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .right .magazine-video-box img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        object-fit: contain;
        z-index: 2;
    }

    .right .vod-content {
        position: relative;
        padding-top: 56.25%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .right .magazine-video-box .vod-content iframe {
        z-index: 3;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .right .magazine-video-box .btn-play-video {
        z-index: 4;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .right .magazine-video-box .vod-box-back {
        z-index: 1;
        width: calc(100% - 1px);
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .right .magazine-video-box .vod-box-back::after {
        z-index: 3;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(55px);
        transition: background 0.5s;
    }

    .right .magazine-video-box .btn-play-video:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        background: url(${vidPlayBtn}) no-repeat center/cover;
    }

    .right .magazine-video-box .btn-play-video .offscreen {
        position: absolute !important;
        display: block;
        overflow: hidden;
        height: 1px;
        width: 1px;
        clip: rect(1px, 1px, 1px, 1px);
        font-size: 14px !important;
    }
`;

// 일곱번째 섹션 || MD's Pick------------------------------------------------

export const MDbanner = styled.div`
    position: relative;
    width: 100%;
    margin-top: 90px;
    z-index: 2;
    /* margin: 0 calc((100vw - 100% - var(--scrollW, 0)) / 2 * -1); */

    padding: 0 80px;

    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    align-content: flex-start;
    position: relative;
    height: 348px;
    text-align: center;

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 32.41%,
                rgba(0, 0, 0, 0.35) 100%
            ),
            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    }

    div {
        min-width: 1366px;
        /* max-width: 1920px; */
        margin: 90px auto 0;
        padding: 0 80px;
    }

    .visual-img-box {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;
    }

    .visual-text-box {
        position: relative;
        width: 100%;
        margin-top: 90px;
        text-align: center;
        z-index: 2;
    }

    .pick-subtitle {
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.02em;
    }

    .pick-title {
        margin-top: 16px;
        color: #fff;
        font-size: 48px;
        font-weight: 900;
        line-height: 56px;
        letter-spacing: 0.05em;
    }

    .category-tab {
        position: relative;
        margin: 32px 0 0 0;
        z-index: 2;
    }

    .category-tab button ~ button {
        margin-left: 12px;
    }

    .category-tab button {
        height: 44px;
        padding: 0 32px;
        border: 0;
        background-color: #fff;
        display: inline-block;
        margin: 0 5px;
        padding: 0 5px;
        vertical-align: top;
        margin: 0;
        padding: 8px 20px;
    }

    .category-tab button.on {
        background-color: var(--themeTextColor);
    }

    .category-tab button > span {
        color: var(--themeTextColor);
        font-size: 14px;
        font-weight: 900;
        line-height: 20px;
        opacity: 1;
        line-height: 18px;
        opacity: 1;
        letter-spacing: 0.02em;
    }

    .category-tab button.on > span {
        color: #fff;
    }
`;

export const MdContent = styled.div`
    min-width: 1366px;
    max-width: 1920px;
    margin: 90px auto 0;
    padding: 0 80px;
    margin-top: 40px;

    ul > li {
        display: inline-block;
        width: 20%;
        vertical-align: top;

        flex-shrink: 0;
    }

    .slide-container {
        width: 100%;
    }

    .slide-container .swiper-wrapper .swiper-item .item-box {
        /* margin: 0 20px; */
        position: relative;
        font-size: 14px;
    }

    .slide-container .swiper-wrapper .swiper-item .item-box:first-child {
        margin-left: 0;
    }
`;

// 열한번째 섹션 || COUPON || 배너 --------------------------------------------------------
export const CouponBanner = styled.div`
    margin: 90px auto 0;

    .link-banner {
        overflow: hidden;
        display: block;
        position: relative;
        height: 180px;

        img {
            object-fit: cover;
        }
    }

    .text-box {
        position: absolute;
        top: 0;
        bottom: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 1920px;
        height: 100%;
        margin: 0 auto;
        padding-left: 17.1975%;
        text-align: left;
        vertical-align: top;
    }

    .text-box .text {
        font-weight: 800;
        font-size: 22px;
        line-height: 32px;
    }

    .text-box .sub-text {
        margin-top: 10px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
    }
`;

export const CampaignWrap = styled.div`
    background: var(--themeTextColor);
    padding: 20px;

    .title-wrap h2,
    .title-wrap div,
    .title-wrap span {
        color: #fff !important;
    }

    .title-wrap {
        margin-top: 20px;
        margin-bottom: 0;
        padding: 0 20px;
    }

    .slide-container {
        overflow: hidden;
        position: relative;
    }

    .slide-container .swiper-wrapper {
        /* margin-right: -40px; */
        align-items: center;
        transition: transform 0.3s ease-in-out;
    }

    .slide-container .swiper-wrapper .swiper-item {
        margin-right: 20px;
        position: relative;
        flex-shrink: 0;
        width: calc((100% - 30.5425%) / 3);

        &::after{
            content: "";
            position: absolute;
            /* z-index: 2; */
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                ),
                linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        }

        &.on {
            margin-right: 40px !important;
            width: 31.3289% !important;
            background: none;

            &::after{
                background: none !important;
            }
        }
    }


    .slide-container .swiper-wrapper .swiper-item .link-item {
        position: relative;
        display: inline-block;
    }

    .slide-container .swiper-wrapper .swiper-item .link-item .img-wrap {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide-container .swiper-wrapper .swiper-item .link-item .img-wrap img {
        vertical-align: bottom;
        /* 이미지 여백 없애기 */
    }

    /* Tommy Jeans 뱃지 */
    .slide-container .swiper-wrapper .swiper-item .link-item .text-wrap {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        padding: 6px 12px;
        z-index: 1;
        opacity: 0;
    }

    .slide-container
        .swiper-wrapper
        .swiper-item.on
        .link-item
        .text-wrap {
        opacity: 1;
    }

    .slide-container .swiper-wrapper .link-item .text-wrap .text {
        color: var(--themeTextHoverColor);
        font-size: 12px;
        font-weight: 900;
        line-height: 20px;
        letter-spacing: 0.02em;
    }
`;

// fixed btn
export const FixedBtn = styled.div`
    

    position: fixed;
    z-index: 999;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #000;
    border-radius: 20px 0 0 0;
    font-size: 0;

    /* position: absolute;
    bottom: 0; */

    span {
        position: relative;
        display: inline-block;
    }

    button {
        width: 60px;
        height: 60px;
        background: url(${fixedIco}) no-repeat;
        vertical-align: middle;
        font-size: 0;
    }

    .bnc {
        background-position: -60px 0;
    }

    .top {
        color: #fff;
        font-size: 13px;
        background-position: 100% 0;
    }

    .history span,
    .bnc span {
        opacity: 0;
    }

    .top span {
        padding-top: 20px;
    }
`;
