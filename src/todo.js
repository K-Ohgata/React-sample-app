import React, { Component, useState } from 'react';

const TodoList = () => {
  let [todoItem, setTodo] = useState({id:'',todo:''})
  let [todoList, setTodoList] = useState([])

  const deleteTodo=(id)=>{
    console.log(id)
    console.log(todoList)
    setTodoList(todoList.splice(id-1,1))
  }
  
  const showtodo = todoList.map((val, id) => {
    return (
      <ul>
        <li key={val.id}>
          {val.todo}
          {/* <button>削除</button> */}

          <button onClick={(id)=>deleteTodo(val.id)}>削除</button>
        </li>
      </ul>
    )
  })

  const newTodo=(e)=>{
    setTodo({id:todoList.length+1,todo:e.target.value})
  }
  const addTodo=()=>{
    setTodoList([...todoList,todoItem])
  }

return (
  <div>
    <h1>Todo List</h1>
    <input onChange={(e)=>newTodo(e)}></input>
    <button onClick={addTodo}>追加</button>
    {console.log(todoList)}
    <div>{showtodo}</div>
  </div>
)
}

export default TodoList;