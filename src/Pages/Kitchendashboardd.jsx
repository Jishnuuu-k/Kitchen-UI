import React, { useState } from 'react';

import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Kitchendashboard from '../Components/Kitchendashboard/Kitchendashboard'
const Kitchendashboardd = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Kitchendashboard sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Kitchendashboardd