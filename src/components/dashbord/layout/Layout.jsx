import SideBar from "./sideBar/SideBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex justify-between  min-h-[83vh]">
      <SideBar />
      <div className=" bg-black flex justify-end , items-center p-4 ms-[15vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
