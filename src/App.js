import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar.jsx';

function App() {
  return (
    <div>
    <HeaderBar />
    <NameList />      {/*call for namelist */}
    </div>
  );
}

export default App;
