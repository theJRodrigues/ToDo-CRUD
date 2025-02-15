import { useEffect, useState } from "react";
// import { Outlet, useMatch } from "react-router";
import api from "../../services/Api";
import { useQuery } from "@tanstack/react-query";

const TodoList = () => {
  const {data, isLoading }= useQuery({queryKey:['todo'],
  queryFn:async () =>{
      const data = await api.get("http://localhost:3000/categories")
      return data.data}})

    
  // const location = useMatch("/todo-list");
  // const isCreateTodo = !location;
  console.log(data, isLoading)
  return (
    <div className="w-full grow-1">
      <h1>Todo List</h1>
      
    </div>
  );
};

export default TodoList;
