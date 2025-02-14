import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Bannerr from './Pages/Bannerr'
import Kitchendashboardd from './Pages/Kitchendashboardd'
import Listmenuu from './Pages/Listmenuu';
import Addmenuu from './Pages/Addmenuu';
import Reportt from './Pages/Reportt';

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={ <Bannerr/> } />
        <Route path="/kitchendashboard" element={ <Kitchendashboardd/> } />
        <Route path="/listmenu" element={ <Listmenuu/> } />
        <Route path="/Addmenu" element={ <Addmenuu/> } />
        <Route path="/report" element={ <Reportt/> } />
      </Routes>
    </>
  );
}

export default App