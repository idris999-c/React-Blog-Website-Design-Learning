import "./topbar.css"

export default function TopBar(){
  return(
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
     </div>
     <div className="topCenter">
        <ul className="topList">
            <li className="topListitem">HOME</li>
            <li className="topListitem">ABOUT</li>
            <li className="topListitem">CONTACT</li>
            <li className="topListitem">WRITE</li>
            <li className="topListitem">LOGOUT</li>
        </ul>
     </div>
     <div className="topRight">
     <img className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <i className="topSearchIcon fas fa-search"></i>
     </div>
   </div>
 );
}