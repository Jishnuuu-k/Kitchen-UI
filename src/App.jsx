import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar"
import Searchbar from "./Components/Searchbar/Searchbar"
import Banner from "./Components/Banner/Banner"
import Kitchendashboard from "./Components/Kitchendashboard/Kitchendashboard"
import Listmenu from "./Components/Listmenu/Listmenu"

const Layout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(250);

  return (
    <div className="layout-container">
      <Sidebar onToggle={setSidebarWidth} />
      <Searchbar sidebarWidth={sidebarWidth} />
      {/* <Kitchendashboard sidebarWidth={sidebarWidth} /> */}
      {/* <Banner sidebarWidth={sidebarWidth} /> */}
      <Listmenu sidebarWidth={sidebarWidth}/>
    </div>
  );
};

export default Layout;
