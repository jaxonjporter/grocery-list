import React from "react";


const Groceries = ({id, name, complete, handleClick, deleteItem}) => (
<div>
  <li style={ complete ? { ...styles.complete } : { ...styles.grocery }} onClick={() => handleClick(id)}>
    {name}
  </li>
  <button onClick={() => deleteItem(id)}>Delete</button>
</div>
)


const styles = {
  grocery: { cursor: "pointer", backgroundColor: "grey", color: "white", },
  complete: { color: "grey", textDecoration: "line-through", cursor: "pointer", }
}

export default Groceries;