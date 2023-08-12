import { useItems } from "../context/ItemContext";
import "./Header.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CategoryIcon from "@mui/icons-material/Category";

export default function Header() {
  const { itemDispatch } = useItems();

  return (
    <nav className="nav-bar">
        <h1>My Inventory</h1>
      <NavLink
        to="/"
        className="nav-link"
        style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
      >
        <DashboardIcon /> Dashboard
      </NavLink>
      <NavLink
        to="/dept"
        style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
        className="nav-link"
      >
        <LibraryBooksIcon /> Department
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
        to="/products/all"
        onClick={() => itemDispatch({ type: "DEPT_FILTER", payload: "all" })}
        className="nav-link"
      >
        <CategoryIcon /> Products
      </NavLink>
    </nav>
  );
}
