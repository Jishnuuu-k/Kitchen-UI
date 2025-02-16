import React from 'react'
import './addaddons.css'

function Addaddons({ sidebarWidth }) {
  return (
    <div className="MAICONTENTBOXFORADDONS" style={{ marginLeft: sidebarWidth }}>
              <div className="Space-box"></div>
              <div className="Space-box"></div>
        <div className="Bimaincontentboxforaddons">
            <form className="formforaddons">
                <div className="Formheadingforaddons"><h2>Add On To Menu</h2></div>
                <div className="Formdataforaddons">
                    <div className="Biformdataforaddons">
                        <div className="inputforitems">
                            <label> Item Name (Cheese, Mayonnaise etc . . )</label>
                            <input type="text" className="Inputboxforaddons" placeholder='Enter item name'/>
                        </div>

                        <div className="inputforitems">
                            <label> Price
                                
                            </label>
                            <input type="text" className="Inputboxforaddons" placeholder='Enter Amount'/>
                        </div>

                        <div className="inputforitems">
                            <div className="Biinputforitems">
                                <button className="Btnfor-addons">Add Item</button>
                                <button className="Btnfor-addonss">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Addaddons