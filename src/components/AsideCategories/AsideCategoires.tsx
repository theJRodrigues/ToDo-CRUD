interface Category{
    id: string,
    category: string
}

interface AsideCategoiresProps{
    categories: Category[]
}

const AsideCategoires = ({categories}: AsideCategoiresProps) => {
    console.log(categories)
  return (
    <aside>
      <nav>
        <ul>
            {categories?.map((category) =>(
                <li key={category.id}>{category.category}</li>)
            )}
        </ul>
      </nav>
    </aside>
  );
};

export default AsideCategoires;
