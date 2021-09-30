import { usePageContext } from '~/context/PageContext';
import { SideMenu, SideNotification } from '~/components';
import {
  Container,
  Content,
  Child,
  HeaderButton,
  ButtonSair,
  Mobile,
} from './styles';
import { useAuth } from '~/context/AuthContext';
import { IconClient, IconMenu } from '~/assets/Icons';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const {
    setCollapseMenu,
    setCollapseNotification,
    CollapseMenu,
    CollapseNotification,
    Fixed,
  } = usePageContext();

  window.onclick = (e: any) => {
    const { target } = e;
    const alvMenu = target.classList.contains('menu');
    const paiMenu = target.closest('.menu');
    const alvNotf = target.classList.contains('notification');
    const paiNotf = target.closest('.notification');
    if (CollapseMenu && !alvMenu && !paiMenu) {
      setCollapseMenu(false);
    }
    if (CollapseNotification && !alvNotf && !paiNotf) {
      setCollapseNotification(false);
    }
    return null;
  };

  return (
    <Child>
      <SideMenu />
      <SideNotification />
      <Container>
        <Content>
          <HeaderButton
            state={CollapseMenu}
            fix={Fixed}
            className="menu"
            onClick={() => setCollapseMenu(true)}
          >
            <IconMenu fill="white" />
          </HeaderButton>
        </Content>
        <Content />
        <Content>
          <Mobile>
            <ButtonSair onClick={logout}>Sair</ButtonSair>
          </Mobile>
        </Content>
      </Container>
    </Child>
  );
};

export default Header;
