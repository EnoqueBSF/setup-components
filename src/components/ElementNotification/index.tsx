import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/esm/locale/pt/index.js';

import { Container } from './styles';

type LinkProps = {
  id: number;
  title: string;
  message: string;
  created_at: string;
};

const ElementNotification: React.FC<LinkProps> = ({
  id,
  title,
  message,
  created_at,
}: LinkProps) => {
  const time = formatDistance(parseISO(created_at), new Date(), {
    addSuffix: true,
    locale: pt,
  });
  return (
    <Container key={id}>
      <span>
        <b>{title}</b>
      </span>
      <span>{message}</span>
      <span>{time}</span>
    </Container>
  );
};

export default ElementNotification;
