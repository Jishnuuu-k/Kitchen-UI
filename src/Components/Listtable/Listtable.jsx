import React from "react";
import "./listtable.css";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

function Listtable({ sidebarWidth }) {
  // Sample data
  const tableData = [
    { tablenumber: "Take Away", nofseats: "0", dateadded: "June 14, 2024" },
    { tablenumber: "French Fries", nofseats: "1", dateadded: "June 14, 2024" }
  ];

  return (
    <div className="listtable-container" style={{ marginLeft: sidebarWidth }}>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <h2 className="listtable-title">Table List</h2>

      <div className="listtable-header">
        <div className="listtable-entries">
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
        <button className="listtable-add-btn">+ Add Table</button>
        <input type="text" className="listtable-search" placeholder="Search:" />
      </div>

      <div className="listtable-table-container">
        <table className="listtable-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Table Number</th>
              <th>No Of Seats</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td className="listtable-item">{item.tablenumber}</td>
                <td>{item.nofseats}</td>
                <td>
                  <span className={`listtable-status ${item.dateadded.toLowerCase()}`}>
                    {item.dateadded}
                  </span>
                </td>
                <td>
                  <button className="listtable-edit"><RiEdit2Line /></button>
                  <button className="listtable-delete"><RiDeleteBin6Line /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Entry Info */}
      <div className="listtable-pagination">
        <span className="listtable-info">
          Showing 1 to {tableData.length} of {tableData.length} entries
        </span>
        <div className="prevnext-box">
          <button className="listtable-prev">Previous</button>
          <span className="listtable-page-number">1</span>
          <button className="listtable-next">Next</button>
        </div>
      </div>
    </div>
  );
}
export default Listtable;
