import { Link, NavLink, Outlet } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearch } from "../../context-api/dataProvider";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { setUser } = useSearch();
  const [search, setSearch] = useState("");
  const { setDebouncedKeyword, user } = useSearch(); // getting from Context -

  // debouncing Keyword making -
  useEffect(() => {
    let data = setTimeout(() => {
      setDebouncedKeyword(search);
    }, 800);
    return () => clearInterval(data);
  }, [search, setDebouncedKeyword]);

  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/popular",
      text: "Popular Movies",
    },
    {
      path: "/now_playing",
      text: "Trending Movies",
    },

    {
      path: "/top_rated",
      text: "Top Rated Movies",
    },
    {
      path: "/upcoming",
      text: "Up-Coming Movies",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    Swal.fire({
      icon: "success",
      text: "Logged out successfully",
    });
  };

  return (
    <>
      <nav className="flex w-full justify-evenly items-center gap-5  min-h-[7vh] text-xl bg-green-950 fixed top-0 z-10">
        {/* SearchBox */}
        <form className="searchBar border-l-4 ps-2 py-2 border-red-800">
          <input
            className="text-white"
            type="text"
            placeholder="Search here ..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button">
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
              {nav.text}
            </NavLink>
          ))}
          {user ? (
            <NavLink
              to="/"
              onClick={handleLogout}
              className="hover:bg-red-500 text-white   bg-green-800 px-3 py-1 rounded"
            >
              Logout
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </nav>

      <div className="bg-black flex justify-center items-center p-4  w-full  text-white mt-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Navbar;
