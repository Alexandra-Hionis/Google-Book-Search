import React from "react";
import '../App.css';
import Logo from "../images/google-books-logo.png";
import Row from "./Row.js";
import Col from "./Col.js";

function Container() {
    return (
        
        <div className="header">
            <Row>
                <Col size="sm-12">
             
            <h1>Welcome to Goole Books!</h1>

            </Col>
            </Row>
        </div>
       
    );
}

export default Container;