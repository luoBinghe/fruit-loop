import React from "react";
import { Route, BrowserRouter, Routes as Location } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from './components/Login';
import Card from './components/Card';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header />
      <Location>
        <Route element={<Login />} path="/login" exact />
        <Route element={<Dashboard />} path="/" exact />
        <Route element={<Card />} path="/card" exact />
      </Location>
    </BrowserRouter>
  )
}

export default Routes;
