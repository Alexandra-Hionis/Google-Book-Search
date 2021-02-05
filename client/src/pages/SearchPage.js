// This components renders out search area and book results list
import React, {Component} from "react";
import Header from "../components/Header.js" 
import BookSearchForm from "../components/BookSearchForm.js";
import Container from "../components/Container.js";
import BookList from "../components/BookList.js";
import axios from 'axios';
// import API from '../utils/API'

class SearchPage extends Component {
    // constructor call pass in props
    constructor(props){
        super(props);
        // create state. App will contain books and data of books set to empty array. Add property called searchField to update the state of the app while everytime we add to input box. Meaning want to make sure state gets updated to whatever is inside search field. Search for dogs, than might search for food.

        this.state = {
            books: [],
            searchField: ''
        }
    }
      
     //  set up second method to make our request to Google Books Api
        // request.get("https://www.googleapis.com/books/v1/volumes")
        searchBook = (e) => {
            e.preventDefault()
            const url = "https://www.googleapis.com/books/v1/volumes?q="
            axios.get(url + this.state.searchField)
            //   .then(data => console.log(data))
            .then(data => {
                console.log(data);
                //   use spread operator to grab our items into the items array and spreading it out to the array made here (i think)
                this.setState({ books: data.items});
              })
              
                
                 
              
          };
        


    // create a method to set up functionality to update state when we type in input box / search field. Sets our state everytime we type into input box. Add parameter "e" (event) so everytime we type in into input box, we're going to get this parameter which is going to be the event.

    // Everytime we type into input box, it's going to fire an event so we grab that event (e) and property e.target.value which value will bee whatever key we enter (whatever we type in)

    //  we want to pass this method into our BookSearchForm components so our search area will have access to this function. So we pass it in as a prop and whenever you pass something in as a prop, you can name it whatever you want ex: handleSearch to keep it the same in this case. this.handleSearch will grab the handleSearch method

    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchField :e.target.value })
    }

    
    
    render() {
        return(
            <Container>
                <Header />
            
            
           <BookSearchForm handleSearch={this.handleSearch} searchBook={this.searchBook}/>
           {/* pass down prop to our BookList */}
            <BookList books={this.state.books}/>
            
           </Container>
        );
    }
}


export default SearchPage;