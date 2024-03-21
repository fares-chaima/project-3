import { Link } from 'react-router-dom';
import './css/NavBar.css';
import logo from './images/Logo.svg';

const NavBar = () => {
    return ( 
     <nav>
        <div className="logo">
            <img src={logo} alt="sa" className='logo' />
            <span>NOVABYTE</span>

        </div>
        <div className="links">
            <Link to="/">Accueil</Link>
            <Link to="#">paramètres</Link>
            <Link to="/SignIn">Sign In</Link>
        </div>
    </nav>
     );
}
 
export default NavBar;