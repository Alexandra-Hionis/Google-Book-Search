import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav.js"
import Header from "./components/Header.js"
import SearchPage from "./pages/SearchPage"





function App() {
  return (
    <Router>
      
      <Nav/>
   <Header />
  <Switch>
    {/* <Route exact path="/SavePage" component={SavePage} /> */}
    <Route exact path="/" component={SearchPage} />
    </Switch>
    
    
    
    {/* <SavePage /> */}
   
   
    
      </Router>
  );
}

export default App;
