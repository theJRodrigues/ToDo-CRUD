import { useQuery } from "@tanstack/react-query";
import api from "../services/Api";

export interface Categories {
    id: string,
    name: string
  }

 const useGetCategories =  (url: string, queryKey:string) =>{
    const { data, error, isLoading} = useQuery<Categories[]>({
        queryKey: [queryKey],
        queryFn: async () => {
          const data = await api.get(url);
          return data.data;
        },
      });
      return {data, error, isLoading}
}
export default useGetCategories