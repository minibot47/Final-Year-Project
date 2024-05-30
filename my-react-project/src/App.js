import React, { useState } from 'react';
import { BrowserRouter, Route,  Routes, } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
