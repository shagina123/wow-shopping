import './App.css';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Home from './home'
import Filter from './FilterMob';
import Newhome from './newhome';
import Product from './product';
import Catergory from './categoryPage'; 
import Cart from './cartPage';

function App() {
  
  return (
    <div style={{ height:'100vh'}}>
    <Router>
          <Switch>
            <Route exact path='/search/:query' component={Home} />
            <Route path='/filter' component={Filter} />
            <Route path='/home' component={Newhome} />
            <Route exact path='/product/:productid' component={Product} />
            <Route path='/category' component={Catergory} />
            <Route path='/cart' component={Cart} />
          </Switch>
         
        </Router>
        </div>
  );
  
}
export default App;
