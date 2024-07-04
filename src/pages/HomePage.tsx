import Header from "../components/Header";
import Products from "../components/ProductList";
import { IProduct } from "../components/Product";
import { useEffect, useState } from "react";
import CartPage from "./CartPage";
import { useDisclosure } from "@chakra-ui/react";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartitems, setCartitems] = useState<IProduct[]>([]);
  const {onOpen,isOpen,onClose} = useDisclosure();
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
  }, []);

  const handleAddToCart = (product: IProduct) => {
    setCartitems((prev) => [...prev, product]);
    console.log(cartitems);
  };
  return (
    <main className="relative">
      <Header cartItemsCount={cartitems.length} onOpen={onOpen}/>
      <Products products={products} handleAddToCart={handleAddToCart} />
      <CartPage onClose={onClose} isOpen={isOpen} cartItems={cartitems}/>
    </main>
  );
};

export default HomePage;
