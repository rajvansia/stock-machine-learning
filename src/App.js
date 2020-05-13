import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticker from "./components/Ticker"
import Screener from "./components/Screener"
import Analyze from "./components/Analyze"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Dashboard(){
  const [currentTime, setCurrentTime] = useState(0);
  let query = useQuery();

  useEffect(() => {
    fetch('/price/8').then(res => res.json()).then(data => {
      setCurrentTime(data.price);
    });
  }, []);
  return(
    <div className="App-header">
    <header>
        <h2>
          Stock AI App with Flask
        </h2>
        <Link to="/">Screener</Link>
        {' '}
        <Link to="/ticker"> Ticker</Link>
        {' '}
        <Link to="/analyze">Analyze Stock</Link>
        {' '}
        <Link to="/analyze?name=netflix">Netflix</Link>
        <Link to="/ticker?name=1">Netflix</Link>
    </header>
    <br></br>
        <div>
        <Switch>
          <Route exact path="/" render={(props) => <Screener {...props} time={currentTime} />}/>
          <Route exact path="/ticker" render={(props) => <Ticker time={currentTime+1} />}/>

          <Analyze name={query.get("name")} />
          <Ticker time={query.get("name")}/>

        </Switch>      
          </div>
    </div>
    
  );
}

function App() {

  return (
      <Router>
      <Dashboard/>
      </Router>
  );
}

export default App;
