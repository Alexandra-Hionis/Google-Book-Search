// This components renders out search area and book results list

import React, {Component} from "react";
import BookSearchForm from "../components/BookSearchForm.js";

class BooksResultsContainer extends Component {
    render() {
        return(
            <div>
                <BookSearchForm />
            </div>
        );
    }
}

export default BooksResultsContainer;