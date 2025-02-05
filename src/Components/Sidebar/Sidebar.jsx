import React, { useState } from "react";
import { FaBars, FaCog } from "react-icons/fa";
import { BsArrowsAngleContract, BsPeople } from "react-icons/bs";
import { TbCategory, TbReport, TbCube } from "react-icons/tb";
import { FiShoppingCart, FiPieChart } from "react-icons/fi";
import { VscCoffee } from "react-icons/vsc";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="top-section">
        <div className="logo-container">
          <VscCoffee className="Cup-icon" />{isOpen && <span className="logo">CoffyByte</span>}
        </div>
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </div>
      <div className="menu">
        <div className="menu-options">
          <TbCube className="icon" />
          {isOpen && <span>Dashboards</span>}
        </div>
        <div className="menu-options">
          <TbCube className="icon" />
          {isOpen && <span>Kitchen Dashboard</span>}
        </div>
        <div className="menu-options">
          <FiPieChart className="icon" />
          {isOpen && <span>POS</span>}
        </div>
        <div className="menu-options">
          <FiShoppingCart className="icon" />
          {isOpen && <span>Food Menu</span>}
        </div>
        <div className="menu-options">
          <TbCategory className="icon" />
          {isOpen && <span>Food Categories</span>}
        </div>
        <div className="menu-options">
          <BsArrowsAngleContract className="icon" />
          {isOpen && <span>Dine-In-Tables</span>}
        </div>
        <div className="menu-options">
          <BsPeople className="icon" />
          {isOpen && <span>People</span>}
        </div>
        <div className="menu-options">
          <TbReport className="icon" />
          {isOpen && <span>Reports</span>}
        </div>
        <div className="menu-options">
          <FaCog className="icon" />
          {isOpen && <span>Settings</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
