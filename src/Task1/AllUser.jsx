import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const [employees, setEmployees] = useState([]);

  async function getEmployees() {
    try {
      let resp = await axios.get("http://localhost:8001/employees");
      console.log(resp);
      setEmployees(resp.data);
    } catch (err) {
      console.log(err);
      toast.error("Unable to fetch");
    }
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <section className="py-2 px-5">
      <h1 className="font-extrabold text-xl">All Employees</h1>
      <article className="py-5">
        {employees.length === 0 ? (
          <p className="font-semibold">No employees available</p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {employees.map((emp) => {
              let { firstname, middlename, lastname, email, mobilenumber } =
                emp;
              return (
                <div className="border border-gray-200 rounded shadow p-4">
                  <div className="mb-2">
                    <h2>
                      <strong>Fullname :</strong>
                      {firstname} {middlename}
                      {lastname}
                    </h2>
                    <p>
                      <strong>Email :</strong> {email}
                    </p>
                    <p>
                      <strong>Mobile Number :</strong> {mobilenumber}
                    </p>
                  </div>

                  <button className="py-0.5 px-4 border cursor-pointer font-semibold border-gray-300 hover:border-amber-300 hover:text-amber-300 rounded">
                    Edit
                  </button>
                  <button className="py-0.5 px-4 border cursor-pointer font-semibold border-gray-300 hover:border-red-500 hover:text-red-500 rounded ms-2">
                    Delete
                  </button>
                </div>
              );
            })}
          </section>
        )}
      </article>
    </section>
  );
};

export default AllUser;