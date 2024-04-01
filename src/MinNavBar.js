import { useState } from "react";
import "./css/MinNavBar.css";
import notif from "./images/Bell.png";
import logo from './images/Logo.svg';
import profile from "./images/profile.svg";
const MinNavBar = () => {
    const [act, setAct] = useState(false);
    return ( 
        <>
    <div className="MinNavBar">
         
        <div className="logo">
            <img src={logo} alt="sa" className='logo' />
            <span>NOVABYTE</span>
        </div>
        
        <input type="search" name="" id="srch" icon />
         <a href="#" className="notification"><img src={notif} alt="" /></a>
      <div className="pfl">
       <a  href="#" class="profile"  onClick={() => setAct(prev =>!prev)} >  <img src={profile} alt="" /></a>
       
       </div>
       </div>
      {
        act &&
        
            
            <div className="menu1">
            <a href="#">déconnexion</a>
            <a href="/ModifProfile">modifier le profile</a>
           </div>
        
      }
    
   </>
     );
}
 
export default MinNavBar;