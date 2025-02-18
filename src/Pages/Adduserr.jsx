import React, { useState } from 'react';
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Adduser from '../Components/Adduser/Adduser';
const Adduserr = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Adduser sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Adduserr