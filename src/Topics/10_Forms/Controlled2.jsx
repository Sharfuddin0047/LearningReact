import { useState } from "react";

const Controlled2 = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold mt-5">
        Learn Controlled Forms 2
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          placeholder="Enter Username"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="border"
          placeholder="Enter email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="border"
          placeholder="Enter password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />
        <button className="bg-yellow-300 px-2 mt-2" >Submit</button>
      </form>
    </div>
  );
};

export default Controlled2;
