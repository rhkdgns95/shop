import { createGlobalStyle } from "./typed-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        overflow-y: scroll;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: ${props => props.theme.bgColor};
    }
    ul, li, a, p {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        color: inherit;
    }
    .row {
        max-width: 1100px;
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        @media(max-width: 800px) {
            width: 90%;
        }
    }
`;