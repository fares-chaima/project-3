import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';
import logo from './images/Logo.svg';

const NavBar = () => { 
    const [color, setColor] = useState("#FFE7E7");
    const [clck, setClck] = useState(false);
    const [cont, setCont] = useState(false);
    const [hm, setHm] = useState(true);
   
    const click = color => {
        setColor(color);
       
      };
    
    return ( 
        <>
     <nav id='nav' style ={{backgroundColor: color}}>
        <div className="logo">
            <img src={logo} alt="sa" className='logo' />
            <span>NOVABYTE</span>

        </div>
        <div className="links">
            <Link to="/" style={hm ? {textDecoration: "underline 5px solid #01C7BE"}:{}} onClick={()=> {click("#FFE7E7"); setHm(prevState => !prevState); setClck(prevState => !prevState)} } >Accueil</Link>
            <Link to="#" >Contacter nous</Link>
            <Link to="/SignIn"    onClick={()=> {click("#FFFFFF");
        setClck(prevState => !prevState); setHm(prevState => !prevState) } } style={clck ? {textDecoration: "underline 5px solid #01C7BE"}:{}}>Se connecter</Link>
        </div>
    </nav>
    </>
     );
}
 
export default NavBar;