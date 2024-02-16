import React from 'react';
import GlobalStyle from '../styles/globals';
import LoginPage from './login';

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LoginPage />
    </>

  );
};

export default Home;
