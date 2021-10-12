import axios from "axios";

export const getProducts = async () => {
  const results = await axios.get("http://localhost:3000/json/products.json");
  console.log(results.data);
  return results.data;
};
