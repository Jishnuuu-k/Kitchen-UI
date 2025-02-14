import React from 'react'
import './report.css'
function Report({ sidebarWidth }) {
  return (
    <div className="Reportmaincontentbox" style={{ marginLeft: sidebarWidth }}>
        <div className="Space-box"></div>
        <div className="Space-box"></div><div className="Space-box"></div>
        <div className="Bireportmaincontentbox">
            <div className="Container-box">
                <div className="Today-report">
                    <div className="Botoday-report">
                        <span>Report For Today</span>
                        <button className="Generate-btn">Generate Sale Report Today</button>
                    </div>
                </div>
                <div className="Customized-report">
                    <div className="Bicustomized-report">
                        <span>Date Wise Report</span>
                        <div className="Date-box">
                            <span>Enter Start Date</span>
                            <input type="Date" className='Date-entrybox'/>
                        </div>
                        <div className="Date-box">
                            <span>Enter End Date</span>
                            <input type="Date" className='Date-entrybox'/>
                        </div>
                        <button className="Generatee-btn">Generate Report</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Report