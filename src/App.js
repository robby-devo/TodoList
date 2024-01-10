import logo from "./logo.svg";
import "./App.css";
import { useReducer, useRef, useState } from "react";
import Item from "./Item";

function App() {
  const [todo, setTodos] = useState([]);

  const inputRef = useRef();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log("true")
      setTodos([...todo, {
        text: e.target.value,
        completed: false,
        id: Date.now(),
      }]);

      inputRef.current.value = "";
    console.log("todo",todo)

    }
  };

  const handleDelete = (id)=>{
    const filter = todo.filter((e)=>{
      return e.id!==id
    })

   

    console.log("deleteafter",filter)

    setTodos(filter)
  }

  const handleCompleted = (id) =>{
    const updatedList = todo.map((e)=>{
      if(e.id===id){
        e.completed = !e.completed

      }

      return e
    })

    setTodos(updatedList)
  }

  const handleUpdatedText= (id,text)=>{
    const updatedList = todo.map((e)=>{
      if(e.id===id){
        e.text = text


      }
      return e
    })
    setTodos(updatedList)
  }
  return (
    <div className="App">
      <h3>Todo List</h3>
      <input type="text" onKeyDown={handleKeyPress} ref={inputRef} />

     {todo.map((e,i)=>{
      return (
        <Item {...e} key={i.id} deleteTodo={handleDelete} updatedCompleted={handleCompleted} updatedText={handleUpdatedText}  />
      )
     })}
    </div>
  );
}

export default App;
