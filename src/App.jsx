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
import Foodcategoryy from './Pages/Foodcategoryy';
import Addcategoryy from './Pages/Addcategoryy';
import Listtablee from './Pages/Listtablee';
import Addtablee from './Pages/Addtablee';
import Userss from './Pages/Userss';
import Adduserr from './Pages/Adduserr';
import Profilee from './Pages/Profilee';

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
        <Route path="/listcategory" element={ <Foodcategoryy/> } />
        <Route path="/addcategory" element={ <Addcategoryy/> } />
        <Route path="/listtable" element={ <Listtablee/> } />
        <Route path="/addtable" element={ <Addtablee/> } />
        <Route path="/users" element={ <Userss/> } />
        <Route path="/adduser" element={ <Adduserr/> } />
        <Route path="/report" element={ <Reportt/> } />
        <Route path="/pos" element={ <Poss/> } />
        <Route path="/profile" element={ <Profilee/> } />
      </Routes>
    </>
  );
}

export default App