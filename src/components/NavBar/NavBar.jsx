import { NavLink, Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/books">
            All Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/books/add">
            AddBook
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
