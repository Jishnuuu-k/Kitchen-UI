import React, { useState } from 'react';
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Addtable from '../Components/Addtable/Addtable';
const Addtablee = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Addtable sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Addtablee