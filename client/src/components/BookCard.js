import React from 'react';
import '../App.css';
// import Row from "../components/Row.js";
// import Col from "../components/Col.js";

const BookCard = (props) => {
  
  
//  renders out all of the book cards
  return (
    // <Row className="row">
    // <Col className="col" size="sm-12">
   
    // </Col>
    // </Row>

    <div className="card-container">
       <img src={props.image} alt="" />
       <div className="desc">
           <h2>{props.title}</h2>
           <h3>{props.author}</h3>
           <p>{props.description}</p>
       </div>

    </div>
    
  );
}

export default BookCard;