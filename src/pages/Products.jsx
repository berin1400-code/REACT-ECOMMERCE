import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    setProducts(data);
  };

  return (
    <div>

      <h2>Products</h2>

      {
        products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))
      }

    </div>
  );
}

export default Products;