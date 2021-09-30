import { useState, createContext, useContext } from 'react';

interface IBudgetContext {
  Id: any;
  setId: React.Dispatch<React.SetStateAction<any>>;
  Budget: any;
  setBudget: React.Dispatch<React.SetStateAction<any>>;
}

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const BudgetProvider: React.FC = ({ children }: any) => {
  const [Id, setId] = useState('');
  const [Budget, setBudget] = useState('');
  return (
    <BudgetContext.Provider
      value={{
        Id,
        setId,
        Budget,
        setBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

const useBudgetContext = (): IBudgetContext => {
  const context = useContext(BudgetContext);
  const { Id, setId, Budget, setBudget } = context;
  return {
    Id,
    setId,
    Budget,
    setBudget,
  };
};

export default BudgetProvider;
export { useBudgetContext };
