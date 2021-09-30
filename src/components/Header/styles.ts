import styled from 'styled-components';

export const Child = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  padding: 1vh 2vh;
  background: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: auto;
  height: 7vh;
`;

export const HeaderButton = styled('button')<{ state: boolean; fix: boolean }>`
  display: none;
  align-items: center;
  width: auto;
  height: 4vh;
  margin: 2vh;
  font-size: 4vh;

  ${props => !props.state && !props.fix && 'display: flex'}
`;

export const ButtonSair = styled.button`
  margin: 2vh;
  color: #fff;
`;

export const UserButton = styled.div`
  display: flex;
  align-items: center;
  width: 7vh;
  height: 7vh;
  margin: 2vh;
  font-size: 4vh;
  color: #323232;
  border: 2px solid;
  border-radius: 50px;
  @media (max-width: 480px) {
    height: 5vh;
    width: 5vh;
  }
`;

export const Mobile = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;
