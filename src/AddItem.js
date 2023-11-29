import React, { Component } from "react";

import "./AddItem.css";

class AddItem extends Component {
 state = {
  name: "",
  amount: "1",
 };
 handleNameChange = (e) => {
  this.setState({
   name: e.target.value,
  });
 };
 handleAmountChange = (e) => {
  this.setState({
   amount: e.target.value,
  });
 };

 handleAddClick = (props) => {
  // zrobić funkcje sprawdzającą czy dany produkt jest dodany
  let index = this.props.items.length;
  for (let i = 0; i < index; i++) {
   if (
    this.props.items[i].name.toLowerCase() === this.state.name.toLowerCase()
   ) {
    alert("Dany produkt znajduje się w bazie!");
    return;
   }
  }
  const { name, amount } = this.state;
  if (name.length > 3) {
   const add = this.props.add(name, amount);
   if (add) {
    this.setState({
     name: "",
     amount: "1",
    });
   }
  } else {
   alert("Nazwa produktu jest zbyt krótka!");
  }
 };
 //  handleValidateName = () => {
 //   const { name } = this.state
 //  }
 render() {
  return (
   <div className="add-item">
    <input
     className="add-item__input add-item__input--product-name"
     type="text"
     placeholder="Wpisz nazwę produktu"
     value={this.state.name}
     onChange={this.handleNameChange}
    />
    <input
     type="number"
     className="add-item__input add-item__input--amount"
     placeholder="0"
     min={0}
     value={this.state.amount}
     onChange={this.handleAmountChange}
    />
    <button className="add-item__btn" onClick={this.handleAddClick}>
     Dodaj
    </button>
   </div>
  );
 }
}

export default AddItem;
