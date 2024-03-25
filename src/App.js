import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Accueil from './Accueil';
import CodeConf from './CodeConf';
import NavBar from './NavBar';
import NewPwd from './NewPwd';
import PwdOublieForm from './PwdOublieForm';
import SignIn from './SignIn';
function App() {
  return (
    <Router>
      
    <div className="App">
      <NavBar />
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
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
