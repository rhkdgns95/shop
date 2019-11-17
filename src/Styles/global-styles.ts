import { createGlobalStyle } from "./typed-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
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
        list-style: none;
        color: inherit;
    }
    
`;