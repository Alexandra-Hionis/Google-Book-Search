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

    <div className="card">
       <img src={props.image} alt="" />
       <div className="card-body">
           <h2>{props.title}</h2>
           <h3>{props.author}</h3>
           <p>{props.description}</p>
       </div>

    </div>

<div className="card mb-3" style="max-width: 540px;">
<div className="row no-gutters">
  <div className="col-md-4">
    <img src="..." className="card-img" alt="...">
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
    
  );
}

export default BookCard;