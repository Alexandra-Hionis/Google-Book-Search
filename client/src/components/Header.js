import React from "react";
import '../App.css';
import Row from "./Row.js";
import Col from "./Col.js";

function Header() {
    return (
        
        <div className="header">
            <Row className="row">
                <Col className="col" size="sm-12">
             
            <p id="header-title">Welcome to Goole Books!</p>
            <p id="header-sub-title">Search and save books</p>

            </Col>
            </Row>
        </div>
       
    );
}

export default Header;