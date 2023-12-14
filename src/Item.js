import React from "react";

import "./Item.css";

const Item = (props) => {
 const { name, id, volume, singlePiece, isActive } = props.item;

 const amountInLiters = singlePiece * volume;

 return (
  <>
   <li className={isActive ? "item-active" : "item"}>
    {name} - ilość(szt.):
    <button
     className="item__btn  btn__amount--decrease"
     onClick={() => props.decrease(id)}
    >
     -
    </button>
    {singlePiece}
    <button
     className="item__btn btn__amount--increase"
     onClick={() => props.increase(id)}
    >
     +
    </button>
    Ilość (litry): {Math.floor(amountInLiters * 100) / 100}L
    <button className="item__btn" onClick={() => props.delete(id)}>
     X
    </button>
    <button
     className="item__btn item__btn-expand"
     onClick={() => props.expandItem(id)}
    >
     {isActive ? "^" : "v"}
    </button>
   </li>
  </>
 );
};

export default Item;
