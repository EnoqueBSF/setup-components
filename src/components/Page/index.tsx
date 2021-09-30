import { usePageContext } from '~/context/PageContext';
import { Header } from '~/components';

import { Content, Container } from './styles';

interface IProps {
  children: React.ReactNode;
}

const Page: React.FC<IProps> = ({ children }: IProps) => {
  const { Fixed } = usePageContext();

  return (
    <Container>
      <Header />
      <Content fix={Fixed}>{children}</Content>
    </Container>
  );
};

export default Page;
