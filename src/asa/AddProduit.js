import React from "react";
import "../css/AddCmpt.css";
import add from "../images/Add.svg";
import idd from "../images/id.svg";
import nom from "../images/nom.svg";
import AsaSideBar from "./AsaSideBar";

const AddProduit = () => {
    return (  
        <div className="pg">
        <AsaSideBar />
        <form  >
            <span style={{marginLeft: "150px"}} >ajouter un produit</span>
            <div className="flx3" style={{flexDirection: "column"}}>
                
                
                    <div className="nom">
                        <img src={nom} alt="" />
                        <input type="text"  placeholder="Nom"/>
                    </div>
                    <div className="id">
                        <img src={idd} alt="" />
                        <input type="number" placeholder="id"  />
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
 
export default AddProduit;