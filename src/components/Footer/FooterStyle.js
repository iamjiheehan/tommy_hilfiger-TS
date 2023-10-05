import styled from "styled-components";
import logo from "../../assets/images/img_logo_footer.png";
import familysiteUplogo from "../../assets/images/icon_familysite_arrow.png";
import sns from "../../assets/images/icon_footer_sns.png";

export const FooterWrap = styled.div`
    * {
        font-size: 13px !important;
    }
    font-weight: 500;
    background: #000;

    .inner {
        min-width: 0;
        padding: 100px 80px;

        position: relative;
        max-width: 1920px;
        margin: 0 auto;
    }

    .inner .logo {
        width: 278px;
        height: 30px;
        background: url(${logo}) no-repeat;
        font-size: 0;
    }
`;

export const FamilySite = styled.div`
    position: absolute;
    z-index: 95;
    top: 100px;
    right: 80px;

    .btn {
        position: relative;
        width: 165px;
        height: 30px;
        color: #fff;
        text-align: left;
    }

    .btn::after {
        content: "";
        position: absolute;
        color: #fff;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        background: url(${familysiteUplogo}) no-repeat 50% 50%;
    }

    .btn.active::after {
        /* Target .btn when it has the .active class */
        transform: rotate(180deg) !important;
    }
    .list {
        opacity: 0;
        position: absolute;
        right: 0;
        bottom: 30px;
        width: 165px;
        padding: 15px;
        background: #fff;
        border: 1px solid #fafafa;

        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out, opacity 0.4s ease-out;
    }

    .list.active {
        opacity: 1;
        max-height: 800px;
    }

    .list:not(.active) {
        max-height: 0;
    }

    .list p {
        font-weight: 700;
        line-height: 1.5;
        margin-top: 10px;
    }
    .list ul {
        margin: 5px 0 0;
    }

    .list ul > li {
        line-height: 1.5;
        font-size: 12px;

        a {
            color: #000;
        }
    }
`;

export const Link = styled.nav`
    position: absolute;
    top: 185px;
    right: 80px;
    color: #666;

    a {
        color: #666;
    }
    .box {
        float: left;
        width: 165px;
    }

    .title {
        color: #fff;
        font-weight: 700;
    }

    .list {
        margin: 10px 0 0;
        color: #666;
    }

    .list li {
        line-height: 1.7;
    }

    .sns {
        position: absolute;
        top: 150px;
        right: 0;
        width: 165px;
        color: #666;
    }

    .sns li {
        position: relative;
        margin: 0 0 8px;
        padding-left: 30px;
        line-height: 24px;
    }

    .sns li:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        background: url(${sns}) no-repeat;
    }

    .sns li.post:after {
        background-position: -24px 0;
    }

    .sns li.insta:after {
        background-position: -48px 0;
    }
`;

export const Info = styled.div`
    margin-top: 40px;
    color: #666;
    line-height: 1.7;

    color: #666 !important;

    a,
    button {
        margin-left: 20px;
        color: #666 !important;
        font-weight: normal !important;
    }
    .contact {
        margin-top: 15px;
    }

    .contact span {
        margin-right: 20px;
    }

    .contact span > a {
        margin-left: 0;
    }
`;

export const Copy = styled.div`
    margin: 40px 0 0;

    small {
        color: #666;
        letter-spacing: 4px;
        font-size: 10px !important;
    }

    .brand {
        margin: 40px 0 0;
        color: #666;
        line-height: 1.5;
    }
`;
