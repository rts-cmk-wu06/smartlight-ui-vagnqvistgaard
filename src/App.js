
import React from 'react';
import { Route, Routes } from "react-router-dom";

import Ctpanel from './pages/Ctpanel';
import Broompanel from './pages/Broompanel';


function App() {

  return (
    <Routes>

      <Route path="/" element={<Ctpanel />} />
      <Route path="broompanel" element={<Broompanel />} />

    </Routes>
  );
}

export default App;
