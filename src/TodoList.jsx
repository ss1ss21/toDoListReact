import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Button, inputAdornmentClasses, unstable_useId } from "@mui/material";
import { SelfImprovementSharp } from "@mui/icons-material";
import TodoListItems from "./TodoListItems";
import AddItems from "./AddItems";
import { v4 as uuid } from 'uuid'; 

const initialTodo = [
  { id: uuid(), text: "Read a book", complated: true },
  { id: uuid(), text: "make a coffee", complated: true },
  { id: uuid(), text: "learn electro guitar", complated: false },
  { id: uuid(), text: "learn ract", complated: true }
]
const initialTodos = ()=>{
  const data = JSON.parse(localStorage.getItem("todos"));
  if(!data) return [];
  return data;
}

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodo);

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const todoRemove = (id) => {
    setTodos((prevTodo) => { return prevTodo.filter((t) => (t.id !== id)) });
  }
  const taggleCheck = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => todo.id === id ? { ...todo, complated: !todo.complated } : todo )
    })
  }

  const handleSubmit = (content) =>{
    setTodos((prevTodo) => {
      return [...prevTodo, {id: uuid(), text:content, complated:false}];
    })
  }
  return (
    <div>
      <h1>TodoList</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => (
          <TodoListItems todo={todo} key={todo.id} todoRemove={() => todoRemove(todo.id)} taggle={() => taggleCheck(todo.id)} />
        )
        )}
        <AddItems handleSubmit={handleSubmit}/>     
      </List>
    </div>
  )
}
