import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div className="  ">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path={"/"} element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
