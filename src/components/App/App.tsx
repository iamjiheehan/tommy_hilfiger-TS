import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import Product from "../../pages/Product";
import Main from "../../pages/Main";
import Cart from "../../pages/Cart";
import Sub from "../../pages/Sub";

function App(): JSX.Element {
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
                    <GlobalStyle />
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route
                                path="/product/:productId"
                                element={<Product />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/sub/:tabId" element={<Sub />} />
                        </Routes>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
