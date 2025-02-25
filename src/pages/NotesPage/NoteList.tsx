import NavCategories from "./components/NavCategories";
import NotesSection from "./components/NotesSection";
import { useEffect, useMemo, useState } from "react";
import useGetCategories from "../../hooks/useGetCategories";
import useGetContents, { Contents } from "../../hooks/useGetContents";


const NoteList = () => {
  const {
    data: categories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useGetCategories("/categories", "categories");
  


  const [categoryId, setCategoryOption] = useState<string | null>(null);

  return (
    <main className="grow-1 content-center text-white">
      <div className="grid grid-cols-auto gap-1">
        <h1 className="col-span-2 bg-blue-950 p-3 rounded-2xl">Notes</h1>
        <aside className="bg-blue-950 p-3 rounded-2xl">
          {isLoadingCategories ? (<p>Carregando...</p>) 
          : errorCategories ? (<p>Ocorreu um erro<br /> Tente novamente mais tarde</p>) 
          : categories && (<NavCategories categories={categories} 
          setCategory={setCategoryOption}/>)}
        </aside>
        <section>
        {
          !categoryId ? (<p>Selecione uma categoria</p>)
          :<NotesSection categoryId={categoryId}/>
        }
        
        </section>
        
      </div>
    </main>
  );
};

export default NoteList;
