import { useEffect, useState } from "react";
import { IProduct } from "./Product"; // Importing IProduct type
import Product from "./Product"; // Importing Product component
const ProductList = () => {
  const [products,setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
      const fetchProducts = async (): Promise<IProduct[]> => {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data);
        return data;
      };
      fetchProducts();
  },[])

  return (
    <section className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
      {products.map((product: IProduct) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductList;
