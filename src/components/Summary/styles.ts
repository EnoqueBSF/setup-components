import styled from 'styled-components';

export const Container = styled('div')<{ estado: boolean; fix: boolean }>`
  filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.22));
  position: fixed;
  display: flex;
  bottom: -68vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.7s;
  z-index: 998;

  ${props => props.estado && ' bottom: 0;'}
  ${props => props.fix && 'width: 80vw;'}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eaf7fd;
  padding: 2%;
  width: 100%;
  height: 70vh;
`;

export const Header = styled.button`
  border-radius: 5px 5px 0 0;
  background: #eaf7fd;
  height: 4vh;
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;

  @media (max-width: 769px) {
    width: 50vw;
  }
`;

export const Valor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  margin: 1vh 0;

  span {
    font-size: 32px;
    padding: 1vh;
  }
`;

export const Cliente = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #323232;

  width: 40%;
  margin: 1vh 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Desconto = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #323232;
  text-align: center;
  font-weight: 700;

  margin: 1vh 0;

  div {
    display: flex;
  }

  input,
  select {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;
    background: transparent;
    text-align: center;
    margin: 10px;
    font-weight: 700;
  }

  input {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }
`;

export const CheckDesconto = styled.div`
  margin: 1vh 0;
  font-size: 12px;
  font-weight: 700;

  display: flex;
  align-items: center;

  input {
    margin: 0 1vw;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  margin: 1vh 0;
`;
