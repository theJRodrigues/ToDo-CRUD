import AsideCategoires from "../../components/AsideCategories/AsideCategoires";
import NotesSection from "../../components/NotesSection/NotesSection";
import api from "../../services/Api";
import { useQuery } from "@tanstack/react-query";

export interface Notes {
  id: string;
  category: string;
  contents: {
    id: string;
    title: string;
    content: string;
  };
}
const NoteList = () => {
  const { data: notes, isLoading } = useQuery<Notes[]>({
    queryKey: ["notes"],
    queryFn: async () => {
      const data = await api.get("/notes");
      return data.data;
    },
  });

  const categories =
    notes?.map((note) => {
      return { id: note.id, category: note.category };
    }) || [];

  return (
    <main className="grow-1 content-center text-white">
      <div className="grid grid-cols-auto gap-1">
        <h1 className="col-span-2 bg-blue-950 p-3 rounded-2xl">Notes</h1>
        <AsideCategoires categories={categories} />
        <NotesSection />
      </div>
    </main>
  );
};

export default NoteList;
