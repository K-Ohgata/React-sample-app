import React, { Component, useState } from 'react';

const TodoList = () => {
  let [todoList, setTodoList] = useState([])
  let [todoItem, setTodo] = useState({id:0,todo:''})

  const deleteTodo=(id)=>{
    console.log(id)
    setTodoList(todoList.filter((todo)=>todo.id!==id))
  }
  
  const showtodo = todoList.map((val, id) => {
    return (
      <ul>
        <li key={val.id}>
          {val.todo}
          <button onClick={(id)=>deleteTodo(val.id)}>削除</button>
        </li>
      </ul>
    )
  })

  const newTodo=(e)=>{
    setTodo({...todoItem,todo:e.target.value})
  }
  const addTodo=()=>{
    setTodo({...todoItem,id:todoList.length+1})
    setTodoList([...todoList,todoItem])
    // const box=document.getElementById('box')
    // box.value=''
  }

return (
  <div>
    <h1>Todo List</h1>
    <input id="box" onChange={(e)=>newTodo(e)}></input>
    {console.log(todoItem)}
    <button onClick={addTodo}>追加</button>
    {console.log(todoList)}
    <div>{showtodo}</div>
  </div>
)
}

export default TodoList;