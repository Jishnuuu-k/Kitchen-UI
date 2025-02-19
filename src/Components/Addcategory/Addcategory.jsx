import React from "react";
import "./addcategory.css";

function Addcategory({ sidebarWidth }) {
  return (
    <div className="MainCategoryContainer" style={{ marginLeft: sidebarWidth }}>
      <div className="Space-box"></div>
      <div className="Space-box"></div>

      <div className="CategoryContentBox">
        <form className="CategoryForm">
          <div className="CategoryFormHeading">
            <h2>Add Category</h2>
          </div>

          <div className="CategoryFormData">
            <div className="CategoryInputWrapper">
              {/* Category Name */}
              <div className="CategoryInput">
                <label>Category Name</label>
                <input
                  type="text"
                  className="CategoryInputBox"
                  placeholder="Enter category name"
                />
              </div>

              {/* Image Upload */}
              <div className="CategoryInput">
                <label>Image</label>
                <div className="Categoryinputboxx-wrapper">
                  <input type="file" className="CategoryInputBoxx" />
                </div>
              </div>

              {/* Buttons */}
              <div className="CategoryInput">
                <div className="CategoryButtonGroup">
                  <button className="CategoryAddButton">Add Category</button>
                  <button className="CategoryResetButton">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addcategory;
