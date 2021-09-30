/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import jsonMenu from '~/Menu.json';
import { SwitchIcon } from '~/components';

import {
  Container,
  DropDown,
  ButtonMenu,
  SessionTitle,
  LinkMenu,
  ButtonMenuContent,
} from './styles';

const ItemMenu: React.FC = () => {
  const [Toggle, setToggle] = useState(false);

  const Children = (item: any) => {
    const MultiChild = (child: any) => {
      if (child.children.length > 0) {
        return <>{Children(child)}</>;
      }
      return <LinkMenu to={child.link}>{child.nome}</LinkMenu>;
    };

    return (
      <>
        <ButtonMenu onClick={() => setToggle(!Toggle)}>
          <SwitchIcon name={item.icon} color="#000" />
          <ButtonMenuContent>
            {item.nome}
            <MdKeyboardArrowDown />
          </ButtonMenuContent>
        </ButtonMenu>
        {item.children.map((sub: any) => {
          return (
            <>
              <DropDown className={Toggle ? '' : 'false'}>
                {MultiChild(sub)}
              </DropDown>
            </>
          );
        })}
      </>
    );
  };

  const ChildSessions = (item: any) => {
    if (item.children.length > 0) {
      return (
        <>
          {item.children.map((child: any) => {
            if (child.children.length > 0) {
              return <>{Children(child)}</>;
            }
            return (
              <LinkMenu to={child.link} className="itensMenu">
                <SwitchIcon name={child.icon} color="#000" />
                {child.nome}
              </LinkMenu>
            );
          })}
        </>
      );
    }
    return null;
  };

  const Sessions = (item: any) => {
    if (item.session) {
      return (
        <>
          <SessionTitle>{item.nome}</SessionTitle>
        </>
      );
    }
    return null;
  };

  return (
    <>
      {jsonMenu.map(item => {
        return (
          <Container>
            {Sessions(item)}
            {ChildSessions(item)}
          </Container>
        );
      })}
    </>
  );
};

export default ItemMenu;
