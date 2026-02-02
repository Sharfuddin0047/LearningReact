import { useState } from "react";

const Controlled1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    let data = { username, email, password };
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold mt-5">
        Learn Controlled Forms
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="border"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="border"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="bg-yellow-300 px-2 mt-2" >Submit</button>
      </form>
    </div>
  );
};

export default Controlled1;
