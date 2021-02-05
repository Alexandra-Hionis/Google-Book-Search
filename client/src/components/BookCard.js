import React from 'react';
import '../App.css';
import Row from "../components/Row.js";
import Col from "../components/Col.js";

const BookCard = (props) => {
  
  
//  renders out all of the book cards
  return (

<Row className="row">
 <Col className="col" size="sm-12">

<div className="card mb-3">
<div className="row no-gutters">
  <div className="col-md-4">
  <img src={props.image} className="card-img" alt="" />
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Author: {props.author}</p>
      <p className="card-text">{props.description}</p>

    </div>
  </div>
</div>
</div>
</Col>
</Row>
    
  );
}

export default BookCard;
