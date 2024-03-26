import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from "./SideBar";

const Admin = () => {
    return ( 
        <Router>
        <div className="admin">
             
          <SideBar />
         
            <div className="pages">
               
            </div>
        </div>
        </Router>
     );
}
 
export default Admin;