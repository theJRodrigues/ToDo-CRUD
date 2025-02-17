import { NavLink, NavLinkProps } from "react-router";

const Header = () => {
  const isActive: NavLinkProps["className"] = ({ isActive }) =>
    isActive ? "is-active" : "";
  return (
    <header className="bg-indigo-700 w-full text-white">
      <nav className="flex  gap-2">
        <NavLink to={"/"} className={isActive}>
          Home
        </NavLink>
        <NavLink to={"/todo-list"} className={isActive}>
          ToDo List
        </NavLink>
        <NavLink to={"/about"} className={isActive}>
          Sobre
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
