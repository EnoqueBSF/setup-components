/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from 'react';
import reactDom from 'react-dom';
import { Container, Overlay } from './styles';

interface IProps {
  children: React.ReactChild | React.ReactChildren;
}

const Modal = ({ children }: IProps) => {
  return reactDom.createPortal(
    <Overlay>
      <Container>{children}</Container>
    </Overlay>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
