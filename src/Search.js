import React, { Component } from "react";

import "./Search.css";

class Search extends Component {
 state = {
  input: "",
 };
 handleInputChange = (e, props) => {
  // do sprawdzenia
  this.setState({
   input: e.target.value,
  });

  const filteredItems = this.props.items.filter((item) => {
   if (this.state.input === "") {
    return this.props.items;
   } else {
    return item.name.toLowerCase().includes(this.state.input);
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
