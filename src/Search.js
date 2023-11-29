import React, { Component } from "react";

import "./Search.css";

class Search extends Component {
 state = {
  input: "",
 };
 handleInputChange = (e) => {
  let index = this.props.items.length;
  for (let i = 0; i < index; i++) {
   if (
    this.props.items[i].name.toLowerCase() === this.state.input.toLowerCase()
   ) {
    console.log("XD");
    // return;
   }
  }
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
