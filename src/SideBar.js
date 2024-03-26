import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from "react-pro-sidebar";
import "./css/SideBAr.css";
import copy from "./images/Copy.svg";
import group from "./images/Group.svg";
import setting from "./images/Setting_line.svg";
import random from "./images/Sort_random.svg";
import useradd from "./images/User_add.svg";
import dashb from "./images/dashb.svg";
import inn from "./images/in.svg";
import profile from "./images/profile.svg";
const SideBar = () => {
    const { collapseSidebar     } = useProSidebar();
  const [col, setCOL] = useState(false);
  const [did, setDis] = useState("");
  const toggle =(col) => {
  
  }
    return ( 
   
        
         <div  id="sd" >
     <Sidebar id="sidebar" 
     width="280px"
     backgroundColor="#F6E6E6"
     
     style={({ height: "110vh" })} >
        <Menu>
        <MenuItem
        id="ln"
            icon={col ?  <MenuOutlinedIcon />:<img src={inn}className="inn" />  }
            onClick={() => {
                
              collapseSidebar();
              setCOL(prevState => !prevState);
            }}
            style={({ textAlign: "center" })}
          >

           <div className="prfl">
            <img src={profile} alt="" />
            <a>Admin</a>
            </div> 
          </MenuItem>
         
         
          <MenuItem icon={<img src={dashb} />} href="#" >dashboard</MenuItem>
         <SubMenu icon={<img src={useradd} />  }  label="gérer les comptes">
            <MenuItem  href="/AfficherComptes">affficher les comptes</MenuItem>
            <MenuItem >ajouter un compte</MenuItem>
           
      </SubMenu>
          
      <SubMenu icon={<img src={copy} />  }  label="gérer les structures">
            <MenuItem  >affficher les structures</MenuItem>
            <MenuItem >ajouter un structure</MenuItem>
           
      </SubMenu>
          <MenuItem icon={<img src={random} />}>archivage</MenuItem>
          <MenuItem icon={ <img src={group} />}>les fournisseurs</MenuItem>
          <SubMenu icon={<img src={setting} />  }  label="paramètres">
            <MenuItem  >modifier le logo</MenuItem>
            <MenuItem >modifier le thème</MenuItem>
            <MenuItem >modifier le nom du site</MenuItem>
      </SubMenu>
        </Menu>
       
      </Sidebar>
        
     
        </div>
     );
}
 
export default SideBar;