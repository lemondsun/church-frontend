import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import './App.css';

import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import Events from '../src/pages/Events';
import Testimonies from '../src/pages/Testimonies';
import Contact from '../src/pages/Contact'
import CopySection from '../src/components/CopySection'



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'
        render={()=> <Home/>}
      />
      <Route exact path='/events'
        render={()=> <Events/>}
      />
      <Route exact path='/testimonies'
        render={() => <Testimonies />}
      />
      <Route exact path='/contact'
        render={()=> <Contact/>}
      />
      <CopySection />
    </div>
  );
}

export default App;
