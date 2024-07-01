import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { ToastProvider } from "./context/toastContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastProvider>
        <ToastContainer />
          <Routes>
            <Route path="/Signin" element={<Signin />} />
            <Route path="/" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
