import React from "react";
import Groceries from "./Groceries.js"

const List = ({ name, items, handleClick }) => (
  <div>
    <ul>
      { items.map( item => <Groceries key={item.id} {...item} handleClick={handleClick} />) }
    </ul>
  </div>
)

export default List;