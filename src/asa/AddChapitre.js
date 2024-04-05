import React from "react";
import "../css/AddCmpt.css";
import add from "../images/Add.svg";
import chp from "../images/chapitre.svg";
import AsaSideBar from "./AsaSideBar";
const AddChapitre = () => {
    return ( 
        <div className="pg">
        <AsaSideBar />
        <form  >
            <span style={{marginLeft: "150px"}} >ajouter un chapitre</span>
            <div className="flx3" style={{flexDirection: "column"}}>
                
                
                   
                    <div className="nom">
                        <img src={chp} alt="" />
                        <input type="text" placeholder="nom"  />
                    </div>
                    <div className="desc">
                        <img src={add} alt="" />
                        <input type="text"  placeholder="Description"/>
                    </div>
                
                
                
            </div>
            <button  style={{marginLeft: "150px"}} >confirmer</button>
        </form>
    </div>
     );
}
 
export default AddChapitre;