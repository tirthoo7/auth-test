// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import UploadPdfButton from "./upload";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <YourComponent /> */}
    <UploadPdfButton />
    <App />
    {/* <AuthorSearch /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
