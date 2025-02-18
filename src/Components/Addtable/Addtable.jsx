import React from 'react';
import './addtable.css';

function Addtable({ sidebarWidth }) {
  return (
    <div className="MainContentBoxForTable" style={{ marginLeft: sidebarWidth }}>
      <div className="SpaceBox"></div>
      <div className="SpaceBox"></div>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <div className="ContentBoxForTable">
        <form className="FormForTable">
          <div className="FormHeadingForTable">
            <h2>Add Table</h2>
          </div>
          <div className="FormDataForTable">
            <div className="InnerFormDataForTable">
              <div className="InputForTable">
                <label> Table Number</label>
                <input type="text" className="InputBoxForTable" placeholder="Enter table name" />
              </div>

              <div className="InputForTable">
                <label>Number Of Seats</label>
                <input type="text" className="InputBoxForTable" placeholder="Enter number of seats" />
              </div>

              <div className="InputForTable">
                <div className="ButtonContainerForTable">
                  <button className="BtnForTableAdd">Add Table</button>
                  <button className="BtnForTableReset">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addtable;
