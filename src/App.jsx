import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Bannerr from './Pages/Bannerr'
import Kitchendashboardd from './Pages/Kitchendashboardd'
import Listmenuu from './Pages/Listmenuu';
import Addmenuu from './Pages/Addmenuu';
import Listaddonss from './Pages/Listaddonss'
import Addaddonss from './Pages/Addaddonss'
import Reportt from './Pages/Reportt';
import Poss from './Pages/Poss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={ <Bannerr/> } />
        <Route path="/kitchendashboard" element={ <Kitchendashboardd/> } />
        <Route path="/listmenu" element={ <Listmenuu/> } />
        <Route path="/Addmenu" element={ <Addmenuu/> } />
        <Route path="/listaddons" element={ <Listaddonss/> } />
        <Route path="/addaddons" element={ <Addaddonss/> } />
        <Route path="/report" element={ <Reportt/> } />
        <Route path="/pos" element={ <Poss/> } />
      </Routes>
    </>
  );
}

export default App