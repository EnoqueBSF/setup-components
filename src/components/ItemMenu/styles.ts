import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DropDown = styled.div`
  margin-left: 30px;
  font-weight: normal;
`;

export const Container = styled.div``;

export const ButtonMenu = styled.button`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 15px 26px;
  font-size: 14px;
  color: #323232;
  text-decoration: none;

  svg {
    width: 20px;
    height: auto;
    color: #323232;
    margin-right: 12px;
  }
`;

export const ButtonMenuContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SessionTitle = styled.div`
  padding: 10px 15px;
  font-weight: 300;
  font-size: 14px;
`;

export const LinkMenu = styled(NavLink)`
  display: flex;
  align-items: center;

  padding: 15px 26px;
  font-size: 14px;
  color: #323232;
  text-decoration: none;

  svg {
    width: 20px;
    height: auto;
    color: #323232;
    margin-right: 12px;
  }

  &.active {
    border-left: 6px solid #30b4e5;
    padding: 15px 20px;
    margin-left: 0 !important;
  }
`;
