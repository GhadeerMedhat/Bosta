
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Prices from './components/Prices';
import Callsales from './components/Callsales';
import Trickshimpent from './components/Trickshipment';
import Login from './components/Login';
import DetailsShipment from './components/DetailsShipment';
import Stepperline from './components/Steeperline';
import Deliverytitle from './components/Deliverytitle';



function App() {
  return (
    <div className="App">
      <title>bosta</title>
      <Navbar/>
      
      <DetailsShipment/>
      <Stepperline/>
      <Routes>
        <Route path="/home"element={<Home/>}> </Route>
        <Route path="/prices"element={<Prices/>}> </Route>
        <Route path="/Callsales"element={<Callsales/>}> </Route>
        <Route path="/Trickshipment"element={<Trickshimpent/>}> </Route>
        <Route path="/Login"element={<Login/>}> </Route>
      
      </Routes>
      <Deliverytitle/>
    </div>
  );
}

export default App;
