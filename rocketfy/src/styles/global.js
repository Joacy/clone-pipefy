import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        background: #ecf1f8;
        color: #333;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;