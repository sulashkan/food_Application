import { Link, NavLink, Outlet } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/form",
      name: "Login",
    },
  ];

  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("your Search item is : " + search);
  };

  return (
    <>
      <nav className="flex w-full justify-evenly items-center gap-5  min-h-[7vh] text-xl bg-green-950 fixed top-0 z-10">
        {/* Logo */}
        <div className="logo text-3xl text-white">
          <Link to="/">{`< LOGO />`}</Link>
        </div>
        {/* SearchBox */}
        <form
          className="searchBar border-l-4 ps-2 py-2 border-red-400"
          onSubmit={HandleSubmit}
        >
          <input
            className="text-white"
            type="text"
            placeholder="Search here ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <FaMagnifyingGlass className="text-white" />
          </button>
        </form>
        {/* NavBar */}
        <div className="navbar flex gap-4  ">
          {links.map((nav, index) => (
            <NavLink
              key={index + 1}
              className="text-white hover:bg-green-800 px-3 py-1 rounded"
              to={nav.path}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="grid items-center justify-center min-h-[90vh] pt-[7vh] text-white bg-black">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
