import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav.js"
import SearchBooks from "./pages/SearchPage"
import SavedBooks from "./pages/SavePage"
import SearchPage from "./pages/SearchPage.js"
import SavePage from "./pages/SavePage.js"



function Wrapper(props) {
  return (
    <>
      <Nav/>
      {/* {props.children} */}
      
    </>
  )
}

function App() {
  return (
    <Router>
      
    <Wrapper>
   
    <Route exact path="/SearchPage" component={SearchBooks} />
   
    
    <Route exact path="/SavePage" component={SavedBooks} />
    </Wrapper>
    
    <SearchPage />
    {/* <SavePage /> */}
   
   
    
      </Router>
  );
}

export default App;
