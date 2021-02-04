
import React, { useState } from 'react';
import '../App.css';
import Row from "../components/Row.js";
import Col from "../components/Col.js";

// form for searching the google books API
// put "props" in our parameters so we can access the props that were passed down from our BooksResultsContainer component

const BookSearchForm = (props) => {
  
  

  return (
    <Row className="row">
    <Col className="col" size="sm-12">
    <div className="search-area">
        
    <form action=""> Search Books
    {/* add onChange property so everytime someone types in input box, this onChange will fire off whatever we passed it / whatever was typed. Remember we set up a method in SearchPage to do this*/}
    {/* So everytime we type into the input search box, it will fire off our handleSearch method and when it fires, it will set the state, and set the search field property to whatever was typed into the search input box */}
        <input onChange={props.handleSearch} type="text" placeholder="ex: Food" />
        <button type="submit" className="btn btn-primary">Search</button>
    </form>
    </div>
    </Col>
    </Row>
    
  );
}

export default BookSearchForm;