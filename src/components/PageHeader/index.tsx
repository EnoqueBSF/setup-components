import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Button } from '~/components';
import { Header, Title } from './styles';

interface IProps {
  button: string;
  title: string;
  FunctionClick: any;
}

const PageHeader: React.FC<IProps> = ({
  button,
  title,
  FunctionClick,
}: IProps) => {
  return (
    <Header>
      <Title>{title}</Title>
      <Button FunctionClick={FunctionClick}>
        <MdAdd /> {button}
      </Button>
    </Header>
  );
};

export default PageHeader;
