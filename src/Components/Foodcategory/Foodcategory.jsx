import React from "react";
import "./foodcategory.css";
import { RiDeleteBin6Line,RiEdit2Line } from "react-icons/ri";

function Foodcategory({ sidebarWidth }) {
  // Sample data
  const tableData = [
    {  category: "Dessert", Adddate: "May 31, 2024" },
    {  category: "Snack", Adddate: "June 1, 2024" },
    {  category: "Snack", Adddate: "June 1, 2024" },
  ];

  return (
    <div className="listcategory-container" style={{ marginLeft: sidebarWidth }}>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <h2 className="listcategory-title">Category List</h2>

      <div className="listcategory-header">
        <div className="listcategory-entries">
          <label>
            Show 
            <select>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select> entries
          </label>
        </div>
        <button className="listcategory-add-btn">+ Add Category</button>
        <input type="text" className="listcategory-search" placeholder="Search:" />
      </div>

      <div className="listcategory-table-container">
        <table className="listcategory-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Image</th>
              <th>Category</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <td className="Listcategorymenu-item">
                    <img src="https://th.bing.com/th/id/OIP.NVXrSOrofUltgDT2Eq0C4QHaHa?rs=1&pid=ImgDetMain"  className="menu-image" />
                </td>
                <td>{item.category}</td>
                <td>
                  <span className={`listcategory-status ${item.Adddate.toLowerCase()}`}>
                    {item.Adddate}
                  </span>
                </td>
                <td>
                  <button className="listcategory-edit"><RiEdit2Line/></button>
                  <button className="listcategory-delete"><RiDeleteBin6Line/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Entry Info */}
      <div className="listcategory-pagination">
        <span className="listcategory-info">
          Showing 1 to {tableData.length} of {tableData.length} entries
        </span>
        <div className="prevnext-box">
            <button className="listcategory-prev">Previous</button>
            <span className="listcategory-page-number">1</span>
            <button className="listcategory-next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Foodcategory;