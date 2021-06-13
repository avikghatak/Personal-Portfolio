import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
// import {Footer} from './components/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path= '/Personal-Portfolio/' component={Home}></Route>
      <Route path= '/Personal-Portfolio/About' component={About}></Route>
      <Route path= '/Personal-Portfolio/Services' component={Services}></Route>
      <Route path= '/Personal-Portfolio/Contact' component={Contact}></Route>
      </Switch>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
