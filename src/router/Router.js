import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import Signup from "../components/signupPage/Signup";
import LoginPage from "../components/loginPage/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<HomePage />}></Route>
        <Route exact path={"/signup"} element={<Signup />}></Route>
        <Route exact path={"/login"} element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
