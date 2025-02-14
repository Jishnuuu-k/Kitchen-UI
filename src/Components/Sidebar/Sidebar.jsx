import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCog } from "react-icons/fa";
import { BsArrowsAngleContract, BsPeople } from "react-icons/bs";
import { TbCategory, TbReport, TbCube } from "react-icons/tb";
import { FiShoppingCart, FiPieChart } from "react-icons/fi";
import { VscCoffee } from "react-icons/vsc";
import { IoArrowRedoOutline } from "react-icons/io5";

import "./sidebar.css";

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [foodMenuOpen, setFoodMenuOpen] = useState(false);

  const toggleSidebar = () => {
    const newWidth = isOpen ? 50 : 250;
    setIsOpen(!isOpen);
    onToggle(newWidth);
  };

  const toggleFoodMenu = () => {
    setFoodMenuOpen(!foodMenuOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="top-section">
        {isOpen && (
          <div className="logo-container">
            <VscCoffee className="Cup-icon" />
            <span className="logo">CoffyByte</span>
          </div>
        )}
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </div>

      <div className="menu">
        <div className="menu-options">
          <TbCube className="icon" />
          {isOpen && <span><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>Dashboard</Link></span>}
        </div>
        <div className="menu-options">
          <TbCube className="icon" />
          {isOpen && <span><Link to="/kitchendashboard" style={{ textDecoration: "none", color: "inherit" }}>Kitchen Dashboard</Link></span>}
        </div>
        <div className="menu-options">
          <FiPieChart className="icon" />
          {isOpen && <span><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>POS</Link></span>}
        </div>

        {/* Food Menu with Smooth Drop-down */}
        <div className="menu-options" onClick={toggleFoodMenu}>
          <FiShoppingCart className="icon" />
          {isOpen && <span>Food Menu</span>}
          {isOpen && <IoArrowRedoOutline className={`arrow-icon ${foodMenuOpen ? "rotated" : ""}`} />}
        </div>
        <div className={`submenu ${foodMenuOpen ? "open" : ""}`}>
          {isOpen && (
            <>
              <div className="submenu-option"><Link to="/listmenu" style={{ textDecoration: "none", color: "inherit" }}>List Menu</Link></div>
              <div className="submenu-option"><Link to="/Addmenu" style={{ textDecoration: "none", color: "inherit" }}>Add Menu</Link></div>
              <div className="submenu-option"><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>List Add-Ons</Link></div>
              <div className="submenu-option"><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>Add Add-Ons</Link></div>
            </>
          )}
        </div>

        <div className="menu-options">
          <TbCategory className="icon" />
          {isOpen && <span><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>Food Categories</Link></span>}
        </div>
        <div className="menu-options">
          <BsArrowsAngleContract className="icon" />
          {isOpen && <span><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>Dine-in-Table</Link></span>}
        </div>
        <div className="menu-options">
          <BsPeople className="icon" />
          {isOpen && <span><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>People</Link></span>}
        </div>
        <div className="menu-options">
          <TbReport className="icon" />
          {isOpen && <span><Link to="/report" style={{ textDecoration: "none", color: "inherit" }}>Reports</Link></span>}
        </div>
        <div className="menu-options">
          <FaCog className="icon" />
          {isOpen && <span><Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>Settings</Link></span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
