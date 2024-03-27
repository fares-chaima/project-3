import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MinNavBar from "./MinNavBar";

import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Accueil from './Accueil';
import Admin from './Admin';
import AfficherComptes from './AfficherComptes';
import CodeConf from './CodeConf';
import Fournisseurs from './Fournisseur';
import NavBar from './NavBar';
import NewPwd from './NewPwd';
import PwdOublieForm from './PwdOublieForm';
import SignIn from './SignIn';
import Structure from './Structure';
function App() {
  return (
    <Router>
      
    <div className="App">
     
      <div className="content">
        
        <Switch>
        <Route exact path="/">
          <NavBar />
        <Accueil  />
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
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
