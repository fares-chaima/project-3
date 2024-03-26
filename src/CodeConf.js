import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import './css/SignIn.css';
import codeconf from './images/codeconf.svg';
const CodeConf = () => {
    return ( 
        <>
        <NavBar />
        <div className="form">
        <form className="pwdOub">
         <span>mot de passe <br /> oubli <span className="err">é</span> </span>

         <div className="email">
            <img src={codeconf} alt=""  />
            <input type="email" name="email" id="email" placeholder='entrer le code de vérification' />

         </div>

         
         <Link to="/SignIn" className="rtr">Retour à la connexion</Link>
         <button>confirmer</button>
        </form>
    </div>
    </>
     );
}
 
export default CodeConf;