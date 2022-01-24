import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home'
import Character from './pages/Character'
import CharacterId from './pages/CharacterId'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/character" component={Character} />
            <Route exact path="/character/:id" component={CharacterId} />
         </Switch>
         <Footer />
      </BrowserRouter>

   );
}

export default App;
