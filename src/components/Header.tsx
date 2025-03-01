import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-indigo-700 w-full text-white">
      <nav className="flex  gap-2">
        <NavLink to={"/"} >
          Home
        </NavLink>
        <NavLink to={"/notes"}>
          Notes
        </NavLink>
        <NavLink to={"/about"}>
          Sobre
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
