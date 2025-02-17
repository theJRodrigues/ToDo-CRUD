interface Categories {
  id: string;
  category: string;
}

interface AsideCategoiresProps {
  categories: Categories[];
}

const AsideCategoires = ({ categories }: AsideCategoiresProps) => {
  console.log(categories);
  return (
    <aside className="bg-blue-950 p-3 rounded-2xl">
      <nav>
        <ul>
          {categories?.map((category) => (
            <li key={category.id}>{category.category}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AsideCategoires;
