import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    :root {
        --main-font:1.6rem;

        --gray-line-op100:rgba(205,205,205, 1);
        --tertiary-100:rgba(124,160,210, 1);
        --tertiary-80:rgba(124,160,210, 0.8);
        --tertiary-60:rgba(124,160,210, 0.6);
        --tertiary-40:rgba(124,160,210, 0.4);
        --tertiary-20:rgba(124,160,210, 0.2);
        --tertiary-10:rgba(124,160,210, 0.1);

        --gray-base-100:rgba(146,146,146, 1);
        --gray-base-80:rgba(146,146,146, 0.8);
        --gray-base-60:rgba(146,146,146, 0.6);
        --gray-base-40:rgba(146,146,146, 0.4);
        --gray-base-20:rgba(146,146,146, 0.2);
        --gray-base-10:rgba(146,146,146, 0.1);

    }
    html { font-size:62.5%}
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
        font-size: var(--main-font);
    }
    button {
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
    
    
`;

export default GlobalStyled;
