import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '~/context/AuthContext';

interface IProps {
  component: any;
  path: string;
  isPrivate?: boolean;
  exact?: boolean;
}

const defaultProps = {
  isPrivate: false,
  exact: false,
};

const RouteWrapper: React.FC<IProps> = ({
  component: Component,
  isPrivate,
  ...rest
}: IProps) => {
  const { isLogged } = useAuth();

  if (!isLogged && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isLogged && !isPrivate) {
    return <Redirect to="/home" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={props => <Component {...props} />} />;
};

RouteWrapper.defaultProps = defaultProps;

export default RouteWrapper;
