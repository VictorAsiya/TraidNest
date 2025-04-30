import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;
export const Button = styled.button`
  padding: 5px 10px;
  background-color: var(--button);
  color: red;
`;
export const FixedDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(19, 4, 5, 0.4), rgba(1, 1, 10, 0.8)),
    url("/images/one.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;
  top: 0
`;


