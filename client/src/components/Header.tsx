import { Link, NavLink } from "react-router-dom";
import CartPanel from "./CartPanel";
import FavPanel from "./FavPanel";

export default function Header() {
  return (
    <nav className="px-6 py-4 flex justify-between shadow-md">
      <div className="flex gap-6">
        <div className="flex gap-2 border-l border-black pl-2">
          <CartPanel />
          <FavPanel />
        </div>
        <ul className="flex gap-2">
          <NavLink to="/" className="hover:text-blue-700">
            الرئيسيه
          </NavLink>
          <NavLink className="hover:text-blue-700" to="/about">
            عنا
          </NavLink>
        </ul>
      </div>
      <Link to="/">Logo</Link>
    </nav>
  );
}
