import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MinNavBar from "./MinNavBar";

import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Accueil from './Accueil';
import Admin from './Admin';
import AfficherComptes from './AfficherComptes';
import CodeConf from './CodeConf';
import NewPwd from './NewPwd';
import PwdOublieForm from './PwdOublieForm';
import SignIn from './SignIn';
function App() {
  return (
    <Router>
      
    <div className="App">
     
      <div className="content">
        <Switch>
        <Route exact path="/">
        <Accueil  />
        </Route>

      <Route  path="/SignIn">
      <SignIn />
      </Route>
      <Route path="/PwdOublieForm">
        <PwdOublieForm />
      </Route>

      <Route path="/CodeConf">
        <CodeConf  />
      </Route>

      <Route path="/NewPwd">
        <NewPwd  />
      </Route>
      <Route path="/Admin">
        <Admin />
      </Route>
      <Route path="/AfficherComptes">
      <MinNavBar/>
                   <AfficherComptes />
                </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
