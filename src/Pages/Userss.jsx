import React, { useState } from 'react';

import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Users from '../Components/Users/Users';
const Userss = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Users sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Userss