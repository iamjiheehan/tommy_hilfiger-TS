import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//https://velog.io/@cobocho/React-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-React-Router%EB%A1%9C-%EB%8B%A4%EC%A4%91-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-