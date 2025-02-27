import React from "react";
import { Categories } from "../NoteList";


interface CategoriesProps {
  categories: Categories[],
  setCategory: (categoryId: string) => void
}

const NavCategories = ({ categories, setCategory }: CategoriesProps) => {
  const handleOption = (e: React.MouseEvent<HTMLButtonElement>) =>{
    setCategory(e.currentTarget.value)
  }
  
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button className="cursor-pointer" value={category.id} onClick={handleOption}>{category.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavCategories;
