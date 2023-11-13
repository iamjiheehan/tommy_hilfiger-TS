import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import { ThemeProvider } from "styled-components";
import Product from "../../pages/Product";
import Main from "../../pages/Main";
import Cart from "../../pages/Cart";
import Sub from "../../pages/Sub";

function App(): JSX.Element {

    
    const NotFoundContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `;
    
    const NotFoundText = styled.h1`
        text-align: center;
    `;
    
    const NotFound = () => {
        return (
        <NotFoundContainer>
            <NotFoundText>404 - Not Found</NotFoundText>
        </NotFoundContainer>
        );
    };
    
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
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
