import { createGlobalStyle } from 'styled-components';
import MavenProFont from '../../assets/MavenPro.ttf';
import NunitoFont from '../../assets/Nunito.ttf';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  height: 100vh;
  max-width:100vw;
  text-rendering: optimizeSpeed;
  font-size:10px;
  line-height:1.5;
  overflow-x:none;
}

  @font-face {
    font-family: MavenPro;
    font-weight:100;
    src: url(${MavenProFont});
  }
  @font-face {
    font-family: Nunito;
    src: url(${NunitoFont});
  }
`;

export default GlobalStyle;