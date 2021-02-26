import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: ${({ secondary }) => secondary};

  @media screen and (max-width: 800px) {
    min-height: 50vh;
    width: 100vw;
  }
`;

export const Letter = styled.h1`
  font-size: 20em;
  margin-left: 50px;
  font-family: ${({ family }) => family};
  color: ${({ primary }) => primary};

  @media screen and (max-width: 800px) {
    font-size: 9em;
    margin-left: 15px;
  }
`;
