import Item from "./Item.js";

import "./ItemList.css";

const ItemList = (props) => {
 const available = props.items.filter((item) => item.amount > 0);
 const sortedAvailable = available.sort(function (a, b) {
  if (a.name < b.name) {
   return -1;
  }
  if (a.name > b.name) {
   return 1;
  }
  return 0;
 });
 const availableItemsSorted = sortedAvailable.map((item) => (
  <Item
   key={item.id}
   item={item}
   increase={props.increase}
   decrease={props.decrease}
  />
 ));

 const unavailable = props.items.filter((item) => item.amount === 0);
 const sortedUnavailable = unavailable.sort(function (a, b) {
  if (a.name < b.name) {
   return -1;
  }
  if (a.name > b.name) {
   return 1;
  }
  return 0;
 });
 const unavailableItemsSorted = sortedUnavailable.map((item) => (
  <Item
   key={item.id}
   item={item}
   increase={props.increase}
   decrease={props.decrease}
  />
 ));
 return (
  <section className="item-list">
   <h1 className="item-list__title">Produkty dostępne na magazynie</h1>
   <ul className="item-list__list">{availableItemsSorted}</ul>
   <h1 className="item-list__title">Produkty niedostępne na magazynie</h1>
   <ul className="item-list__list">{unavailableItemsSorted}</ul>
  </section>
 );
};

export default ItemList;
