import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Fetch1 = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  async function getData() {
    setLoading(true);
    try {
      let resp = await fetch("https://dummyjson.com/todos");
      let data = await resp.json();

      setTodos(data.todos);// [{},{},...]
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>All Todos</h1>

      {todos.map((ele) => {
        return (
          <div key={ele.id}>
            <h4>Todo :</h4>
            <p>{ele.todo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Fetch1;