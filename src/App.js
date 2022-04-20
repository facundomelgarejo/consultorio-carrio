import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* import Login from './Pages/Login/Login';*/
import Home from './Pages/Home/Home';




function App() {
  return (
    <div className="App">
    {/* <Login/>  */}
    <Home />
    </div>
  );
}

export default App;
