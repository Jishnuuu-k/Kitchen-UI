import React from "react";
import "./searchbar.css";

function Searchbar({ sidebarWidth }) {
  return (
    <div className="Search-bar" style={{ marginLeft: sidebarWidth }}>
      <div className="Bisearcbar">
        <input type="text" placeholder="Search Here" className="Search-box" />
      </div>
    </div>
  );
}

export default Searchbar;
