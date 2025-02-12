import React from 'react'
import './addmenu.css'
function Addmenu({ sidebarWidth }) {
  return (
    <div className="MAINCONTENTFORADDMENU-BOX" style={{ marginLeft: sidebarWidth }}>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
       <div className="Foraddmenu-box">
          <div className="Biforaddmenu-box">
            <div className="Foraddmenu-Heading">
              <div className="Biforaddmenu-Heading"><span>Add Menu List</span></div>
            </div>
            <div  className="Form-box">
              <form  className="Biform-box">
                <div className="Dataentry-box">
                  <label  className="label">Item Name :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label className="label">Category :</label>
                  <select className="select">
                    <option>Dishes</option>
                    <option>Dishes</option>
                    <option>Dishes</option>
                  </select>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Product Code :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Image :</label>
                  <input type="file" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Portion :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Diet :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Price :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Tax method :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Tax value (in percentage %) :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Description / Product Details :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Description / Product Details :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Description / Product Details :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                <div className="Dataentry-box">
                  <label  className="label">Description / Product Details :</label>
                  <input type="text" className="input" placeholder='Enter name'/>
                </div>
                
              </form>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Addmenu