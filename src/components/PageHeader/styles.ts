import styled from 'styled-components';

export const Header = styled.div`
  margin: 3% 3% 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    text-transform: uppercase;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 30px;
  text-transform: capitalize;
`;
