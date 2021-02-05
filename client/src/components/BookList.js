import React from 'react';
import '../App.css';
import BookCard from './BookCard.js';
// import Row from "../components/Row.js";
// import Col from "../components/Col.js";

const BookList = (props) => {
  
  
//  renders out all of the book cards
  return (
    
    <div className="list">
        {
            // contains prop called books which will contain data of the state of books and then we map over that book data, for every object for that array were going to create a book card component 
            props.books.map((book, i) => {
                console.log(props)
                // want to pass down all the props needed so the BookCard cab rebnder out all of this info
                return <BookCard 
                // whenever in react and mapping and looping over datat and creatign components, added key to avoid error
                key={i}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.title}
                author={book.authors}
                description={book.description}
                />
                
            })
        }
</div>
    // </div>
    
  );
}

export default BookList;

