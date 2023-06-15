import { lazy } from 'react';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Layout from './Layout/Layout';

import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { getCurrentUserThunk } from 'redux/auth/authOperations';
import { setAuthHeader } from 'services/connectionsAPI';

const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isToken = useSelector(selectToken);

  useEffect(() => {
    if (!isToken) return;
    setAuthHeader(isToken);
    dispatch(getCurrentUserThunk());
  }, [isToken, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
        <Route
          path="register"
          element={<PublicRoute redirectTo="/" component={<RegisterPage />} />}
        />
        <Route
          path="login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
      </Route>
    </Routes>
  );
};
