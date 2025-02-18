import React, { useState } from 'react';
import './adduser.css';
import { MdOutlineModeEditOutline } from "react-icons/md";


function Adduser({ sidebarWidth }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="Adduser-container" style={{ marginLeft: sidebarWidth }}>
        <div className="Space-box"></div>
        <div className="Space-box"></div>
        <div className="Space-box"></div>

        <div className="profile-upload-container">
            <div className="profile-picture">
            {image ? <img src={image} alt="Profile" className="profile-img" /> : <div className="placeholder" >Upload Photo</div>}
            <input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} hidden />
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} className='Profilepic-user' />

                <label for="fileInput" class="custom-file-upload">
                    <div className="Bicustom-file-upload">
                        <MdOutlineModeEditOutline className='i'/>
                    </div>

                </label>
        </div>
      <form className="add-user-form">
        <div className="form-section">
          <h3>New User Information</h3>

          <div className="form-row">
            <div className="form-group">
              <label>First Name:</label>
              <input type="text" placeholder="Enter First Name" required className='Selectbox-user'/>
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" placeholder="Enter Last Name" required className='Selectbox-user'/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter Email" required  className='Selectbox-user'/>
            </div>
            <div className="form-group">
              <label>User Role:</label>
              <select required className='Selectbox-userr'>
                <option value="">Select Role</option>
                <option value="kitchen">Kitchen</option>
                <option value="staff">Staff</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Security</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Username:</label>
              <input type="text" placeholder="Enter Username" required className='Selectbox-user'/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password:</label>
              <input type="password" placeholder="Enter Password" required className='Selectbox-user'/>
            </div>
            <div className="form-group">
              <label>Repeat Password:</label>
              <input type="password" placeholder="Repeat Password" required className='Selectbox-user'/>
            </div>
          </div>
        </div>

        <button type="submit" className="add-user-btn">Add New User</button>
      </form>
    </div>
  );
}

export default Adduser;