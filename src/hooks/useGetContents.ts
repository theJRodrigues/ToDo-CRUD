import { useQuery } from "@tanstack/react-query";
import api from "../services/Api";

export interface Contents {
  id: string;
  categoryId: string;
  title: string;
  content: string;
}

const useGetContents = (url: string, queryKey: string) => {
  const { data, error, isLoading } = useQuery<Contents[]>({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await api.get(url);
      return response.data;
    },
  });
  return { data, error, isLoading }
};
export default useGetContents;
