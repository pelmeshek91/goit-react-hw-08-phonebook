// import { lazy } from 'react';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Layout from './Layout/Layout';
import PhonebookPage from 'pages/PhonebookPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="phonebook" element={<PhonebookPage />} />
      </Route>
    </Routes>
  );
};
