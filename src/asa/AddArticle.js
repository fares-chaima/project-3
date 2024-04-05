import React from "react";
import "../css/AddCmpt.css";
import add from "../images/Add.svg";
import nom from "../images/article.svg";
import chp from "../images/chapitre.svg";
import AsaSideBar from "./AsaSideBar";

const AddArticle = () => {
    return (
<div className="pg">
        <AsaSideBar />
        <form  >
            <span style={{marginLeft: "150px"}} >ajouter un article</span>
            <div className="flx3" style={{flexDirection: "column"}}>
                
                
                   
                    <div className="nom">
                        <img src={nom} alt="" />
                        <input type="text" placeholder="Nom"  />
                    </div>
                    <div className="chap">
                        <img src={chp} alt="" />
                        <select name="" id="" >
                            <option value="chap1">chapitre1 </option>
                        </select>
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
 
export default AddArticle;