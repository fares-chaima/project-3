import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';
import logo from './images/Logo.svg';

const NavBar = () => { 
    const [color, setColor] = useState("#FFE7E7");
    const click = color => {
        setColor(color)
      };
    
    return ( 
     <nav id='nav' style ={{backgroundColor: color}}>
        <div className="logo">
            <img src={logo} alt="sa" className='logo' />
            <span>NOVABYTE</span>

        </div>
        <div className="links">
            <Link to="/" onClick={()=> click("#FFE7E7")} >Accueil</Link>
            <Link to="#">paramètres</Link>
            <Link to="/SignIn" onClick={()=> click("#FFFFFF")}>Sign In</Link>
        </div>
    </nav>
     );
}
 
export default NavBar;