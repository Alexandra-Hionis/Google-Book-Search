
import React, { useState } from 'react';
import '../App.css';
import Row from "../components/Row.js";
import Col from "../components/Col.js";


function BookSearchForm () {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Row className="row">
    <Col className="col" size="sm-12">
    <section>
      <form >
      {/* <form onSubmit={onSubmitHandler}> */}
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="food, classical music, etc."
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
    </Col>
    </Row>
  );
}

export default BookSearchForm;