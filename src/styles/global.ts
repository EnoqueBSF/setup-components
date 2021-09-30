import { createGlobalStyle } from 'styled-components';

import ComfortaaBold from '~/assets/Fonts/Comfortaa-Bold.ttf';
import ComfortaaLigth from '~/assets/Fonts/Comfortaa-Light.ttf';
import ComfortaaRegular from '~/assets/Fonts/Comfortaa-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Comfortaa';
    font-weight: 700;
    font-style: normal;
    src: local('Comfortaa'),
      url(${ComfortaaBold}) format('truetype');
  }
  @font-face {
    font-family: 'Comfortaa';
    font-weight: 300;
    font-style: normal;
    src: local('Comfortaa'),
      url(${ComfortaaLigth}) format('truetype');
  }
  @font-face {
    font-family: 'Comfortaa';
    font-weight: normal;
    font-style: normal;
    src: local('Comfortaa'),
      url(${ComfortaaRegular}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
    color: #323232;
  }

  body, input, button {
    font: 16px Comfortaa, sans-serif;
    font-weight: normal;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
