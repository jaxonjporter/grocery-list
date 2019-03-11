import React from "react";


const Groceries = ({id, name, complete, handleClick}) => (
<li style={ complete ? { ...styles.complete } : { ...styles.grocery }} onClick={() => handleClick(id)}>
{name}
</li>
)


const styles = {
  grocery: { cursor: "pointer", backgroundColor: "grey", color: "white", },
  complete: { color: "grey", textDecoration: "line-through", cursor: "pointer", }
}

export default Groceries;