import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    button {
      outline: none;
      cursor: pointer;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
    }
    * {
      transition: all .3s ease-in-out;
    }
    html {
      font-size: 100%; //1rem = 16px
      box-sizing: border-box;
      --color-primary: ${props => props.theme.colors.main};
      --color-primary-dark: ${props => props.theme.colors.dark};
      --color-primary-light: ${props => props.theme.colors.light};
      --color-primary-lighter: ${props => props.theme.colors.lighter};
      --text-color: ${props => props.theme.colors.text};
      --link-color: ${props => props.theme.colors.link};
      --border-color: rgba(176, 190, 197, 0.5);
      --shadow-color: rgba(0, 0, 0, 0.2);
      --shadow-color-dark: rgba(0, 0, 0, 0.25);
      --white: ${props => props.theme.colors.white};
      --black: ${props => props.theme.colors.black};
      --button: ${props => props.theme.colors.button};
      --button-on-hover: ${props => props.theme.colors.buttonOnHover};
    }
    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      height: 100vh;
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`

export default GlobalStyle
