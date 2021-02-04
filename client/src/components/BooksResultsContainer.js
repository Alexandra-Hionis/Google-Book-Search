// This components renders out search area and book results list
import React, {Component} from "react";
import BookSearchForm from "../components/BookSearchForm.js";
import Container from "../components/Container.js";
import Row from "../components/Row.js";
import Col from "../components/Col.js";

class BooksResultsContainer extends Component {
    render() {
        return(
            <Container>
            <div>
            
                <BookSearchForm />
                
            </div>
            <div>
            <Row className="row">
            <Col className="col" size="sm-12">
                <h3>Results</h3>
            </Col>
            </Row>
            </div>
            </Container>
        );
    }
}

export default BooksResultsContainer;