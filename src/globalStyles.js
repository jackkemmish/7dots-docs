import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: inherit;
    }

    *:before {
        box-sizing: inherit;
    }

    *:after {
        box-sizing: inherit;
    }

    html {
        font-family: 'Poppins', sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font: 112.5%/1.45em 'Poppins', sans-serif;
        box-sizing: border-box;
        overflow-y: scroll;
    }

    body {
        margin: 0;
        color: hsla(0, 0%, 0%, 0.8);
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        font-feature-settings: "kern", "liga", "clig", "calt";
    }
`

export default GlobalStyle
