import React, { useState } from 'react';
import Listmenu from '../Components/Listmenu/Listmenu'
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
const Listmenuu = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Listmenu sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Listmenuu