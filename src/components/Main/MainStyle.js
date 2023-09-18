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
    min-width: 1366px;
    max-width: 1920px;
    margin: 90px auto 0;
    padding: 0 80px;

    .sec-content-wrap{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const BrandTab = styled.div`
    width: 100%;
    font-size: 0;
    text-align: center;
`;

export const BrandContent = styled.div`
    width: 100%;
    font-size: 0;
    text-align: center;
`;

