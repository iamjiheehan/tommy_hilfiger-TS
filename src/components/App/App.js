import React from 'react';

import './App.css';
import Product from '../../pages/Product';
import Main from '../../pages/Main';
import Cart from '../../pages/Cart';

import { GlobalStyle } from '../../GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

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
        <Route path="/" element={<Main />} />
        {/* <Route path="/product/:productId" element={<Product />} /> */}
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
