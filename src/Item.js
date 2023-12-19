import React from "react";

import "./scss/Item.css";

const Item = (props) => {
 const { name, id, volume, singlePiece, isActive } = props.item;

 const amountInLiters = singlePiece * volume;

 return (
  <>
   <li className={isActive ? "item-active" : "item"}>
    <span className="item__span">
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
     <p className={isActive ? "item-active__text" : "item__text"}>
      {isActive ? ` Opakowania o pojemności: ${props.item.volume}L` : null}
     </p>
    </span>
    <button
     className={
      isActive
       ? "item__btn item__btn-expand-active"
       : "item__btn item__btn-expand"
     }
     onClick={() => props.expandItem(id)}
    >
     {isActive ? "^" : "v"}
    </button>
   </li>
  </>
 );
};

export default Item;
