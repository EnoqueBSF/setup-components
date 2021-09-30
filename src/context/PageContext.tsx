import { useState, createContext, useContext } from 'react';

interface IPageContext {
  CollapseMenu: boolean;
  setCollapseMenu: React.Dispatch<React.SetStateAction<boolean>>;
  CollapseNotification: boolean;
  setCollapseNotification: React.Dispatch<React.SetStateAction<boolean>>;
  Fixed: boolean;
  setFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageContext = createContext<IPageContext>({} as IPageContext);

const PageProvider: React.FC = ({ children }: any) => {
  const [CollapseMenu, setCollapseMenu] = useState(false);
  const [CollapseNotification, setCollapseNotification] = useState(false);
  const [Fixed, setFixed] = useState(false);
  return (
    <PageContext.Provider
      value={{
        CollapseMenu,
        setCollapseMenu,
        CollapseNotification,
        setCollapseNotification,
        Fixed,
        setFixed,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

const usePageContext = (): IPageContext => {
  const context = useContext(PageContext);
  const {
    CollapseMenu,
    setCollapseMenu,
    CollapseNotification,
    setCollapseNotification,
    Fixed,
    setFixed,
  } = context;
  return {
    CollapseMenu,
    setCollapseMenu,
    CollapseNotification,
    setCollapseNotification,
    Fixed,
    setFixed,
  };
};

export default PageProvider;
export { usePageContext };
