import React, { ReactElement, useEffect } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { Tour, TourCard } from './components';
import { Header } from './components/Header/Header';
import { ErrorSnackbar } from './components/UI/ErrorSnackbar';
import { Loader } from './components/UI/Loader';
import Authorized from './hoc/Authorized';
import { PrivateAuth } from './hoc/PrivateAuth';
import { useAppDispatch } from './hooks/appDispatch';
import { useAppSelector } from './hooks/appSelector';
import AuthEmail from './pages/Auth/AuthEmail';
import { AuthForgot } from './pages/Auth/AuthForgot';
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import AuthNewPassword from './pages/AuthNewPassword/AuthNewPassword';
import { Error404 } from './pages/error404/error404';
import Home from './pages/Home/Home';
import { me } from './store/auth/actions';
import { Container } from './styled/Container';
import { Nullable } from './types/Nullable';

import { GlobalStyle } from 'styled/global';
import { Overlay } from 'styled/Overlay';
import { myTheme } from 'styled/theme';

const Main = styled.main``;

const App = (): Nullable<ReactElement> => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const isInitializedApp = useAppSelector(state => state.app.isInitializedApp);
  useEffect(() => {
    dispatch(me());
  }, []);

  return isInitializedApp ? (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header user={user} />
      <Container>
        <Main>
          <Routes>
            <Route path="/" element={<TourCard />}>
              <Route
                path="/tours/:id"
                element={
                  <PrivateAuth>
                    <Tour />
                  </PrivateAuth>
                }
              />
            </Route>
            <Route
              path="/auth/signUp"
              element={
                <Authorized>
                  <SignUpPage />
                </Authorized>
              }
            />
            <Route
              path="/auth/signIn"
              element={
                <Authorized>
                  <SignInPage />
                </Authorized>
              }
            />
            <Route
              path="/auth/forgotPassword"
              element={
                <Authorized>
                  <AuthForgot />
                </Authorized>
              }
            />
            <Route
              path="/email"
              element={
                <Authorized>
                  <AuthEmail />
                </Authorized>
              }
            />
            <Route
              path="/auth/resetPassword/:token"
              element={
                <Authorized>
                  <AuthNewPassword />
                </Authorized>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Navigate to="/error404" />} />
            <Route path="/error404" element={<Error404 />} />
          </Routes>
          <ErrorSnackbar timeout={3000} />
        </Main>
      </Container>
    </ThemeProvider>
  ) : (
    <Overlay>
      <Loader />
    </Overlay>
  );
};

export default App;
