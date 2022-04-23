import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Lato";
    }
`;

export const PageTitle = styled.h1`
    font-size: 2.8em;
    color: #222;
    font-weight: 300;
`;

export const SubTitle = styled.p`
  color: #c0c2d2;
  font-size: 1em;
  text-transform: capitalize;
  margin: 0;
  margin-top: 3px;
`;
