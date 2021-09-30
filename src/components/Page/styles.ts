import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled('div')<{ fix: boolean }>`
  display: flex;
  flex-direction: column;

  ${props =>
    props.fix && 'position: absolute; top: 10vh; left: 20vw; width: 79vw;'}
`;
