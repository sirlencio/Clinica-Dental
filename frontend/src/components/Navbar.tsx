import clsx from "clsx";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center">
      <div>
        <img src="/images/logo.png" alt="Logo" className="w-12 h-12 p-2" />
      </div>

      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            clsx(
              "px-3 py-2 rounded text-sm font-bold",
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100",
            )
          }
        >
          Inicio
        </NavLink>
      </div>

      <div>
        <NavLink
          to={"/pacientes"}
          className={({ isActive }) =>
            clsx(
              "px-3 py-2 rounded text-sm font-bold",
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100",
            )
          }
        >
          Lista
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
