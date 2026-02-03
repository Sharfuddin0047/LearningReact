import React, { useState } from "react";
import CreateUser from "./CreateUser";
import AllUsers from "./AllUser";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState("createEmp");

  return (
    <main className="h-screen w-full flex">
      <Toaster />

      <aside className="h-full w-3/12 bg-violet-800 text-white">
        <h3 className="font-extrabold text-center p-2 text-2xl">Dashboard</h3>

        <div
          onClick={() => setCurrentTab("createEmp")}
          className={`${currentTab === "createEmp" && "bg-white text-black"} px-3 py-1 m-1 rounded font-semibold transition delay-75 duration-300 ease-in-out cursor-pointer flex items-center gap-2`}
        >
          <FaUserPlus />
          Create Employee
        </div>
        <div
          onClick={() => setCurrentTab("allEmp")}
          className={`${currentTab === "allEmp" && "bg-white text-black"}  px-3 py-1 m-1 rounded font-semibold transition delay-75 duration-300 ease-in-out cursor-pointer flex items-center gap-2`}
        >
          <FaUsers />
          All Employees
        </div>
      </aside>

      <section className="h-full w-3/4 bg-white">
        {currentTab === "createEmp" && <CreateUser />}
        {currentTab === "allEmp" && <AllUsers />}
      </section>
    </main>
  );
};

export default Dashboard;