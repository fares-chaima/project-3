import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './css/SignIn.css';
import emailIcon from './images/email.svg';
import hidePwdImg from './images/hide-password.svg';
import pwdIcon from './images/pwdsvg.svg';
import showPwdImg from './images/show-password.svg';

const SignIn = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return ( 
      <>
        <div className="form">
            <form >
             <span>Se connecter</span>

             <div className="email">
                <img src={emailIcon} alt="" />
                <input type="email" name="email" id="email" placeholder='email' />

             </div>

             <div className="pwd">
                <img src={pwdIcon} alt="" />
                <input
                name="pwd"
                placeholder="mot de passe"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                />
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
                />


             </div>
             <Link to="/PwdOublieForm" className="rtr1">j’ai oublié le mot de passe</Link>
             <button>confirmer</button>
            </form>
        </div>
        </>
     );
}
 
export default SignIn;