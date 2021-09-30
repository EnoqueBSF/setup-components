import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface IUser {
  accessToken: string;
  account: {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string;
    photo: boolean;
  };
}

interface IAuthContext {
  isLogged: boolean;
  signIn(): void;
  logout(): void;
  user: IUser;
}

interface AuxProps {
  children: React.ReactChild | React.ReactChildren;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
const AuthProvider: React.FC<AuxProps> = ({ children }: AuxProps) => {
  // const isAuthenticated = useIsAuthenticated();
  const [user, setUser] = useState({
    accessToken: '',
    account: { firstName: '', lastName: '', email: '', photo: false },
  } as IUser);

  const history = useHistory();
  const [isLogged, setIsLogged] = useState(false);
  const signIn = async () => {
    setIsLogged(true);
    history.push('/home');
  };

  const logout = async () => {
    setIsLogged(false);
    setUser({} as IUser);
  };

  return (
    <AuthContext.Provider value={{ isLogged, signIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
