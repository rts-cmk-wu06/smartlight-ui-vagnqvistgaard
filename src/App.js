//import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import Ctpanel from './pages/Ctpanel';
import Broompanel from './pages/Broompanel';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Ctpanel />} />
        <Route path="/broompanel" element={<Broompanel />} />
      </Routes>
    </div>
  );
}

export default App;
