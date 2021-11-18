import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
  }
  
  body {
    min-height: 100vh;
    background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
  }
  
  ul {
   list-style: none;
  }
  
  h1,h2,h3,h4,h5 {
   font-family: ${({ theme }) => theme.fonts.heading}
  }
  
`;
