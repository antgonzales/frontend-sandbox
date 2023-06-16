import { Redirect, Route, Switch } from "wouter";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>

      <Switch>
        <Route path="/"><h1>Home</h1></Route>
        <Route path="/orders"><h1>All Orders</h1></Route>
        <Route path="/orders/:id">
          {params => <h1>Order {params?.id}</h1>}
        </Route>
        <Route path="/deprecated">
          <Redirect to="/" />
        </Route>

        {/*
           in wouter, any Route with empty path is considered always active.
           This can be used to achieve "default" route behaviour within Switch.
           Note: the order matters! See examples below.
        */}
        <Route>This is rendered when nothing above has matched</Route>
      </Switch>
    </div>
  );
}

export default App;
