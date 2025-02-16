import React, { useState } from 'react';
import Listaddons from '../Components/Listaddons/Listaddons'
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
const Listaddonss = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Listaddons sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Listaddonss