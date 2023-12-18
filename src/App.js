import React, { Component } from "react";

import "./App.css";
import AddItem from "./AddItem.js";
import ItemList from "./ItemList.js";
import Search from "./Search.js";

class App extends Component {
 counter = 1;
 state = {
  items: [
   {
    id: 0,
    name: "",
    amount: "",
    packaging: "",
    litrage: "",
    volume: "",
    amountInPackage: "",
    singlePiece: "",
    isActive: false,
   },
  ],
  input: "",
 };
 increaseAmount = (id) => {
  const items = [...this.state.items];
  items.forEach((item) => {
   if (item.id === id) {
    item.singlePiece++;
   }
   this.setState({ items });
  });
 };
 decreaseAmount = (id) => {
  const items = [...this.state.items];
  items.forEach((item) => {
   if (item.id === id) {
    if (item.singlePiece === 0) {
     return null;
    }
    item.singlePiece--;
    this.setState({ items });
   }
  });
 };
 addItem = (
  name,
  amount,
  packaging,
  litrage,
  volume,
  amountInPackage,
  singlePiece,
  isActive
 ) => {
  const item = {
   id: this.counter,
   name,
   amount,
   packaging,
   litrage,
   volume,
   amountInPackage,
   singlePiece,
   isActive,
  };
  this.counter++;
  this.setState((prevState) => ({
   items: [...prevState.items, item],
  }));
  return true;
 };
 deleteItem = (id) => {
  let items = [...this.state.items];
  items = items.filter((items) => items.id !== id);
  this.setState({ items });
 };
 expandItem = (id) => {
  const items = [...this.state.items];
  items.forEach((item) => {
   if (item.id === id && item.isActive === true) {
    item.isActive = false;
   } else if (item.id === id && item.isActive === false) {
    item.isActive = true;
   }
   this.setState({ items });
  });
 };
 handleInputChange = (e) => {
  this.setState({
   input: e.target.value,
  });
  let filteredItems = this.state.items.filter((item) => {
   if (e.target.value === "") {
    return this.state.items;
   } else {
    return item.name.toLowerCase().includes(e.target.value.toLowerCase());
   }
  });
  console.log(filteredItems);
  return filteredItems;
 };
 render() {
  return (
   <div className="App">
    <div className="menu">
     <AddItem add={this.addItem} items={this.state.items} />
     <Search
      items={this.state.items}
      handleInputChange={this.handleInputChange}
     />
    </div>
    <ItemList
     items={this.state.items}
     increase={this.increaseAmount}
     decrease={this.decreaseAmount}
     delete={this.deleteItem}
     filteredItems={this.filteredItems}
     expandItem={this.expandItem}
    />
   </div>
  );
 }
}

export default App;
