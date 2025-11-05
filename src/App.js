import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/scss/app.scss";
import Routes from "./routes/routes";
import { BrowserRouter, HashRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
