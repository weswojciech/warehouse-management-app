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
   },
  ],
 };
 increaseAmount = (id) => {
  const items = [...this.state.items];
  items.forEach((item) => {
   if (item.id === id) {
    item.amount++;
   }
   this.setState({ items });
  });
 };
 decreaseAmount = (id) => {
  const items = [...this.state.items];
  items.forEach((item) => {
   if (item.id === id) {
    item.amount--;
   }
   this.setState({ items });
  });
 };
 addItem = (name, amount) => {
  const item = {
   id: this.counter,
   name,
   amount,
  };
  this.counter++;
  this.setState((prevState) => ({
   items: [...prevState.items, item],
  }));

  return true;
 };
 render() {
  return (
   <div className="App">
    <div className="menu">
     <AddItem add={this.addItem} items={this.state.items} />
     <Search items={this.state.items} />
    </div>
    <ItemList
     items={this.state.items}
     increase={this.increaseAmount}
     decrease={this.decreaseAmount}
    />
   </div>
  );
 }
}

export default App;
