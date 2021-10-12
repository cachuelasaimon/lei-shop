import React, { useEffect, useState } from "react";
import { getProducts } from "services";
import { Container, Grid } from "@mui/material";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let result = await getProducts();
      setProducts(result);
    };
    fetchProducts();
  }, []);

  return <></>;
}
