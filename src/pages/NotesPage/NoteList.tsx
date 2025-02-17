import AsideCategoires from "../../components/AsideCategories/AsideCategoires";
import api from "../../services/Api";
import { useQuery } from "@tanstack/react-query";


export interface Notes{
  id: string,
  category: string,
  contents:{
    id: string,
    title: string,
    content: string
  }
}
const NoteList = () => {
  const { data: notes, isLoading } = useQuery<Notes[]>({
    queryKey: ["notes"],
    queryFn: async () => {
      const data = await api.get("/notes");
      return data.data;
    },
  });

  const categories = notes?.map(note => {
    return {id: note.id, category: note.category}})
  return (
    <main className="w-full grow-1">
      <h1>Notes</h1>
     <section>
      <AsideCategoires categories={categories}/>

     </section>
    </main>
  );
};

export default NoteList;
