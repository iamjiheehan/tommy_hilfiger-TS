import { createGlobalStyle } from "styled-components";

import icoNext from "./assets/images/ico_next_blue_h48.png";
import icoPrev from "./assets/images/ico_prev_blue_h48.png";

const fonts = {
    KoPubWorld: "KoPubWorld",
    SourceCodePro: "SourceCodePro",
};

type GlobalStyleProps = {
    color?: string;
    background?: string;

}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
        font-family: ${fonts.KoPubWorld}, arial, sans-serif;
        font-size: medium;
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: inherit;
    }

    html {
        --themeTextColor: #00174f;
        --themeTextHoverColor: #01123e;
        --themeBgLightColor: #f9fafb;
        --themeBgSmLightColor: #e5e7ed;
        --themeScrollBgColor: #f1f4f8;
        --themeSubTextColor: #5a5c66;
        --themeSearchKeywordBgColor: #f1f4f8;
        --themeBgRecoPickColor: #f1f4f8;
        --themeRefreshColor: #969696;
        --themeDimColor: #a5aabc;
        --themeRegularColor: #a5aabc;
        --themePercentColor: #cc0c2f;
        --swiperPrevUrl: url(${icoPrev});
        --swiperNextUrl: url(${icoNext});
    }
    
    body {
        box-sizing: border-box;
    }
    
    header {
        min-width: 1280px;
        max-width: 1920px;
        padding: 0 80px;
        margin: 0 auto;

        position: relative;
    }

    article, aside, details, figcaption, figure, footer, header, main, menu, nav, section {
    display: block;
}
    
    nav {
        padding-bottom: 16px;
    }

    a {
        text-decoration: none;
        color: #00174f;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
    }

    img, fieldset {
    border: 0;
}

    ul > li {
        list-style: none !important;
    }

        
    button {
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        border: 0;
        border-radius: 0;
        vertical-align: top;
        font-weight: 900;

        cursor: pointer;

        color: ${(props) => props.color || "#000"};
        background: ${(props) => props.background || "transparent"};

    }

    legend, caption {
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin-top: -1px;
    padding: 0;
    font-size: 0;
    line-height: 0;
}
    .hide {
        display: none !important;
    }

    .active {
        display: block !important;
        z-index: 999;
    }

    .clear {
        clear: both;
    }
`;
