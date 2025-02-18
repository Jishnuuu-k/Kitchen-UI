import React, { useState } from 'react';
import Searchbar from '../Components/Searchbar/Searchbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import Addcategory from '../Components/Addcategory/Addcategory';
const Addcategoryy = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Addcategory sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Addcategoryy