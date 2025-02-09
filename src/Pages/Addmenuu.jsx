import React, { useState } from 'react';
import Addmenu from '../Components/Addmenu/Addmenu'
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
const Addmenuu = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
        <div className="layout-container">
          <Sidebar onToggle={setSidebarWidth} />
          <Searchbar sidebarWidth={sidebarWidth} />
          <Addmenu sidebarWidth={sidebarWidth} />
        </div>
      );
}

export default Addmenuu