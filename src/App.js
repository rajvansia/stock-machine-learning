import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticker from "./components/Ticker"
import Screener from "./components/Screener"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {
const [currentTime, setCurrentTime] = useState(0);

useEffect(() => {
  fetch('/price/8').then(res => res.json()).then(data => {
    setCurrentTime(data.price);
  });
}, []);
  return (
      <Router>
    <div className="App-header">
    <header>
        <h2>
          Stock AI App with Flask
        </h2>
        <Link to="/">Screener</Link>
        {' '}
        <Link to="/analyze">Analyze Stock</Link>
        {' '}
    </header>
    <br></br>
        <div>
        <Switch>
          <Route exact path="/" render={(props) => <Screener {...props} time={currentTime} />}/>
          <Route exact path="/analyze" render={(props) => <Ticker time={currentTime+1} />}/>
        </Switch>      
          </div>
    </div>
      </Router>
  );
}

export default App;
