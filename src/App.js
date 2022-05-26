import './App.css';
// import "./style.css";
// import styled from "styled-components";
import React from "react";
import {Route} from "react-router-dom";
import Main from "./Main";
import Day from "./Day";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
          <Main/>
      </Route>
      <Route path="/day" exact component={Day}>
      </Route>  
    </div>
  );
}

export default App;
