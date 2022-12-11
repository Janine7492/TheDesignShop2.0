
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Weekly from './pages/Weekly';
import TDB from './pages/TDB';
import Newsletter from './pages/Newsletter';
import Wwu from './pages/Wwu';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/weekly" element={<Weekly />}></Route>
          <Route path="/tdb" element={<TDB />}></Route>
          <Route path='/wwu' element={<Wwu />}> </Route>
          <Route path='/newsletter' element={<Newsletter />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
