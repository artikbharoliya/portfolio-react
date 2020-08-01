
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
   // align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    //justify-content: center;

    margin: 0;
    padding: 0;
    font-family: 'PT Sans Narrow', sans-serif;

  }`