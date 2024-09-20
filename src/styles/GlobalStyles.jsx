import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); /* Example font for titles */

    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
    }

    h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif; /* Set Roboto font for titles */
        text-transform: uppercase;
    }

    p {
        font-family: 'Poppins', sans-serif; /* Set Poppins font for paragraphs */
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyles;
