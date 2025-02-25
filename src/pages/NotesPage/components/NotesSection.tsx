import useGetContents from "../../../hooks/useGetContents";

const NotesSection = ({ categoryId }: any) => {
  const { data, error, isLoading } = useGetContents(`/contents`, "contents");

  const contents = data?.filter((content) => content.categoryId === categoryId);
  console.log(contents);
  return (
    <>
      { isLoading ? (<p>Carregando...</p>)
        :error ? (<p>Ocorreu um erro<br/>Tente novamente mais tarde</p>) 
        :contents?.map((content) => (
        <article className="bg-blue-950 p-3 rounded-2xl" key={content.id}>
          <div className="flex  justify-between ">
            <h3>{content.title}</h3>
            <span>
              <button>Editar</button>
              <button>Excluir</button>
            </span>
          </div>
          <p>{content.content}</p>
        </article>
      ))}
    </>
  );
};

export default NotesSection;
