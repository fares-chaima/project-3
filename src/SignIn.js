import React, { useState } from "react";
import './css/SignIn.css';
import emailIcon from './images/email.svg';
import hidePwdImg from './images/hide-password.svg';
import pwdIcon from './images/pwdsvg.svg';
import showPwdImg from './images/show-password.svg';

const SignIn = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return ( 
        <div className="form">
            <form >
             <span>LOGIN</span>

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
             <button>confirmer</button>
            </form>
        </div>
     );
}
 
export default SignIn;