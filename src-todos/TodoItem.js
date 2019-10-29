import React from "react"


function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" chcked={props.item.completed}/>
      <p>{props.item.text}</p>
    </div>
    <div>

    </div>
    <p></p>
    <main></main>
  )

}
div

export default TodoItem
