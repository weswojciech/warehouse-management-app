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
   },
  ],
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
    item.singlePiece--;
   }
   this.setState({ items });
  });
 };
 addItem = (
  name,
  amount,
  packaging,
  litrage,
  volume,
  amountInPackage,
  singlePiece
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
 searchItem = (e) => {
  this.setState({
   input: e.target.value,
  });
 };

 render() {
  return (
   <div className="App">
    <div className="menu">
     <AddItem add={this.addItem} items={this.state.items} />
     <Search items={this.state.items} search={this.searchItem} />
    </div>
    <ItemList
     items={this.state.items}
     increase={this.increaseAmount}
     decrease={this.decreaseAmount}
     delete={this.deleteItem}
     filteredItems={this.props.filteredItems}
    />
   </div>
  );
 }
}

export default App;
