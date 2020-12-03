import './App.css';
import yosemiteimg from './images/Yosemite.jpg';
import NavTable from "./components/navtable";
import { Router } from "@reach/router";
import Passions from "./views/passions";
import ContactWidget from './components/contactwidget';

function App() {
  return (
    <div className="App">
      <img className="FillWidth" src={yosemiteimg} alt="Yosemite National Park - Half Dome from Four Mile Trail" />
      <div className="container"> 
        <Router>
          <NavTable path="/"/>
          <Passions path="/passions" />
        </Router>
        <ContactWidget />
      </div>
    </div>
  );
}

export default App;
