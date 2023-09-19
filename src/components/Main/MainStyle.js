import styled from "styled-components";

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

    .sec-content-wrap{
        /* display: flex;
        justify-content: center;
        flex-wrap: wrap; */

        font-size: 0;
        text-align: center;
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

        color: red;

    }

    button > span {
        font-size: 15px;
        font-weight: bolder;

        line-height: 18px;
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

