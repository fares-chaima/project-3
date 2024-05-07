import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MinNavBar from "./MinNavBar";
import Bci from "./bci/Bci"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Accueil from './Accueil';
import AddCmpt from './AddCmpt';
import AddFourn from './AddFourn';
import AddStructure from './AddStructure';
import Admin from './Admin';
import AfficherComptes from './AfficherComptes';
import CodeConf from './CodeConf';
import Contact from './Contact';
import Fournisseurs from './Fournisseur';
import ModifProfile from './ModifProfile';
import NavBar from './NavBar';
import NewPwd from './NewPwd';
import PwdOublieForm from './PwdOublieForm';
import SignIn from './SignIn';
import Structure from './Structure';
import AddArticle from './asa/AddArticle';
import AddBce from './asa/AddBce';
import AddChapitre from './asa/AddChapitre';
import AddProduit from './asa/AddProduit';
import Articles from './asa/Articles';
import Chapitres from './asa/Chapitres';
import ListeBce from './asa/ListeBce';
import MinNavBarAsa from './asa/MinNavBarAsa';
import ModifAsa from './asa/ModifAsa';
import Produits from './asa/Produits';
import ServiceAchat from './asa/ServiceAchat';
import SideBar from './SideBar';
import Bnreception from './Bnreception';
import Sidebnr from './asa/Sidebnr';
import Sidebarbci from "./bci/Sidebarbci"
import Creerbci from './bci/Creerbci';
import Addbciprod from "./bci/Addbciprod";
function App() {

  const onSelectRow = (selectedRow) => {
    console.log('Ligne sélectionnée :', selectedRow);
    // Logique pour ajouter la ligne sélectionnée à une autre table
  };
  return (
    <Router>
      
    <div className="App">
     
      <div className="content">
        
        <Switch>
        <Route exact path="/">
          <NavBar />
        <Accueil  />
        </Route>

        <Route path="/Contact">
        <NavBar />
        <Contact />
       </Route>

      <Route  path="/SignIn">
      <NavBar />
      <SignIn />
      </Route>
      <Route path="/PwdOublieForm">
      <NavBar />
        <PwdOublieForm />
      </Route>

      <Route path="/CodeConf">
      <NavBar />
        <CodeConf  />
      </Route>

      <Route path="/NewPwd">
      <NavBar />
        <NewPwd  />
      </Route>
      
      <Route path="/Admin">
        <Admin />
      </Route>
      <Route path="/AfficherComptes">
      <MinNavBar/>
                   <AfficherComptes />
      </Route>

      <Route path="/Structure">
        <MinNavBar />
        <Structure />
      </Route>

      <Route path="/Fournisseurs" >
      <MinNavBar />
        <Fournisseurs />
      </Route>

       <Route path="/AddCmpt">
       <MinNavBar />
        <AddCmpt />
       </Route>

       <Route path="/AddStructure">
        <MinNavBar />
        <AddStructure />
       </Route>

       <Route path="/AddFourn">
        <MinNavBar />
        <AddFourn />
       </Route>

       <Route path="/ModifProfile">
        <MinNavBar />
        <ModifProfile />
       </Route>

       <Route path="/ServiceAchat">
        <ServiceAchat />
       </Route>

       <Route path="/Produits">
        <MinNavBarAsa />
        <Produits />
       </Route>

       <Route path="/Articles">
        <MinNavBarAsa/>
        <Articles />
       </Route>

       <Route path="/Chapitres">
        <MinNavBarAsa />
        <Chapitres />
       </Route>

       <Route path="/AddProduit">
        <MinNavBarAsa/>
        <AddProduit />
       </Route>
       
       <Route path="/AddArticle">
        <MinNavBarAsa />
        <AddArticle />
       </Route>

       <Route path="/AddChapitre">
        <MinNavBarAsa />
        <AddChapitre />
       </Route>

       <Route path="/ModifAsa">
        <MinNavBarAsa />
        <ModifAsa />
       </Route>

       <Route path="/ListeBce">
        <MinNavBar />
        <ListeBce />
       </Route>

       <Route path="/AddBce">
        <MinNavBar/>
        <AddBce />
       </Route>

       <Route exact path="/Sidebarbci">
     
    
        <Sidebarbci/>
        
       
        </Route>

        <Route exact path="/Bnreception">
        <MinNavBar  className=''/>
        <div className='align'>
         <Sidebarbci/>
        <Bnreception  />
       
        </div>
        
       
        </Route>

        <Route exact path="/Sidebnr">
        <MinNavBar  className=''/>
        <div className=''>
        <Sidebnr/>
       
        </div>
        
       
        </Route>


          <Route exact path="/Sidebnr">
        <MinNavBar  className=''/>
        <div className=''>
        <Sidebnr/>
       
        </div>
        
       
        </Route>

      
        
        <Route exact path="/Bci">
          <MinNavBar/>
          <div className='alignbci'>
          <Sidebarbci/>
           <Bci/>


          </div>
      
       
        </Route>

        <Route exact path="/Creerbci">
        <MinNavBar/>
       
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Creerbci/>


          </div>
      
       
        </Route>

        <Route exact path="/Addbciprod">
        <MinNavBar/>
       
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Addbciprod onSelectRow={onSelectRow}/>


          </div>
      
       
        </Route>

        



        




       



      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
