import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import Product from "../../pages/Product";
import Main from "../../pages/Main";
import Cart from "../../pages/Cart";
import Men from "../../pages/Men";

function App() {
    
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
                    <GlobalStyle />
                    <div className="App">
                        <Routes>
                            <Route exact={true} path="/" element={<Main />} />
                            <Route
                                path="/product/:productId"
                                element={<Product />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/men" element={<Men />} />
                            <Route path="/product/NM003" element={<Product />} />
                            <Route path="/product/NW003" element={<Product />} />
                            <Route path="/product/NT003" element={<Product />} />
                            <Route path="/product/NK003" element={<Product />} />
                            <Route path="/product/NS003" element={<Product />} />
                            <Route path="/product/NG003" element={<Product />} />
                        </Routes> 
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
