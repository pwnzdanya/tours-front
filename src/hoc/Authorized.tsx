import React, { ReactElement } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../hooks/appSelector';

interface IAuthorized {
  children: ReactElement;
}
const Authorized: React.FC<IAuthorized> = ({ children }) => {
  const location = useLocation();
  const isAuth = useAppSelector(state => state.auth.isAuth);

  if (isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default Authorized;
