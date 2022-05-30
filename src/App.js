import React from "react";
import Router from "./router/router";
import {BrowserRouter} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};