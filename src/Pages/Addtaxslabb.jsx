import React, { useState } from 'react';
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Addtaxslab from '../Components/Addtaxslab/Addtaxslab';
const Addtaxslabb = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Addtaxslab sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Addtaxslabb