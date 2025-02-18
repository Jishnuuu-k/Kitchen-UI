import React from 'react'
import './users.css'
function Users({sidebarWidth}) {
  return (
    <div className="Container" style={{ marginLeft: sidebarWidth }}>
        <div className="Space-box"></div>
        <div className="Space-box"></div>
        <div className="Space-box"></div>
        <div className="Bicontainer">
          <div className="Foruser-heading">
            <div className="Biforuser-heading"><h2>User List</h2></div>
          </div>
          <div className="Forlist-user">
            <div className="Biforlist-user">
              <div className="Searchbox-forusers">
                <div className="Searchbtn-wrapper"><input type="text" placeholder='Search'  className='Search-btn-foruser'/></div>
                <div className="Printbtns-wrapper">
                  <button className="Print-btn">Print</button>
                  <button className="Print-btn">Excel</button>
                  <button className="Print-btn">Pdf</button>
                </div>
              </div>
              <div className="User-details-box">
                <div className="Biuser-details-box">
                  <table className="user-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Join Date</th>
                        <th>Last Login</th>
                        <th>Status</th>
                        <th>User Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>user.firstName</td>
                          <td>user.lastName</td>
                          <td>user.email</td>
                          <td>user.joinDate</td>
                          <td>user.lastLogin</td>
                          <td>
                            <button className='Status-btn-foruser'>Active</button>
                          </td>
                          <td>user.role</td>
                          <td>
                            <button className="delete-btn">Delete</button>
                          </td>
                        </tr>
                        <tr>
                          <td>user.firstName</td>
                          <td>user.lastName</td>
                          <td>user.email</td>
                          <td>user.joinDate</td>
                          <td>user.lastLogin</td>
                          <td>
                            <button className='Status-btn-foruser'>Active</button>
                          </td>
                          <td>user.role</td>
                          <td>
                            <button className="delete-btn">Delete</button>
                          </td>
                        </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Users