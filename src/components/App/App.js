import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import Product from "../../pages/Product";
import Main from "../../pages/Main";
import Cart from "../../pages/Cart";

function App() {
    return (
        <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
            <GlobalStyle />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
