import { Container } from './styles';

interface IProps {
  FunctionClick: any;
  children: any;
}

const Button: React.FC<IProps> = ({ FunctionClick, children }: IProps) => {
  return <Container onClick={FunctionClick}>{children}</Container>;
};

export default Button;
