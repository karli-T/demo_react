// import logo from './logo.svg';
import React from "react";
import './App.css';

import Home from './pages/Home';
import Nested from './pages/Nested';
import Counter from './pages/Counter';
import Iteration from './pages/Iteration';
import Conditional from './pages/Conditional';
import Input from './pages/Input';
import Props from './pages/Props';
import Api from './pages/Api';

import Nav from "./components/Nav";

import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';




class App extends React.Component {

  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <div className="maincontent" id="mainContent">
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nested" element={<Nested />} />
              <Route path="/counter" element={<Counter />} />   
              <Route path="/iteration" element={<Iteration />} />     
              <Route path="/conditional" element={<Conditional />} />
              <Route path="/input" element={<Input />} />
              <Route path="/props" element={<Props />} />
              <Route path="/api" element={<Api />} />
            </Routes>
            
          </div>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
