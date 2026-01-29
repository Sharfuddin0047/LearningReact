import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Fetch2 = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  async function getProducts() {
    setLoading(true);
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      console.log(data); // {products : [{},{},....]}
      setAllProducts(data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>

      {loading ? (
        <Loader />
      ) : (
        allProducts.map((ele) => {
          return (
            <div key={ele.id}>
              <img
                src={ele.thumbnail}
                alt={ele.title}
                height={100}
                width={100}
              />
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Fetch2;