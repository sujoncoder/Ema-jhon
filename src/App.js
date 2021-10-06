import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Headers/Header';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
     <Header></Header>
     <Router>
       <Switch>
        <Route exact path="/">
        <Shop></Shop>
        </Route>
        <Route path="/shop">
        <Shop></Shop>
        </Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
