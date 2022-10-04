import './App.css';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Stories from './Pages/Stories';
import Tours from './Pages/Tours';
import Booking from './Pages/Booking';
import Feature from './Pages/Feature';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Dashboard />} />
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/stories" element={<Stories/>}></Route>
        <Route path="/benefits" element={<Feature/>}></Route>
        <Route path="/tours" element={<Tours/>}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
