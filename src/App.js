import './App.css';
import Notes from './notes/notes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signin from './components/SignIn/SignIn';
import Home from './pages';

function App() {
  return (
   
    <Router>
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route exact path='/notes/notes' component={Notes}/>
        <Route exact path='/signin' component={Signin}/>
   
 
    </Switch>
    </Router>
   
  );
}

export default App;
