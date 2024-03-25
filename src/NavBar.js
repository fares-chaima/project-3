import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';
import logo from './images/Logo.svg';

const NavBar = () => { 
    const [color, setColor] = useState("#FFFFFF");
    const [clck, setClck] = useState(false);
    const [cont, setCont] = useState(false);
    const [hm, setHm] = useState(false);
   
    const click = color => {
        setColor(color);
        
      };
    
    return ( 
     <nav id='nav' style ={{backgroundColor: color}}>
        <div className="logo">
            <img src={logo} alt="sa" className='logo' />
            <span>NOVABYTE</span>

        </div>
        <div className="links">
            <Link to="/" style={hm ? {textDecoration: "underline 5px solid #01C7BE"}:{textDecoration: "none"}} onClick={()=> {click("#FFE7E7"); setHm(true); setClck(false)} } >Accueil</Link>
            <Link to="#" >Contacter nous</Link>
            <Link to="/SignIn"   style={clck ? {textDecoration: "underline 5px solid #01C7BE"}:{textDecoration: "none"}} onClick={()=> {click("#FFFFFF");
        setClck(true); setHm(false); setCont(false)}}>Se connecter</Link>
        </div>
    </nav>
     );
}
 
export default NavBar;