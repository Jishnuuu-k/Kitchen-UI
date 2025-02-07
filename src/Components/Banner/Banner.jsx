import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import './banner.css'
function Banner({ sidebarWidth }) {
  return (
    <div className="MAINCONTENT-BOX" style={{ marginLeft: sidebarWidth }}>
      <div className="Space-box"></div>
      <div className="Space-box"></div>
      <h2 className='Heading'>CoffyByte-POS</h2>
      <div className="POS-box">
        <div className="BiPOS-box">
          <div className="NS-box">
            <div className="Binsbox">
              <div className="New-order"><span><FaPlus/>New Order</span> </div>
              <div className="Settle-order"><span><TbReportSearch/>Settle Order</span></div>
            </div>
          </div>
            
          <div className="Order-box">
            <div className="box">Orders</div>
          </div>
          <div className="Preparing-box">
            <div className="box">Preparing</div>
          </div>
          <div className="Pending-box">
            <div className="box">Pending</div>
          </div>
        </div>
      </div>
      <h3 className="Orders-heading">Orders</h3>
      <div className="Boxfor-cards">
        <div className="Biboxfor-cards">
                                      {/* Cards Sectio Starts Here . . .  */}
          <div class="orders-card">
            <div className="Biorders-card">
              <div className="status-boxes">
                <div className="first-box">Order :</div>
                <div className="first-box"><span className="User-box">User :</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Car :</div>
                <div className="first-box"><span className="Takeaway-box">Takeaway</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Amout :</div>
                <div className="first-box">Time</div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Items :</div>
                <div className="first-box"><button className="View-btn">View</button></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Status :</div>
                <div className="first-box">Pending</div>
              </div>
              <div className="status-boxes">
                <div className="first-box"><button className="Settlebill-btn">Settle Bill</button></div>
                <div className="first-box"><button className="Printbill-btn">Print Bill</button></div>
              </div>
            </div>
          </div> 
          <div class="orders-card">
            <div className="Biorders-card">
              <div className="status-boxes">
                <div className="first-box">Order :</div>
                <div className="first-box"><span className="User-box">User :</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Car :</div>
                <div className="first-box"><span className="Takeaway-box">Takeaway</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Amout :</div>
                <div className="first-box">Time</div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Items :</div>
                <div className="first-box"><button className="View-btn">View</button></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Status :</div>
                <div className="first-box">Pending</div>
              </div>
              <div className="status-boxes">
                <div className="first-box"><button className="Settlebill-btn">Settle Bill</button></div>
                <div className="first-box"><button className="Printbill-btn">Print Bill</button></div>
              </div>
            </div>
          </div> 
          <div class="orders-card">
            <div className="Biorders-card">
              <div className="status-boxes">
                <div className="first-box">Order :</div>
                <div className="first-box"><span className="User-box">User :</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Car :</div>
                <div className="first-box"><span className="Takeaway-box">Takeaway</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Amout :</div>
                <div className="first-box">Time</div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Items :</div>
                <div className="first-box"><button className="View-btn">View</button></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Status :</div>
                <div className="first-box">Pending</div>
              </div>
              <div className="status-boxes">
                <div className="first-box"><button className="Settlebill-btn">Settle Bill</button></div>
                <div className="first-box"><button className="Printbill-btn">Print Bill</button></div>
              </div>
            </div>
          </div> 
          <div class="orders-card">
            <div className="Biorders-card">
              <div className="status-boxes">
                <div className="first-box">Order :</div>
                <div className="first-box"><span className="User-box">User :</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Car :</div>
                <div className="first-box"><span className="Takeaway-box">Takeaway</span></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Amout :</div>
                <div className="first-box">Time</div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Total Items :</div>
                <div className="first-box"><button className="View-btn">View</button></div>
              </div>
              <div className="status-boxes">
                <div className="first-box">Status :</div>
                <div className="first-box">Pending</div>
              </div>
              <div className="status-boxes">
                <div className="first-box"><button className="Settlebill-btn">Settle Bill</button></div>
                <div className="first-box"><button className="Printbill-btn">Print Bill</button></div>
              </div>
            </div>
          </div> 
          
          
        </div>
      </div>
      {/* For space */}
      <div className="Space-box"></div> 

      <div className="Termsandcondition">
        <div className="Bitermsbox">
          <p className='agreement'>Privacy Policy</p>
          <p className='agreement'>Terms of use</p>

        </div>
      </div>
    </div>
  )
}

export default Banner