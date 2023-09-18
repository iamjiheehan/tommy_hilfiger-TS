import styled from "styled-components";

export const Banner = styled.div`
    min-width: 1366px;
    max-width: 1920px;
    height: 533px;
`;

export const Box= styled.div`
    position: relative;
    padding-top: 0;
`;

export const TextStr = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`;

export const ViewMore = styled.a`
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 80px 80px;
    color: #fff;
    z-index: 5;
`;
    