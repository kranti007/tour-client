<<<<<<< HEAD
import { Route,  BrowserRouter as Router, Routes} from 'react-router-dom';
import Nav from './TourTravelProject/View/Nav-Bar/Nav';


import HomeContent from './TourTravelProject/View/Main/HomeContent';
import AboutUs from './TourTravelProject/View/Nav-Bar/About/AboutUs';
import Product from './TourTravelProject/View/Nav-Bar/Packages/Product';
import Inquiry from './TourTravelProject/View/Nav-Bar/InquiryNow/Inquiry';

import Contact from './TourTravelProject/View/Nav-Bar/ContactUs/Contact';





function App() {
  return (
    <div >
      
      <Router>
      <Nav/>

      
       
      
      
      
        
        <Routes>
        <Route path='/' element={<HomeContent/>}/>
        <Route path='/AboutUs' element= {<AboutUs/>}/>
        <Route path='/Packages' element={<Product/>}/>
        <Route path='/Inquiry' element={<Inquiry/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      
        </Routes> 
        
        
      </Router> 
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 5365a0e (Initialize project using Create React App)
    </div>
  );
}

export default App;
