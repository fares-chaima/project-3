import React from "react";
import "../css/AddCmpt.css";
import add from "../images/Add.svg";
import art from "../images/article.svg";
import qnt from "../images/id.svg";
import nom from "../images/nom.svg";
import AsaSideBar from "./AsaSideBar";
const AddProduit = () => {
    return (  
        <div className="pg">
        <AsaSideBar />
        <form  >
            <span style={{marginLeft: "90px"}} >ajouter un produit</span>
            <div className="flx3" style={{flexDirection: "row"}}>
                
                <div className="lft">
                    <div className="nom">
                        <img src={nom} alt="" />
                        <input type="text"  placeholder="Nom"/>
                    </div>
                    <div className="artc">
                        <img src={art} alt="" />
                        <input type="text" placeholder="Article"  />
                    </div>
                    </div>
                    <div className="rght">
                    <div className="desc">
                        <img src={add} alt="" />
                        <input type="text"  placeholder="Description"/>
                    </div>
                    <div className="quant">
                        <img src={qnt} alt="" />
                        <input type="number"  placeholder="quantite"/>
                    </div>
                    </div>
                
                
            </div>
            <button  style={{marginLeft: "100px"}} >confirmer</button>
        </form>
    </div>

    );
}
 
export default AddProduit;