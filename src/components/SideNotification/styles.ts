import styled from 'styled-components';

export const Content = styled('div')<{ estado: boolean }>`
  display: flex;
  flex-direction: column;
  z-index: 2;
  top: 12vh;
  right: 2vh;
  transition: 0.4s;
  display: flex;
  position: fixed;
  background: #fff;
  width: 22vw;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.28);
  border-radius: 3px;
  opacity: 0;
  display: none;

  ${props => props.estado && 'display: flex; opacity: 1;'}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 20px 14px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #333333;
`;

export const ViewMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  border-top: 1px solid rgba(196, 196, 196, 0.5);
  color: #30b4e5;
  font-weight: 700;
`;
