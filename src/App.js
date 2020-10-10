import React from 'react';
import { BrowserRouter ,Route , Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import NameList from './components/pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar.jsx';
import Home from './components/pages/Home/Home.jsx';
import About from './components/pages/About/About.jsx';

function App() {
  return (
    <div>
    <BrowserRouter>
      <HeaderBar />
      <Switch>
         <Route path= "/about"><About/></Route>
         <Route path= "/nameList"><NameList /></Route>
         <Route path="/"><Home /></Route> 
      </Switch>
           
    </BrowserRouter>
    
    </div>
  );
}

export default App;
