import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//Libs
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Pages
import Home from "./pages/Home/Home.tsx";
import Notes from "./pages/Notes/Notes.tsx";
import CreateNote from "./pages/Notes/components/modals/CreateNote.tsx";
import UpdateTodo from "./pages/Notes/components/modals/UpdateTodo.tsx";
import DeleteTodo from "./pages/Notes/components/modals/DeleteTodo.tsx";
import About from "./pages/About/About.tsx";

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
          <Route path="/notes" element={<Notes />}>
            <Route path="/notes/:categoryId"/>
            <Route path="create-note/:categoryId" element={<CreateNote />} />
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
