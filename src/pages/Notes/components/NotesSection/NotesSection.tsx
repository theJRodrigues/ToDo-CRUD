import { Link, useParams } from "react-router";
import Note from "./Note";
import useGetData from "../../../../hooks/useGetData";

export interface Contents {
  id: string;
  categoryId: string;
  title: string;
  content: string;
}

const NotesSection = () => {
  const {data, error, isLoading} = useGetData<Contents>("/notes", "notes");
  const {categoryId} =useParams();

  return (
    <section className="bg-blue-950 p-3 rounded-2xl">
      {
        !categoryId ? (<p>Selecione uma categoria</p>) 
        : isLoading ? (<p>Carregando...</p>) 
        : error ? (<p>Ocorreu um erro<br />Tente novamente mais tarde</p>) 
        : (<>
            <header>
              <Link to={`./create-note/${categoryId}`}>Criar Nota</Link>
            </header>
            {data?.map((note) => {
              if (note.categoryId !== categoryId) return;
              return (<Note key={note.id} title={note.title} note={note.content} />);
            })}
          </>)
        }
    </section>
  );
};

export default NotesSection;
