interface NotesSectionProps{
  title: string,
  content: string
}
const NotesSection = ({ title, content }: NotesSectionProps) => {
  
  return (
        <article >
          <div className="flex  justify-between ">
            <h3>{title}</h3>
            <span>
              <button>Editar</button>
              <button>Excluir</button>
            </span>
          </div>
          <p>{content}</p>
        </article>
  );
};

export default NotesSection;
