import { useState } from "react";
import CreateUser from "./CreateUser";
import AllUser from "./AllUser";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState("createEmp");
  return (
    <main className="h-screen w-full flex">
      <aside className="h-full w-3/12 bg-violet-600 text-white">
        <h3 className="font-extrabold text-center p-2">Dashboard</h3>

        <div
          onClick={() => setCurrentTab("createEmp")}
          className={`${currentTab === "createEmp" && "bg-white text-black"} text-[10px] px-3 py-1 m-1 rounded font-semibold transition delay-75 duration-300 ease-in-out cursor-pointer`}
        >
          Create Employees
        </div>
        <div
          onClick={() => setCurrentTab("allEmp")}
          className={`${currentTab === "allEmp" && "bg-white text-black"} text-[10px] px-3 py-1 m-1 rounded font-semibold transition delay-75 duration-300 ease-in-out cursor-pointer`}
        >
          All Employees
        </div>
      </aside>
      <section className="h-full w-3/4 bg-white">
        {currentTab === "createEmp" && <CreateUser />}
        {currentTab === "allEmp" && <AllUser />}
      </section>
    </main>
  );
};
export default Dashboard;
