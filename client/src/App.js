import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav.js"
import SearchPage from "./pages/SearchPage"
// import SavePage from "./pages/SavePage.js"




function App() {
  return (
    <Router>
      
      <Nav/>
   
  <Switch>
    {/* <Route exact path="/SavePage" component={SavePage} /> */}
    <Route exact path="/" component={SearchPage} />
    </Switch>
    
    
    
    {/* <SavePage /> */}
   
   
    
      </Router>
  );
}

export default App;
