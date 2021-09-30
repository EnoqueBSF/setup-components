import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Container = styled('input')<{ state: boolean }>`
  border: 1px solid #30b4e5;

  border-radius: 5px;

  width: 100%;
  height: 45px;
  padding: 15px;

  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;

  ${props => props.state && ' border-radius: 5px 0 0 5px; border-right: 0;'}
`;

export const Icone = styled.button`
  display: flex;
  align-items: center;

  border: 1px solid #30b4e5;
  border-radius: 0 5px 5px 0;
  border-left: 0;

  height: 45px;
  padding: 15px;

  font-size: 25px;
`;
