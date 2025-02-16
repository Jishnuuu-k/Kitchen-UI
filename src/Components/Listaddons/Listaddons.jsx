import React from "react";
import "./Listaddons.css";
import { RiDeleteBin6Line,RiEdit2Line } from "react-icons/ri";

function Listaddons({ sidebarWidth }) {
  // Sample data
  const tableData = [
    { id: 1, name: "Ice Candy", category: "Dessert", status: "Available" },
    { id: 2, name: "French Fries", category: "Snack", status: "Available" },
    { id: 2, name: "French Fries", category: "Snack", status: "Available" },
    { id: 2, name: "French Fries", category: "Snack", status: "Available" }
  ];

  return (
    <div className="listaddons-container" style={{ marginLeft: sidebarWidth }}>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <h2 className="listaddons-title">Addons List</h2>

      <div className="listaddons-header">
        <div className="listaddons-entries">
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
        <button className="listaddons-add-btn">+ Add on to menu</button>
        <input type="text" className="listaddons-search" placeholder="Search:" />
      </div>

      <div className="listaddons-table-container">
        <table className="listaddons-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <td className="listaddons-item">{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <span className={`listaddons-status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="listaddons-edit"><RiEdit2Line/></button>
                  <button className="listaddons-delete"><RiDeleteBin6Line/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Entry Info */}
      <div className="listaddons-pagination">
        <span className="listaddons-info">
          Showing 1 to {tableData.length} of {tableData.length} entries
        </span>
        <div className="prevnext-box">
            <button className="listaddons-prev">Previous</button>
            <span className="listaddons-page-number">1</span>
            <button className="listaddons-next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Listaddons;
