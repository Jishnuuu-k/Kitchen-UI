import React, { useState } from 'react';
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Foodcategory from '../Components/Foodcategory/Foodcategory';
const Foodcategoryy = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Foodcategory sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Foodcategoryy