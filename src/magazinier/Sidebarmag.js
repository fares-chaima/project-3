import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "../css/SideBAr.css";
import logo from "../images/Logo.svg";

import inn from "../images/in.svg";

import "../css/Sidebnr.css";
import { RiFileList2Fill } from "react-icons/ri";
import { SiStatista } from "react-icons/si";
import barchart from "./imagesmaga/Bar chart.svg";
import Assignment from "./imagesmaga/Assignment.png";
import Listalt from "./imagesmaga/List alt.svg";
import Inventory from "./imagesmaga/Inventory.svg";
import receiptlong from "./imagesmaga/Receipt long.png";
import vector from "./imagesmaga/Vector.png";
import invo2 from "./imagesmaga/Inventory 2.svg";
import group from "./imagesmaga/Group.png";
import DASH from "./imagesmaga/Group.svg";



const Sidebarbci = () => {

 
 const { collapseSidebar   } = useProSidebar();
    
    const [col, setCol] = useState(false);
  
    return ( 
        <div  id="sd" >
          
        <Sidebar id="sidebar" 
        width="310px"
        backgroundColor="#041F5A"
        
        style={({ height: "110vh" })} >
           <Menu>
           <MenuItem
           id="ln"
               icon={col ?  <MenuOutlinedIcon />:<img src={inn}className="inn" />  }
               onClick={() => {
                   setCol(prev => !prev);
                 collapseSidebar();
                 
               }}
               style={({ textAlign: "center" })}
             >
   
              <div className="prfl" >
               <img src={logo} alt="" />
               <a className="titremagazinier" href="/Magazinier" style={{fontSize:'15px'}}>MAGASINIER</a>
               </div> 
             </MenuItem>

             <MenuItem className=' sidebci' icon={<img src={Listalt} />
} href="/ListeBce" >Liste des BCE</MenuItem>
<MenuItem className=' sidebci' icon={<img src={Inventory}/>} href="#"  

>Liste des BLE</MenuItem>
<MenuItem className=' sidebci' icon= {<img src={Assignment}/>
} href="/Bci"  >Liste des BCI</MenuItem>
<MenuItem className=' sidebci' icon={<img src={receiptlong}/>
} href="/listbs" >Liste des BS</MenuItem>
<MenuItem className=' sidebci' icon={<img src={vector}/>
} href="/listbd" >Liste des BD</MenuItem>
<MenuItem className=' sidebci' icon={<img src={group}/>
} href="#" >Inventaire</MenuItem>
            
        
          
         <MenuItem className=' sidebci' icon={ <img src={DASH}/>
} href="#" >dashboard</MenuItem>
           </Menu>
          
         </Sidebar>
      
       
  </div>

     );
}
 
export default Sidebarbci;