import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
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
        min-height: 800px;
    }

    nav {
        padding-bottom: 16px;
    }

    a {
        text-decoration: none;
        color: #00174f;
    }

    span {
        color: #00174f;
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
        font-family: "pre", "돋움", Dotum, arial, sans-serif;
        vertical-align: top;

        /* color: ${(props) => props.color || '#000'};
        background: ${(props) => props.background || 'transparent'}; */
    }

`;
