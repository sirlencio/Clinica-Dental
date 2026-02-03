import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen gap-4">
      <section className="shadow-2xl py-4 px-12 rounded-2xl fixed top-0 w-full bg-white z-10">
        <Navbar />
      </section>
      <section className="flex-1 p-24 bg-blue-200">
        <Outlet />
      </section>
    </div>
  );
};

export default AppLayout;
