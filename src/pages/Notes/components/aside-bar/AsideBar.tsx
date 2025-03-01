import NavCategories from './NavCategories'
import useGetData from '../../../../hooks/useGetData';

export interface Categories {
    id: string;
    name: string;
  }

const AsideBar = () => {
    const { data, error, isLoading } = useGetData<Categories>("/categories", "categories");
    
    return (
        <aside className="bg-blue-950 p-3 rounded-2xl">
          {
            isLoading ? (<p>Carregando...</p>) 
            : error ? (<p>Ocorreu um erro<br /> Tente novamente mais tarde</p>) 
            : data && <NavCategories categories={data} />
          }
        </aside>
    )
}

export default AsideBar