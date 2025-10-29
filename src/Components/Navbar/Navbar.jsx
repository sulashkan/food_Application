import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex  justify-center items-center gap-5  min-h-[10vh] text-2xl">
        <Link className="text-blue-600" to="/">
          Home
        </Link>
        <Link className="text-blue-600" to="/about">
          about
        </Link>
        <Link className="text-blue-600" to="/contact">
          contact
        </Link>
        <Link className="text-blue-600" to="/form">
          login
        </Link>
      </nav>
      <div className="grid items-center justify-center content">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
