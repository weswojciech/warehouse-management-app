import React, { Component } from "react";

import "./AddItem.css";

class AddItem extends Component {
 state = {
  name: "",
  amount: "1",
  amountInPackage: "1",
  packaging: "piece",
  volume: ".25",
  litrage: "",
  singlePiece: "",
 };
 handleNameChange = (e) => {
  this.setState({
   name: e.target.value,
  });
 };
 handleAmountChange = (e) => {
  this.setState({
   amount: e.target.value,
   singlePiece: e.target.value * this.state.amountInPackage,
  });
 };
 handleAmountInPackageChange = (e) => {
  this.setState({
   amountInPackage: e.target.value,
   singlePiece: e.target.value * this.state.amount,
  });
 };
 handlePackagingChange = (e) => {
  this.setState({
   packaging: e.target.value,
  });
 };
 handleVolumeChange = (e) => {
  this.setState({
   volume: e.target.value,
  });
 };
 handleAddClick = (props) => {
  let index = this.props.items.length;
  for (let i = 0; i < index; i++) {
   if (
    this.props.items[i].name.toLowerCase() === this.state.name.toLowerCase()
   ) {
    alert("Dany produkt znajduje się w bazie!");
    return;
   }
   this.setState({
    name: "",
    amount: "1",
    amountInPackage: "1",
   });
  }
  const {
   name,
   amount,
   packaging,
   litrage,
   volume,
   amountInPackage,
   singlePiece,
  } = this.state;
  if (name.length > 3) {
   const add = this.props.add(
    name,
    amount,
    packaging,
    litrage,
    volume,
    amountInPackage,
    singlePiece
   );
   if (add) {
    this.setState({
     name: "",
     amount: "1",
     amountInPackage: "1",
    });
   }
  } else {
   alert("Nazwa produktu jest zbyt krótka!");
  }
 };
 render() {
  return (
   <div className="add-item">
    <input
     className="add-item__input add-item__input-product-name"
     type="text"
     placeholder="Wpisz nazwę produktu"
     value={this.state.name}
     onChange={this.handleNameChange}
    />
    <input
     type="number"
     className="add-item__input add-item__input-amount"
     placeholder="0"
     min={0}
     value={this.state.amount}
     onChange={this.handleAmountChange}
    />
    <select
     name="type"
     id="select__type"
     className="add-item__select add-item__select-type"
     value={this.state.packaging}
     onChange={this.handlePackagingChange}
    >
     <option value="piece">Sztuka</option>
     <option value="packaging">Opakowanie</option>
    </select>
    <input
     type="number"
     name="amountInPackage"
     className="add-item__input add-item__input-amountInPackage"
     placeholder="Szt w opak"
     value={this.state.amountInPackage}
     min={0}
     onChange={this.handleAmountInPackageChange}
    />
    <select
     name="volume"
     id="select__volume"
     className="add-item__select add-item__select-volume"
     onChange={this.handleVolumeChange}
    >
     <option value=".25">250ml</option>
     <option value=".33">330ml</option>
     <option value=".5">500ml</option>
     <option value=".7">700ml</option>
     <option value=".850">850ml</option>
     <option value="1">1000ml</option>
     <option value="1.5">1500ml</option>
    </select>

    <button className="add-item__btn" onClick={this.handleAddClick}>
     Dodaj
    </button>
   </div>
  );
 }
}

export default AddItem;
