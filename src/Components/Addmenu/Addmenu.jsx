import React from 'react'
import './addmenu.css'
function Addmenu({ sidebarWidth }) {
  return (
    <div className="MAINCONTENTFORADDMENU-BOX" style={{ marginLeft: sidebarWidth }}>
      <div className="Boxforinput-data">
        <div className="Space-box"></div>
        <div className="Space-box"></div>
        <div className="Biboxforinput-data">
          <div className="menuitems-Heading"></div>
          <div className="Databox">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addmenu