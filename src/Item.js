import React from "react";

import "./Item.css";

const Item = (props) => {
 const { name, amount, id, amountInPackage, volume } = props.item;

 const amountInLiters = amount * amountInPackage * volume;

 return (
  <>
   <li className="item">
    {name} - ilość(szt.):
    <button
     className="item__btn  btn__amount--decrease"
     onClick={() => props.decrease(id)}
    >
     -
    </button>
    {amount}
    <button
     className="item__btn btn__amount--increase"
     onClick={() => props.increase(id)}
    >
     +
    </button>
    Ilość (litry): {amountInLiters}L
    <button className="item__btn" onClick={() => props.delete(id)}>
     X
    </button>
   </li>
  </>
 );
};

export default Item;
