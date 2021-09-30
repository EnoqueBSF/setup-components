import styled from 'styled-components';

export const Content = styled('div')<{ estado: boolean; fix: boolean }>`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.28);
  border-radius: 3px;

  width: 20vw;
  min-width: 280px;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 1s;

  z-index: 999;

  ${props => props.estado && !props.fix && 'left: 0;'}
  ${props => props.fix && `left: 0; `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10vh;
  padding: 0 2vh;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  .false {
    display: none;
  }
`;

export const HeaderButton = styled.button`
  width: auto;
  height: 4vh;
  width: 4vh;
  margin: 1vh;
  display: flex;
  align-items: center;
  font-size: 4vh;
  color: #333333;
`;
