const NavCategories = ({ categories}) => {
  return (
    <nav>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>{category.category}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavCategories;
