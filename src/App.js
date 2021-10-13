import { BrowserRouter as Router, Switch,Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import OrderRivew from './components/OrderRivew/OrderRivew';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Reg from './components/Reg/Reg';
import Shop from './components/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      
     <AuthProvider>
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
    <PrivateRoute exact path='/placeorder'>
      <PlaceOrder></PlaceOrder>
    </PrivateRoute>
    <Route exact path='/login'>
      <Login></Login>
    </Route>
    <Route exact path='/reg'>
      <Reg></Reg>
    </Route>
    
    
    <Route exact path='*'>
      <Notfound></Notfound>
    </Route>
     </Switch>
   
</Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
