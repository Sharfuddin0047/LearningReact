import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [employees, setEmployees] = useState([]);

  async function getEmployees() {
    try {
      let resp = await axios.get("http://localhost:8001/employees");
      // console.log(resp);
      setEmployees(resp.data);
    } catch (err) {
      console.log(err);
      toast.error("Unable to fetch");
    }
  }

  useEffect(() => {
    getEmployees();
  }, []);

  async function handleDeleteEmployee(id) {
    try {
      let res = await axios.delete(`http://localhost:8001/employees/${id}`);
      console.log(res);
      if (res.status === 200) {
        toast.success("Employee Deleted");
        getEmployees();
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete");
    }
  }

  return (
    <section className="py-2 px-5">
      <h1 className="font-extrabold text-xl">All Employees</h1>

      <article className="py-5">
        {employees.length === 0 ? (
          <p className="font-semibold">No employees available</p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {employees.map((emp) => {
              let { firstname, middlename, lastname, email, mobilenumber, id } =
                emp;
              return (
                <div
                  className="border border-gray-200 rounded shadow p-4"
                  key={id}
                >
                  <div className="mb-2">
                    <h2>
                      <strong>Fullname : </strong>
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

                <Link to={`/edit-emp/${id}`}>
                  <button className="py-0.5 px-4 border cursor-pointer font-semibold border-gray-300 hover:border-amber-300 hover:text-amber-300 rounded">
                    Edit
                  </button>
                </Link>

                  <button
                    onClick={() => handleDeleteEmployee(id)}
                    className="py-0.5 px-4 border cursor-pointer font-semibold border-gray-300 hover:border-red-500 hover:text-red-500 rounded ms-2"
                  >
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