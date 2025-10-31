import { NavLink } from "react-router-dom";
const SideBar = () => {
  const routes = [
    {
      path: "/dashboard",
      text: "Home",
    },
    {
      path: "popular",
      text: "Popular Movies",
    },
    {
      path: "now_playing",
      text: "Trending Movies",
    },

    {
      path: "top_rated",
      text: "Top Rated Movies",
    },
    {
      path: "upcoming",
      text: "upComing Movies",
    },
  ];
  return (
    <div className="w-[15vw] flex flex-col gap-5 p-3  fixed min-h-full left-0 bg-[#011810]">
      <ul className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl py-5 mx-auto">Dashbord</h2>
        {routes.map((item, index) => (
          <li className=" text-xl hover:bg-green-600 opacity-90  cursor-pointer  border-l-4">
            <NavLink
              key={index + 1}
              to={item.path}
              className={({ isActive }) =>
                ` py-2 w-full block ps-5 bg-[#141b13] opacity-90 cursor-pointer ${
                  isActive ? "bg-green-800 text-white" : "bg-transparent"
                }`
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
