import React, { useRef } from 'react';

import { IconMenu, IconPin } from '~/assets/Icons';
import { Content, Menu, Header, HeaderButton } from './styles';
import { usePageContext } from '~/context/PageContext';
import { ItemMenu } from '~/components';

const SideMenu: React.FC = () => {
  const { CollapseMenu, setCollapseMenu, Fixed, setFixed } = usePageContext();
  const MenuRef = useRef(null);
  // window.onclick = (e: any) => {
  //   const { target } = e;
  //   const oi = MenuRef.current.children;
  //   // console.log(target);
  //   console.log(oi);
  //   // const alvMenu = target.MenuRef;
  //   // const paiMenu = target.MenuRef.closest;
  //   if (CollapseMenu && target !== MenuRef.current) {
  //     // setCollapseMenu(false);
  //   }
  //   return null;
  // };

  return (
    <Content estado={CollapseMenu} fix={Fixed} ref={MenuRef} className="menu">
      <Header>
        <HeaderButton onClick={() => setCollapseMenu(false)}>
          <IconMenu fill="#323232" />
        </HeaderButton>
        <HeaderButton onClick={() => setFixed(!Fixed)}>
          <IconPin />
        </HeaderButton>
      </Header>
      <Menu ref={MenuRef}>
        <ItemMenu />
      </Menu>
    </Content>
  );
};

export default SideMenu;
