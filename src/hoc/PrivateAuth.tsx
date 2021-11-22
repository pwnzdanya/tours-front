import React, { ReactElement } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../hooks/appSelector';

interface IPrivateAuth {
  children: ReactElement;
}

export const PrivateAuth: React.FC<IPrivateAuth> = ({ children }) => {
  const location = useLocation();
  const isAuth = useAppSelector(state => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};
