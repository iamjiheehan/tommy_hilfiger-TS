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
                        </Routes>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
