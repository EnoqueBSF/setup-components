import { usePageContext } from '~/context/PageContext';

import { ElementNotification } from '~/components';

import NotificationJSON from '~/Notification.json';
import { Content, Header, Title, ViewMore } from './styles';

const SideNotification: React.FC = () => {
  const { CollapseNotification } = usePageContext();

  return (
    <Content estado={CollapseNotification} className="notification">
      <Header>
        <Title>Notificação</Title>
      </Header>
      {NotificationJSON.map(notification => (
        <ElementNotification
          id={notification.id}
          title={notification.title}
          message={notification.message}
          created_at={notification.created_at}
        />
      ))}
      <ViewMore>
        <button type="button">Ver Mais</button>
      </ViewMore>
    </Content>
  );
};

export default SideNotification;
