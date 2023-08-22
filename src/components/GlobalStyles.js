import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;

  @media (min-width: 480px) and (max-width: 1024px) {
    font-size: 14px;
  }

   @media screen and (max-width: 479px) {
    font-size: 12px;
  }
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;
}
`;


