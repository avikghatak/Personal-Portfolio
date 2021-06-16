import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
// import {Footer} from './components/Footer'
import {AnimatePresence } from 'framer-motion'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path= '/Personal-Portfolio/' component={Home}></Route>
      <Route exact path= '/Personal-Portfolio/About' component={About}></Route>
      <Route exact path= '/Personal-Portfolio/Services' component={Services}></Route>
      <Route exact path= '/Personal-Portfolio/Contact' component={Contact}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
