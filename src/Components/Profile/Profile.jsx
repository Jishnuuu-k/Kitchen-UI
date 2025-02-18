import React, { useState } from "react";
import "./profile.css";

function Profile({sidebarWidth}) {
  const [formData, setFormData] = useState({
    name: "PANOOR RESTAURANT",
    trn: "100342355300003",
    location: "Muwailah Sharjah - UAE",
    phone: "06-5352754 / 06-5342",
    mobile: "055-9718423",
    address: "test",
    logo: "Empty",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, logo: file.name });
    }
  };

  return (
    <div className="profile-container" style={{ marginLeft: sidebarWidth }}>
        <div className="Space-box"></div>
        <div className="Space-box"></div>
        <div className="Space-box"></div>

        <div className="Form-wrapper-box">
            <div className="Biform-wrapperbox-heading">
                <h2 className="title">Restaurant Profile</h2>
            </div>
            <div className="Biform-wrapperbox-details">
                <div className="form-group">
                    <label>Name of restaurant:</label>
                    <input type="text" name="name" placeholder="Enter Restaurant Name " value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>TRN:</label>
                    <input type="text" name="trn" placeholder="Enter TRN" value={formData.trn} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input type="text" name="location" placeholder="Enter Location" value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="text" name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" name="mobile" placeholder="Enter Mobile Number" value={formData.mobile} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Logo:</label>
                    <p>Currently: {formData.logo}</p>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <div className="button-group">
                    <button className="update-btn">Add or Update Profile</button>
                    <button className="reset-btn">Reset</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
