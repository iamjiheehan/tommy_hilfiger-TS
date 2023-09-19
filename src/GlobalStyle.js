import { createGlobalStyle } from "styled-components";

const fonts = {
    KoPubWorld: "KoPubWorld",
    SourceCodePro : "SourceCodePro"
}

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: ${fonts.KoPubWorld}, arial, sans-serif;
        font-size: 12px;
        margin: 0;
        padding: 0;
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
    }
    
    body {
        box-sizing: border-box;
    }
    
    header {
        min-width: 1280px;
        max-width: 1920px;
        padding: 0 80px;
        margin: 0 auto;
    }

    section {
        /* min-height: 800px; */
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

    button {
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        border: 0;
        border-radius: 0;
        vertical-align: top;
        font-weight: 900;

        cursor: pointer;

        color: ${(props) => props.color || '#000'};
        background: ${(props) => props.background || 'transparent'};

    }

`;
