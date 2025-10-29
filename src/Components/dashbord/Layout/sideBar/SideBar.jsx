import { Link } from "react-router-dom";
const SideBar = () => {
  const routes = [
     {
          path: "/dashboard",
      text: "Home",
    },
    {
      path: "profile",
      text: "Profile",
    },
    {
      path: "orders",
      text: "Orders",
    }
  ];
  return (
    <div className="w-[20vw] bg-grey-50 flex flex-col gap-5 p-6">
     <ul className="flex flex-col gap-2">
         {  routes.map((item , index)=>(
            <li className="py-1.5 text-2xl bg-gray-200 border-s-5 border-red-500  ps-5  cursor-pointer text-rose-600">
      <Link key={index+1}to={item.path}>{item.text}</Link>
</li>
        ))}
     </ul>
    </div>
  );
};

export default SideBar;
