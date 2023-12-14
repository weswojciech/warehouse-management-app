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
  let filteredItems = this.props.items.filter((item) => {
   if (e.target.value === "") {
    return this.props.items;
   } else {
    return item.name.toLowerCase().includes(e.target.value.toLowerCase());
   }
  });
  console.log(filteredItems);
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
