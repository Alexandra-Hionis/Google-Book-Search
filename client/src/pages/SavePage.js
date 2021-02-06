// import React, {Component} from "react";
// import SavedBookList from "../components/SavedBookList.js";
// import Container from "../components/Container.js";

// import API from '../utils/API'


// class SaveBook extends Component {
//     state = {
//         savedBooks: []
//     };

//     //when this component mounts, grab all books that were save to the database 
//     componentDidMount() {
//         API.getBooks()
//             .then(res => this.setState({ savedBooks: res.data }))
//             .catch(err => console.log(err))
//     }

//     //function to remove book by id
//     handleDeleteButton = id => {
//         API.deleteBook(id)
//             .then(res => this.componentDidMount())
//             .catch(err => console.log(err))
//     }

//     render() {
//         return (
//             <Container >
                
                
//                     <SavedBookList savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                
//             </Container>
//         )
//     }
// }



// export default SaveBook 