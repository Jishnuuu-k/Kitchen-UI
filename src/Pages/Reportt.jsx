import React, { useState } from 'react';

import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Report from '../Components/Report/Report';
const Reportt = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Report sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Reportt