import { Link, NavLink } from "react-router-dom";
import CartPanel from "./CartPanel";
import FavPanel from "./FavPanel";

export default function Header() {
  return (
    <nav className="px-6 py-4 flex justify-between shadow-md">
      <Link to="/">Logo</Link>
      <div className="flex gap-6">
        <ul className="flex gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
        <div className="flex gap-2 border-l border-black pl-2">
          <CartPanel />
          <FavPanel />
        </div>
      </div>
    </nav>
  );
}
