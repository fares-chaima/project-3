import "./css/MinNavBar.css";
import notif from "./images/Bell.png";
import logo from './images/Logo.svg';
import profile from "./images/profile.svg";
const MinNavBar = () => {
    return ( 
    <div className="MinNavBar">
         
        <div className="logo">
            <img src={logo} alt="sa" className='logo' />
            <span>NOVABYTE</span>
        </div>
        
        <input type="search" name="" id="srch" icon />
         <a href="#" className="notification"><img src={notif} alt="" /></a>
      <div className="pfl">
       <a href="#" class="profile"> <img src={profile} alt="" /></a>
       </div>
    </div>
     );
}
 
export default MinNavBar;