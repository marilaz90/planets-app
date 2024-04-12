import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Add the link to Google Fonts dynamically
const link = document.createElement("link");
link.rel = "preconnect";
link.href = "https://fonts.googleapis.com";
document.head.appendChild(link);
const link1 = document.createElement("link1");
link1.rel = "preconnect";
link1.href = "https://fonts.gstatic.com";
document.head.appendChild(link1);

const link2 = document.createElement("link2");
link2.rel = "stylesheet";
link2.href =
  "https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Tilt+Neon&display=swap";
document.head.appendChild(link2);

const link3 = document.createElement("link3");
link3.rel = "stylesheet";
link3.href = "https://fonts.googleapis.com/css?family=Spartan";
document.head.appendChild(link3);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
