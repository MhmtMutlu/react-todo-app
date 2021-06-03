import {React, useState} from "react";
import "./TodoItem.css";

function Todo(props) {
  const [completed,setCompleted] = useState(false);
  function complete(){
    const handler = document.querySelectorAll(".todoItem");
    handler.forEach(item => {
      item.addEventListener("click",function(e) {
        setCompleted(true);
        if(completed)
        {
          e.target.style.textDecoration="line-through red";
          setCompleted(false);
        }
        else {
         e.target.style.textDecoration="none";
        }
      })
    })
  }
  const { content } = props;
  const { id } = props;
  return (
      <div onClick={complete} className="todoItem d-flex align-items-center">
        {content}
        <button onClick={() => props.delete(id)} className="btn btn-danger btnClose">Sil</button>
      </div>
  )
}

export default Todo;