import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    maritalstatus: "",
    dob: "",
    email: "",
    mobilenumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    //! USING FETCH
    // let res = await fetch("http://localhost:8001/employees", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    // });

    //! USING AXIOS
    try {
      let res = await axios.post("http://localhost:8001/employees", formData);
      console.log(res);

      // clearing input fields
      setFormData({
        firstname: "",
        middlename: "",
        lastname: "",
        maritalstatus: "",
        dob: "",
        email: "",
        mobilenumber: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
      });

      toast.success("Created");
    } catch (err) {
      console.log(err);

      toast.error("Something went wrong");
    }
  };

  return (
    <section className="py-2 px-5">
      <h1 className="font-extrabold text-xl">Create Employee</h1>

      <form className="p-2 w-2xl mt-3" onSubmit={handleSubmit}>
        {/* FULLNAME */}
        <div>
          <label className="font-semibold" htmlFor="fullname">
            Fullname
          </label>
          <div className="py-2 flex gap-3">
            <input
              className="border border-gray-200 p-1 rounded w-full"
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <input
              className="border border-gray-200 p-1 rounded w-full"
              type="text"
              placeholder="Middle Name"
              name="middlename"
              value={formData.middlename}
              onChange={handleChange}
            />
            <input
              className="border border-gray-200 p-1 rounded w-full"
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* MARITAL STATUS AND DOB */}
        <div className="flex gap-3 mt-3">
          <div className="w-full">
            <label className="font-semibold" htmlFor="maritalstatus">
              Marital Status
            </label>
            <div>
              <select
                name="maritalstatus"
                id="maritalstatus"
                className="border border-gray-200 p-1 w-full rounded"
                value={formData.maritalstatus}
                onChange={handleChange}
              >
                <option value="" selected disabled></option>
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
            </div>
          </div>

          <div className=" w-full">
            <label className="font-semibold" htmlFor="dob">
              Date of Birth
            </label>
            <div>
              <input
                className="border border-gray-200 p-1 rounded w-full"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* EMAIL AND MOBILE NUMBER */}
        <div className="flex gap-3 mt-3">
          <div className="w-full">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <div>
              <input
                className="border border-gray-200 p-1 rounded w-full"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full">
            <label className="font-semibold" htmlFor="dob">
              Mobile Number
            </label>
            <div>
              <input
                className="border border-gray-200 p-1 rounded w-full"
                type="tel"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* HOME ADDRESS */}
        <div className="mt-3">
          <label className="font-semibold" htmlFor="address">
            Home Address
          </label>

          <div>
            <input
              className="border border-gray-200 p-1 rounded w-full mb-3"
              type="text"
              placeholder="Street Address"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="State / Province"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="ZIP Code"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button className="bg-violet-800 cursor-pointer hover:bg-violet-900 transition text-white font-semibold px-4 py-1 mt-4 rounded">
          REGISTER ME
        </button>
      </form>
    </section>
  );
};

export default CreateUser;