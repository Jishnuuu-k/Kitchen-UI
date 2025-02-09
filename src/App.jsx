import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Bannerr from './Pages/Bannerr'
import Kitchendashboardd from './Pages/Kitchendashboardd'
import Listmenuu from './Pages/Listmenuu';
import Addmenuu from './Pages/Addmenuu';

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={ <Bannerr/> } />
        <Route path="/kitchendashboard" element={ <Kitchendashboardd/> } />
        <Route path="/listmenu" element={ <Listmenuu/> } />
        <Route path="/Addmenu" element={ <Addmenuu/> } />
      </Routes>
    </>
  );
}

export default App