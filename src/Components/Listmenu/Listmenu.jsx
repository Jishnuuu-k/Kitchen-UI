import React from "react";
import "./listmenu.css";

function ListMenu ({ sidebarWidth }) {
  return (
    <div className="menu-container" style={{ marginLeft: sidebarWidth }}>
        <div className="Space-box"></div><div className="Space-box"></div>
      <h2 className="menu-title">Menu List</h2>
      <div className="menu-header">
        <div className="entries">
          <label>Show 
            <select>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select> entries
          </label>
        </div>
        <button className="add-menu">+ Add Menu</button>
        <input type="text" className="search-box" placeholder="Search:" />
      </div>
      <div className="table-container">
        <table className="menu-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Menu Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Diet</th>
              <th>Portion</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>102</td>
              <td className="menu-item">
                <img src="https://th.bing.com/th/id/OIP.NVXrSOrofUltgDT2Eq0C4QHaHa?rs=1&pid=ImgDetMain" alt="ice candy" className="menu-image" />
                <span>ice candy</span>
              </td>
              <td>Main Course</td>
              <td>DHS 10.0 (tax-0.48)</td>
              <td>Veg</td>
              <td>Half</td>
              <td>10</td>
              <td><span className="status available">Available</span></td>
              <td>
                <button className="edit">✏</button>
                <button className="delete">🗑</button>
              </td>
            </tr>
            <tr>
              <td>101</td>
              <td className="menu-item">
                <img src="https://th.bing.com/th/id/OIP.NVXrSOrofUltgDT2Eq0C4QHaHa?rs=1&pid=ImgDetMain" alt="Buffalo Califlower" className="menu-image" />
                <span>Buffalo Califlower</span>
              </td>
              <td>Deserts</td>
              <td>DHS 20.08 (tax-0.96)</td>
              <td>Veg</td>
              <td>Large</td>
              <td>100</td>
              <td><span className="status available">Available</span></td>
              <td>
                <button className="edit">✏</button>
                <button className="delete">🗑</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="listaddons-pagination">
        <span className="listaddons-info">
          Showing 1 to 3 of  entries
        </span>
        <div className="prevnext-box">
            <button className="listaddons-prev">Previous</button>
            <span className="listaddons-page-number">1</span>
            <button className="listaddons-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ListMenu;