import React from 'react';
import '../App.css';
import SavedBookCard from './SavedBookCard.js';
// import Row from "../components/Row.js";
// import Col from "../components/Col.js";

const SavedBookList = (props) => {
  console.log(props.books);
  
//  renders out all of the book cards
  return (

    <div className="list">
        {/* <Row className="row">
        <Col className="col" size="sm-12">
            <h3>Results</h3>
        </Col>
        </Row> */}
        {
            // contains prop called books which will contain data of the state of books and then we map over that book data, for every object for that array were going to create a book card component
            // But what if the props object does not have the books property initially?
            // So in that case we use the ? operation also known as optional chaining
            // What the ? will do is if it finds that the books property is not available on the props object it will stop executing that line further and return with an undefined 
            props?.savedBooks?.map((book, i) => {
                // console.log(props)
                // want to pass down all the props needed so the BookCard cab rebnder out all of this info
                return <SavedBookCard 
                // whenever in react and mapping and looping over datat and creatign components, added key to avoid error
                key={i}
                id={savedBooks.id}
                image={savedBooks.volumeInfo.imageLinks.thumbnail}
                title={savedBooks.volumeInfo.title}
                author={savedBooks.volumeInfo.authors}
                description={savedBooks.volumeInfo.description}
                handleSavedButton={props.handleSavedButton}
                view={savedBooks.selfLink}
                />
                
            })
        }
</div>
   
    
  );
}

export default SavedBookList;

