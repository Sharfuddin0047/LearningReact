import axios from "axios";
import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null);

  async function getProducts(api_url) {
    let resp = await axios.get(api_url);
    setData(resp);
  }

  useEffect(() => {
    getProducts(url);
  }, []);

  return data;
};