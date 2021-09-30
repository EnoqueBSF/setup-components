import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 3%;
`;

export const Content = styled.div`
  width: 90%;
  height: 45vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 2px #2b78e4 dashed;
  border-radius: 10px;

  #Carrinho {
    color: #333;
    font-size: 8vh;
  }

  p {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin: 1% 0;
  }

  button {
    margin: 2%;
  }
`;
