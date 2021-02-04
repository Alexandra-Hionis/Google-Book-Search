import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav.js"
import SearchBooks from "./pages/SearchPage"
import SavedBooks from "./pages/SavePage"
import Header from "./components/Header.js"
import BookSearchForm from "./components/BookSearchForm.js"


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
      <Route exact path="/SearchPage" component={SearchBooks} />
    <Wrapper>
    <Route exact path="/SearchPage" component={SearchBooks} />
    <Route exact path="/SavePage" component={SavedBooks} />
    </Wrapper>
    
    <Header />
    <BookSearchForm  />
   
    
      </Router>
  );
}

export default App;
