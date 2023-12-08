import React, { Component } from "react";

import "./Search.css";

class Search extends Component {
 state = {
  input: "",
 };
 handleInputChange = (e) => {
  this.setState({
   input: e.target.value,
  });
 };
 render() {
  return (
   <>
    <input
     type="text"
     className="search-bar"
     placeholder="Szukaj..."
     onChange={this.handleInputChange}
    />
   </>
  );
 }
}

export default Search;
