import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  max-height: 45px;
  padding: 3vh;

  background: #30b4e5;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  color: #ffffff;
  font-weight: 700;
  white-space: nowrap;
  svg {
    width: auto;
    height: 30px;
    margin-right: 5%;
  }
`;
