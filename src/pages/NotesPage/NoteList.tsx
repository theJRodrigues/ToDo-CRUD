import NavCategories from "./components/NavCategories";
import NotesSection from "./components/NotesSection";
import { useState } from "react";
import useGetData from "../../hooks/useGetData";

export interface Categories {
  id: string;
  name: string;
}

export interface Contents {
  id: string;
  categoryId: string;
  title: string;
  content: string;
}

const NoteList = () => {
  const {
    data: categories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useGetData<Categories>("/categories", "categories");
  const {
    data: contents,
    error: errorContents,
    isLoading: isLoadingContent,
  } = useGetData<Contents>("/contents", "contents");

  const [categoryId, setCategoryOption] = useState<string>("");

  return (
    <main className="grow-1 content-center text-white">
      <div className="grid grid-cols-auto gap-1">
        <h1 className="col-span-2 bg-blue-950 p-3 rounded-2xl">Notes</h1>
        <aside className="bg-blue-950 p-3 rounded-2xl">
          {isLoadingCategories ? (
            <p>Carregando...</p>
          ) : errorCategories ? (
            <p>
              Ocorreu um erro
              <br /> Tente novamente mais tarde
            </p>
          ) : (
            categories &&
              <NavCategories
                categories={categories}
                setCategory={setCategoryOption}
              />
          )}
        </aside>
        <section className="bg-blue-950 p-3 rounded-2xl">
          {!categoryId ? (
            <p>Selecione uma categoria</p>
          ) : isLoadingContent ? (
            <p>Carregando...</p>
          ) : errorContents ? (
            <p>
              Ocorreu um erro
              <br />
              Tente novamente mais tarde
            </p>
          ) : (
            contents?.map((content) => {
              if (content.categoryId !== categoryId) {
                return;
              }
              return (
                <NotesSection
                  key={content.id}
                  title={content.title}
                  content={content.content}
                />
              );
            })
          )}
        </section>
      </div>
    </main>
  );
};

export default NoteList;
