import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useParams } from "react-router";

import ModalRoot from "./ModalRoot";
import usePostData from "../../../../hooks/usePostData";

type urlParams = {
  categoryId:string
}

const CreateNoteFormSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});
type CreateNoteForm = z.infer<typeof CreateNoteFormSchema>;

const CreateNote = () => {
  const {categoryId} = useParams<urlParams>()
  const mutation = usePostData("notes")
  const url = "/notes"
  const navigate = useNavigate()

  const {register, handleSubmit, formState: { errors }} = useForm<CreateNoteForm>({
    resolver: zodResolver(CreateNoteFormSchema)
  });
  
  const handleCreateNote = (data: CreateNoteForm) => {
    const newNote = {...data, categoryId}
    mutation.mutate({url, newNote})
    navigate(`${url}/${categoryId}`)
  };


  return (
    <ModalRoot>
      <form onSubmit={handleSubmit(handleCreateNote)} className="bg-indigo-600 p-4 rounded-2xl">
        <fieldset>
          <label>
            <span>Título:</span>
            <input type="text" {...register("title")} />
          </label>
          {errors.title && <p>teste</p>}
        </fieldset>

        <fieldset>
          <label>
            <span>Conteúdo:</span>
            <textarea {...register("content")} />
          </label>
          {errors.content && <p>teste</p>}
        </fieldset>
        
        <button type="submit">Criar Nota</button>
        <button type="button"><Link to={`/notes/${categoryId}`}>Cancelar</Link></button>
      </form>
    </ModalRoot>
  );
};

export default CreateNote;
