import { BrowserRouter as Router, Switch,Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import OrderRivew from './components/OrderRivew/OrderRivew';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      
     
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Shop></Shop>
          </Route>
          <Route exact path='/shop'>
          <Shop></Shop>
          </Route>
          <Route exact path='/orders'>
         <OrderRivew></OrderRivew>
          </Route>
          <Route exact path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='*'>
            <Notfound></Notfound>
          </Route>
           </Switch>
         
      </Router>
    </div>
  );
}

export default App;
