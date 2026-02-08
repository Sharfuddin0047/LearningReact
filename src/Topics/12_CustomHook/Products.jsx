import { useApi } from "./customHook";

const Products = () => {
  const products = useApi("https://dummyjson.com/products");
  console.log(products);

  return <div>Products</div>;
};

export default Products;