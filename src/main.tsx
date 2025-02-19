import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//Libs
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Pages
import Home from "./pages/Home.tsx";
import NoteList from "./pages/NotesPage/NoteList.tsx";
import CreateTodo from "./pages/NotesPage/CreateTodo.tsx";
import UpdateTodo from "./pages/NotesPage/UpdateTodo.tsx";
import DeleteTodo from "./pages/NotesPage/DeleteTodo.tsx";
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
          <Route path="todo-list" element={<NoteList />}>
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
