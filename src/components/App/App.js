import React from 'react';

import './App.css';
import HomePage from '../../pages/HomePage/HomePage'
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
        <React.Fragment>
          <GlobalStyle />
            <div className="App">
              <HomePage />
            </div>
        </React.Fragment>
      </ThemeProvider>
    </>
  );
}

export default App;
