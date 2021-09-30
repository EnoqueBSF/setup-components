import { Avatar } from 'antd';
import 'antd/dist/antd.css';

import { useAuth } from '~/context/AuthContext';
import { Container } from './styles';

const User: React.FC = () => {
  const { user } = useAuth();

  const first = user.account.firstName || '';
  const last = user.account.lastName || '';
  const photo = user.account.photo || '';

  if (!photo) {
    return (
      <Container>
        <Avatar>{first.substr(0, 1) + last.substr(0, 1)}</Avatar>
      </Container>
    );
  }
  return (
    <Container>
      <Avatar src="https://graph.microsoft.com/beta/me/photo/$value" />
    </Container>
  );
};

export default User;
