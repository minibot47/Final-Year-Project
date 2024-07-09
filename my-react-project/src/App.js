import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { ToastProvider } from "./context/toastContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Animals from "./pages/Animals";
import Settings from "./pages/Settings";
import Appointments from "./pages/Appointments";

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
            <Route path="/Dashboard/animals" element={<Animals />} />
            <Route path="/Dashboard/settings" element={<Settings />} />
            <Route path="/Dashboard/appointment" element={<Appointments />} />
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
