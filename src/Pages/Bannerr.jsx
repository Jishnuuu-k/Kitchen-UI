import React, { useState } from 'react';


import Sidebar from "../Components/Sidebar/Sidebar"
import Searchbar from "../Components/Searchbar/Searchbar"
import Banner from "../Components/Banner/Banner"

const Bannerr = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
  
    return (
      <div className="layout-container">
        <Sidebar onToggle={setSidebarWidth} />
        <Searchbar sidebarWidth={sidebarWidth} />
        <Banner sidebarWidth={sidebarWidth} />
      </div>
    );
  };

export default Bannerr;