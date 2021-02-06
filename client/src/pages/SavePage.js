import React from "react";
import '../App.css';
import API from "../utils/API";
import BookList from './BookList.js';

class SavePage extends Component {
     // instantiate state for saved books
     state = {
        savedBooks: []
    };

    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadBooks();
    };

    // loads books from database
    loadBooks = event => {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
                })
            })
            .catch(err => console.log(err))
    };


    render() {
        console.log(this.state.books)
        return(
            <Container>
            
            <BookList />
          
            
            
           </Container>
        );
    }
    
}

export default SavePage;