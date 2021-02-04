
import React, { useState } from 'react';
import '../App.css';
import Row from "../components/Row.js";
import Col from "../components/Col.js";

// form for searching the google books API

function BookSearchForm () {
  
  

  return (
    <Row className="row">
    <Col className="col" size="sm-12">
    <div className="search-area">
        
    <form action=""> Search Books
        <input type="text" 
        placeholder="ex: Food"
        />
            
            <button type="submit">Search</button>

    </form>
    </div>
    </Col>
    </Row>
    
  );
}

export default BookSearchForm;