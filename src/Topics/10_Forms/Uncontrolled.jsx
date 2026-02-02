import { useRef } from "react";
const Uncontrolled = () => {
  const emailRef = useRef();
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
    };
    console.log(user);
  };
  return (
    <div>
      <h1 className="text-center text-4xl">Uncontrolled</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          placeholder="Enter email"
          ref={emailRef}
        />
        <br />
        <input
          type="text"
          className="border"
          placeholder="Enter email"
          ref={passwordRef}
        />
        <br />
        <button className="px-5 bg-gray-300 mt-5">Submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
