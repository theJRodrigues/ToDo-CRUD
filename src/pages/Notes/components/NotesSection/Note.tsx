
interface NoteProps {
    title: string;
    note: string;
  }
  const Note= ({ title, note }: NoteProps) => {
    return (
      <article>
        <div className="flex  justify-between ">
          <h3>{title}</h3>
          <span>
            <button>Editar</button>
            <button>Excluir</button>
          </span>
        </div>
        <p>{note}</p>
      </article>
      
    );
  };
  
  export default Note;
  