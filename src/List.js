import React from "react";
import Groceries from "./Groceries.js"

const List = ({ name, items, handleClick, deleteItem }) => (
  <div>
    <ul>
      { items.map( item => <Groceries key={item.id} {...item} handleClick={handleClick} deleteItem={deleteItem}/>) }
    </ul>
  </div>
)

export default List;