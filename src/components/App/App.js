import React from 'react';

import './App.css';
import HomePage from '../../pages/HomePage'
import Product from '../../pages/Product'

import { GlobalStyle } from '../../GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
        <React.Fragment>
          <GlobalStyle />
            <div className="App"></div>
        </React.Fragment>
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
