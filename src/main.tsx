import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//Libs
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Pages
import Home from "./pages/Home.tsx";
import TodoList from "./pages/TodoPage/TodoList.tsx";
import CreateTodo from "./pages/TodoPage/CreateTodo.tsx";
import UpdateTodo from "./pages/TodoPage/UpdateTodo.tsx";
import DeleteTodo from "./pages/TodoPage/DeleteTodo.tsx";
import About from "./pages/About.tsx";

//Components
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo-list" element={<TodoList />}>
            <Route path="create-todo" element={<CreateTodo />} />
            <Route path="delete-todo" element={<DeleteTodo />} />
            <Route path="update-todo" element={<UpdateTodo />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
