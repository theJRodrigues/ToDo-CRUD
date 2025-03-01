import { useQuery } from "@tanstack/react-query";
import api from "../services/Api";

const useGetData = <T>(url: string, queryKey: string) => {
  const { data, error, isLoading } = useQuery<T[]>({
    queryKey: [queryKey],
    queryFn: async ({signal}) => {
      const res = await api.get(url, {signal});
      return res.data;
    },
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60,
  });
  return { data, error, isLoading };
};
export default useGetData;
