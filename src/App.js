import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Accueil from './Accueil';
import AddCmpt from './AddCmpt';
import AddFourn from './AddFourn';
import AddStructure from './AddStructure';
import Admin from './Admin';
import AfficherComptes from './AfficherComptes';
import './App.css';
import Bnreception from './Bnreception';
import CodeConf from './CodeConf';
import Contact from './Contact';
import Fournisseurs from './Fournisseur';
import MinNavBar from "./MinNavBar";
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
import Sidebnr from './asa/Sidebnr';
import Addbciprod from "./bci/Addbciprod";
import Bci from "./bci/Bci";
import Creerbci from './bci/Creerbci';
import Details from './bci/Details.js';
import Sidebarbci from "./bci/Sidebarbci";
import Consulterbd from './magazinier/Consulterbd';
import Consulterbs from './magazinier/Consulterbs';
import Editbcimaga from './magazinier/Editbcimaga';
import Editbd from './magazinier/Editbd';
import Editbs from './magazinier/Editbs';
import Imprimerbnrecep from './magazinier/Imprimerbnrecep';
<<<<<<< HEAD
import Listbce from './magazinier/Listbce';
import Listbd from './magazinier/Listbd';
import Listbnrecep from './magazinier/Listbnrecep';
import Listbs from './magazinier/Listbs';
import Listebcimaga from './magazinier/Listebcimaga';
import Sidebarmag from "./magazinier/Sidebarmag";
=======
import Dashasa from './asa/Dashasa'
import AsaSideBar from './asa/AsaSideBar';
import Dashconso from './consomateur/Dashconso';
import Dashmaga from './magazinier/Dashmaga';
>>>>>>> 2aa6d6fd53b1593ff6ded9bd3c949b886b0cc4b5
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

        <Route exact path="/Bnreception/:id">
        <MinNavBar  className=''/>
        <div className='align'>
         <Sidebarmag/>
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

        <Route exact path="/Sidebarmag">
        <MinNavBar/>
       
       <div className='aligncreerbci'>
          <Sidebarmag/>        
          </div>            
        </Route>

          
        <Route exact path="/Listebcimaga">
          <MinNavBar/>
          <div className='alignbci'>
          <Sidebarmag/>
          <Listebcimaga/>          
          </div>             
        </Route>


        
        <Route exact path="/Editbcimaga">
        <MinNavBar/>       
       <div className='aligncreerbci'>
          <Sidebarbci/>
          <Editbcimaga/>
          </div>
        </Route>

        <Route exact path="/Listbs">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbs/>       
          </div>             
        </Route>



        <Route exact path="/Editbs/:id">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Editbs/>       
          </div>       
        </Route>

        <Route exact path="/Consulterbs">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Consulterbs/>
          </div>
        </Route>

        <Route exact path="/Listbd">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbd/>
          </div>
        </Route>

        <Route exact path="/Editbd/:id">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Editbd/>
          </div>
        </Route>


        <Route exact path="/Consulterbd">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Consulterbd/>
          </div>
        </Route>

        <Route exact path="/Listbce">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbce/>
          </div>
        </Route>

        <Route exact path="/Listbnrecep">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Listbnrecep/>
          </div>
        </Route>
        <Route exact path="/details/:id">
        <MinNavBar/>
       <div className='aligncreerbci'>
       <Sidebarmag/>
          <Details/>
          </div>
        </Route>

        <Route exact path="/Imprimerbnrecep">
     
       <div className='aligncreerbci'>
     
          <Imprimerbnrecep/>
          </div>
        </Route>

        <Route exact path="/Dashasa">
        <MinNavBar/>
     <div className='aligncreerbci'>
     <AsaSideBar/>
        <Dashasa/>
        </div>
      </Route>

      <Route exact path="/Dashconso">
          <MinNavBar/>
          <div className='alignbci'>
          <Sidebarbci/>
           <Dashconso/>
         </div>             
        </Route>
        <Route exact path="/Dashmaga">
          <MinNavBar/>
          <div className='alignbci'>
          <Sidebarmag/>
           <Dashmaga/>
         </div>             
        </Route>

       



      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
