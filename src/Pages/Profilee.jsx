import React, { useState } from 'react';
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Profile from '../Components/Profile/Profile';
const Profilee = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Profile sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Profilee