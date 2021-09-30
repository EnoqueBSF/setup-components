import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    span {
      transform: none !important;
      position: static;
      font-size: 2.5vh;
    }
  }
`;
