import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
    filter: drop-shadow(3px 3px #40453f);
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    background-image: #ebfeff;
    background-size: 100%;
    filter: drop-shadow(3px 3px #40453f);
    font-size: 5rem;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #9a929c, #455559);
    border: 2px solid black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0px 40px;
  }

  .start {
    max-width: 200px;
  }
`;
