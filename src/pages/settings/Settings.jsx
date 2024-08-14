import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
         <span className="settingsUbdateTitle">Update Your Account</span>
         <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            />
            <label htmlFor="fileUnput">
            <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file"  id="fileInput" style={{ display: "none" }}/>
          </div>
          <label>Username</label>
          <input type="text"  placeholder="İdris"/>
          <label>Email</label>
          <input type="email"  placeholder="İdris@gmail.com"/>
          <label>password</label>
          <input type="texpassword"  />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
