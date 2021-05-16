
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
     <div>
        <h1> React Router Demo</h1>
        <BrowserRouter>
        
        <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
        </nav>        
          <Switch>
            <Route path="/home" component={Home}/>             
            <Route path="/about" component={About}/>            
            <Route path="/services" component={Services}/>               
          </Switch>  
        </BrowserRouter>  
        
     </div>
  );
}

export default App;
