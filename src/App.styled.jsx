import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  * {
    margin:0px;
    box-sizing:border-box;
    font-size:16px;
    font-weight:600;
  }

  html {
    position:relative;
    width:100%;
    height:100%;
  }

  body {
    position:absolute;
    min-width:100%;
    height:100%;
  }

  #root{
    width:1440px;
    height:100%;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  height: fit-content;
  /* background-color: coral; */
  font-family: 'Raleway';
`;
