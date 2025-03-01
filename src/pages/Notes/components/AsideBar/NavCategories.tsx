import { Categories } from "../Notes";
import { Link } from "react-router";

interface CategoriesProps {
  categories: Categories[],
}

const NavCategories = ({ categories }: CategoriesProps) => {

  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className="cursor-pointer"
            >
              <Link to={`./${category.id}`}>
              {category.name}
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavCategories;
