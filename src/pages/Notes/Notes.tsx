import AsideBar from "./components/AsideBar/AsideBar";
import NotesSection from "./components/NotesSection/NotesSection";
import { Outlet } from "react-router";

const Notes = () => {
  return (
    <main className="grow-1 content-center text-white">
      <div className="grid grid-cols-auto gap-1">
        <h1 className="col-span-2 bg-blue-950 p-3 rounded-2xl">Notes</h1>
        <AsideBar/>
        <NotesSection />
      </div>
      <Outlet />
    </main>
  );
};

export default Notes;
