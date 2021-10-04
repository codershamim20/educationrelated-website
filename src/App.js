
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Academic from './Components/Academic/Academic';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div >
      
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route  path='/home'>
          <Home></Home>
          </Route>
          <Route  path="/about">
          <About></About>
          </Route>
          <Route  path='/academic'>
            <Academic></Academic>
          </Route>
          <Route  path='/services'>
          <Services></Services>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
