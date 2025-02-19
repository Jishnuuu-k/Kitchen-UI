import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCog } from "react-icons/fa";
import { BsArrowsAngleContract, BsPeople } from "react-icons/bs";
import { TbCategory, TbReport, TbCube } from "react-icons/tb";
import { FiShoppingCart, FiPieChart } from "react-icons/fi";
import { VscCoffee } from "react-icons/vsc";
import { IoArrowRedoOutline } from "react-icons/io5";

import "./sidebar.css";

const Sidebar = ({ onToggle }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Check if current route matches and set active menu accordingly
  useEffect(() => {
    const path = location.pathname;
    
    // Set active main menu based on path
    if (path.includes('/dashboard')) setOpenMenu(null);
    else if (path.includes('/pos')) setOpenMenu(null);
    else if (path.includes('/menu') || path.includes('/addons')) setOpenMenu('foodMenu');
    else if (path.includes('/category')) setOpenMenu('foodCategory');
    else if (path.includes('/table')) setOpenMenu('dineTable');
    else if (path.includes('/user')) setOpenMenu('people');
    else if (path.includes('/report')) setOpenMenu(null);
    else if (path.includes('/profile') || path.includes('/tax')) {
      setOpenMenu('settings');
      // Set active submenu
      if (path.includes('/profile')) setOpenSubMenu('userDetails');
      else if (path.includes('/tax')) setOpenSubMenu('taxSettings');
    }
  }, [location]);

  const toggleSidebar = () => {
    const newWidth = isOpen ? 50 : 250;
    setIsOpen(!isOpen);
    onToggle(newWidth);
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    if (openMenu !== menu) setOpenSubMenu(null); // Reset submenu only when opening a new menu
  };

  const toggleSubMenu = (subMenu) => {
    setOpenSubMenu(openSubMenu === subMenu ? null : subMenu);
  };

  // Helper to check if a menu item is active
  const isActive = (path) => location.pathname === path;

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
        <Link to="/dashboard">
          <div 
            className={`menu-options ${isActive('/dashboard') ? 'active' : ''}`} 
            data-title="Dashboard"
          >
            <TbCube className="icon" />
            {isOpen && <span>Dashboard</span>}
          </div>
        </Link>

        <Link to="/pos">
          <div 
            className={`menu-options ${isActive('/pos') ? 'active' : ''}`}
            data-title="POS"
          >
            <FiPieChart className="icon" />
            {isOpen && <span>POS</span>}
          </div>
        </Link>

        {/* Food Menu */}
        <div 
          className={`menu-options ${openMenu === "foodMenu" ? 'active' : ''}`} 
          onClick={() => toggleMenu("foodMenu")}
          data-title="Food Menu"
        >
          <FiShoppingCart className="icon" />
          {isOpen && <span>Food Menu</span>}
          {isOpen && <IoArrowRedoOutline className={`arrow-icon ${openMenu === "foodMenu" ? "rotated" : ""}`} />}
        </div>
        <div className={`submenu ${openMenu === "foodMenu" ? "open" : ""}`}>
          <Link to="/listmenu" className={isActive('/listmenu') ? 'active' : ''}>List Menu</Link>
          <Link to="/addmenu" className={isActive('/addmenu') ? 'active' : ''}>Add Menu</Link>
          <Link to="/listaddons" className={isActive('/listaddons') ? 'active' : ''}>List Add-Ons</Link>
          <Link to="/addaddons" className={isActive('/addaddons') ? 'active' : ''}>Add Add-Ons</Link>
        </div>

        {/* Food Category */}
        <div 
          className={`menu-options ${openMenu === "foodCategory" ? 'active' : ''}`} 
          onClick={() => toggleMenu("foodCategory")}
          data-title="Food Category"
        >
          <TbCategory className="icon" />
          {isOpen && <span>Food Category</span>}
          {isOpen && <IoArrowRedoOutline className={`arrow-icon ${openMenu === "foodCategory" ? "rotated" : ""}`} />}
        </div>
        <div className={`submenu ${openMenu === "foodCategory" ? "open" : ""}`}>
          <Link to="/listcategory" className={isActive('/listcategory') ? 'active' : ''}>List Category</Link>
          <Link to="/addcategory" className={isActive('/addcategory') ? 'active' : ''}>Add Category</Link>
        </div>

        {/* Dine-in Table */}
        <div 
          className={`menu-options ${openMenu === "dineTable" ? 'active' : ''}`} 
          onClick={() => toggleMenu("dineTable")}
          data-title="Dine-in Table"
        >
          <BsArrowsAngleContract className="icon" />
          {isOpen && <span>Dine-in Table</span>}
          {isOpen && <IoArrowRedoOutline className={`arrow-icon ${openMenu === "dineTable" ? "rotated" : ""}`} />}
        </div>
        <div className={`submenu ${openMenu === "dineTable" ? "open" : ""}`}>
          <Link to="/listtable" className={isActive('/listtable') ? 'active' : ''}>List Table</Link>
          <Link to="/addtable" className={isActive('/addtable') ? 'active' : ''}>Add Table</Link>
        </div>

        {/* People */}
        <div 
          className={`menu-options ${openMenu === "people" ? 'active' : ''}`} 
          onClick={() => toggleMenu("people")}
          data-title="People"
        >
          <BsPeople className="icon" />
          {isOpen && <span>People</span>}
          {isOpen && <IoArrowRedoOutline className={`arrow-icon ${openMenu === "people" ? "rotated" : ""}`} />}
        </div>
        <div className={`submenu ${openMenu === "people" ? "open" : ""}`}>
          <Link to="/users" className={isActive('/users') ? 'active' : ''}>User</Link>
          <Link to="/adduser" className={isActive('/adduser') ? 'active' : ''}>Add User</Link>
        </div>

        {/* Reports */}
        <Link to="/report">
          <div 
            className={`menu-options ${isActive('/report') ? 'active' : ''}`}
            data-title="Reports"
          >
            <TbReport className="icon" />
            {isOpen && <span>Reports</span>}
          </div>
        </Link>

        {/* Settings */}
        <div 
          className={`menu-options ${openMenu === "settings" ? 'active' : ''}`} 
          onClick={() => toggleMenu("settings")}
          data-title="Settings"
        >
          <FaCog className="icon" />
          {isOpen && <span>Settings</span>}
          {isOpen && <IoArrowRedoOutline className={`arrow-icon ${openMenu === "settings" ? "rotated" : ""}`} />}
        </div>
        <div className={`submenu ${openMenu === "settings" ? "open" : ""}`}>
          <div 
            className={`submenu-option ${openSubMenu === "userDetails" ? 'active' : ''}`} 
            onClick={() => toggleSubMenu("userDetails")}
          >
            <span>User Details</span>
            {isOpen && <IoArrowRedoOutline className={`arrow-icon ${openSubMenu === "userDetails" ? "rotated" : ""}`} />}
          </div>
          <div className={`nested-submenu ${openSubMenu === "userDetails" ? "open" : ""}`}>
            <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>Profile</Link>
          </div>

          <div 
            className={`submenu-option ${openSubMenu === "taxSettings" ? 'active' : ''}`} 
            onClick={() => toggleSubMenu("taxSettings")}
          >
            <span>Tax Settings</span>
            {isOpen && <IoArrowRedoOutline className={`arrow-icon ${openSubMenu === "taxSettings" ? "rotated" : ""}`} />}
          </div>
          <div className={`nested-submenu ${openSubMenu === "taxSettings" ? "open" : ""}`}>
            <Link to="/addtaxslab" className={isActive('/addtaxslab') ? 'active' : ''}>Add Tax Slab</Link>
            <Link to="/viewtaxslab" className={isActive('/viewtaxslab') ? 'active' : ''}>View Tax Slab</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;