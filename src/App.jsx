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

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/nested" element={<Nested />} />
              <Route exact path="/counter" element={<Counter />} />   
              <Route exact path="/iteration" element={<Iteration />} />     
              <Route exact path="/conditional" element={<Conditional />} />
              <Route exact path="/input" element={<Input />} />
              <Route exact path="/props" element={<Props />} />
              <Route exact path="/api" element={<Api />} />
            </Routes>

            {/* <img src={logo} className="App-logo" alt="logo" />
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
            </a> */}
            
          </div>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
