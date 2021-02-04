// This components renders out search area and book results list
import React, {Component} from "react";
import Header from "../components/Header.js" 
import BookSearchForm from "../components/BookSearchForm.js";
import Container from "../components/Container.js";
import Row from "../components/Row.js";
import Col from "../components/Col.js";
import BooksResultsContainer from "../components/BooksResultsContainer.js";

class SearchPage extends Component {
    render() {
        return(
            <Container>
                <Header />
            
            
           <BooksResultsContainer />
            
           </Container>
        );
    }
}

export default SearchPage;