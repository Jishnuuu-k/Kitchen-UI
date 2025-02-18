import React from 'react';
import './addtaxslab.css';

function Addtaxslab({ sidebarWidth }) {
  return (
    <div className="MainContentBoxForTax" style={{ marginLeft: sidebarWidth }}>
      <div className="SpaceBox"></div>
      <div className="SpaceBox"></div>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <div className="ContentBoxForTax">
        <form className="FormForTax">
          <div className="FormHeadingForTax">
            <h2>Add Tax Slab</h2>
          </div>
          <div className="FormDataForTax">
            <div className="InnerFormDataForTax">
              <div className="InputForTax">
                <label> Tax name (VAT, GST etc.) *</label>
                <input type="text" className="InputBoxForTax" placeholder="Enter tax slab name" />
              </div>

              <div className="InputForTax">
                <label>Tax Percentage  (in percentage %)</label>
                <input type="text" className="InputBoxForTax" placeholder="Enter tax percentage" />
              </div>

              <div className="InputForTax">
                <div className="ButtonContainerForTax">
                  <button type="submit" className="BtnForTaxAdd">Add Tax</button>
                  <button type="reset" className="BtnForTaxReset">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addtaxslab