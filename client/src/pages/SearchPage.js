import React from "react";
import '../App.css';
import Row from "../components/Row.js";
import Col from "../components/Col.js";

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