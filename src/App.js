import React, { useState } from 'react';
import { HomePage, Collections, Categories, Shop, Trending, Story, Footer } from './container';
import { Login, Navbar, SignUp } from './components';
import './App.scss';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'login', 'signup'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home'); // After login, redirect to the home page
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home'); // After logout, redirect to the home page
  };

  const renderContent = () => {
    if (currentPage === 'login') {
      return <Login setIsLoggedIn={handleLogin} />;
    } else if (currentPage === 'signup') {
      return <SignUp />;
    } else if (currentPage === 'home') {
      return (
        <>
          <HomePage />
          <Collections />
          <Categories />
          <Shop />
          <Trending />
          <Story />
          <Footer />
        </>
      );
    }
  };

  return (
    <div className="app">
      <Navbar
        isLoggedIn={isLoggedIn}
        setCurrentPage={setCurrentPage}
        handleLogout={handleLogout}
      />
      {renderContent()}
    </div>
  );
};

export default App;
