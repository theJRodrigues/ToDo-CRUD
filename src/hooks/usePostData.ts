import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../services/Api";

interface mutationProps {
  newNote: object,
  url: string
}
const usePostData = (queryKey: string) => {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: ({ newNote, url }: mutationProps) => {
      return api.post(url, newNote);
    },
    onSuccess: (data) => {
      queryClient.setQueryData([queryKey], (oldData: []) => [
        ...oldData,
        data.data,
      ]);
    },
  });

  return mutation;
};
export default usePostData;
