import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Pages/Contact/Contact';
import Service from './components/Pages/Services/Service';
import About from './components/Pages/Abouts/About';


 function App() {
  return (
     
     <Router>
       <Navbar />
       <Switch>
         <Route  exact path='/' component={Home} />
         <Route exact path='/About' component={About} />
         <Route exact path='/Service' component={Service} />
         <Route exact path='/Contact' component={Contact} />
       </Switch>
       <Footer />
     </Router>
      
     
  );
}

export default App;
