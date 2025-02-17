const NotesSection = () => {
  return (
    <article className="bg-blue-950 p-3 rounded-2xl">
      <div className="flex  justify-between ">
        <h3>Titulo da nota</h3>
        <span>
          <button>Editar</button>
          <button>Excluir</button>
        </span>
      </div>
      <p>Conteudo da nota</p>
    </article>
  );
};

export default NotesSection;
