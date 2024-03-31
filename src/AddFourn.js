import React from "react";
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import nom from "./images/User_alt.svg";
import adr from "./images/adr.svg";
import mail from "./images/mail.svg";
import prenom from "./images/prenom.svg";
import role from "./images/role.svg";
import tel from './images/tel.svg';

const AddFourn = () => {
   
    return ( 
        <div className="pg">
            <SideBar />
            <form >
                <span>ajouter un fournissour</span>
                <div className="flx1">
                    
                    <div className="lft">
                        <div className="nom">
                            <img src={nom} alt="" />
                            <input type="text"  placeholder="nom"/>
                        </div>
                        <div className="prenom">
                            <img src={prenom} alt="" />
                            <input type="text" placeholder="prenom"  />
                        </div>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <input type="email" name="email" id="" placeholder="email" />
                        </div>
                    </div>

                    <div className="rght">   
                    <div className="role">
                        <img src={role} alt="" />
                        <input type="text" placeholder="role" />
                        </div>  

                    <div className="tel">
                        <img src={tel} alt="" />
                   <input type="tel" name="" id="" placeholder="numéro de tél" />
              
                        </div>         

                    <div className="adr">
                    <img src={adr} alt="" />
                    <input type="text" name="" id="" placeholder="Adresse" />
                        </div>   
                    </div>
                    
                </div>
                <button>confirmer</button>
            </form>
        </div>

     );
}
 
export default AddFourn;