import { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Header from "../components/Header";
import Products from "../components/ProductList";
import { IProduct } from "../components/Product";
import CartPage from "./CartPage";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

 const addToCart = (product: IProduct) => {
   setCartItems((prevItems) => {
     const existingItem = prevItems.find((item) => item.id === product.id);
     if (existingItem) {
       return prevItems.map((item) =>
         item.id === product.id
           ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
           : item
       );
     }
     return [...prevItems, { ...product, quantity: 1 }];
   });
 };


  const removeFromCart = (product: IProduct) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  const updateQuantity = (product: IProduct, increment: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity
                ? item.quantity + (increment ? 1 : -1)
                :0,
            }
          : item
      )
    );
    setCartItems(items=>{
      return items.filter((item)=>item.quantity ?? 0);
    })
  };

  const getTotalPrice =()=>{
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price *(item.quantity || 0);
    });
    return total.toFixed(2);
  }

  return (
    <main>
      <Header cartItemsCount={cartItems.length} onOpen={onOpen} />
      <Products products={products} handleAddToCart={addToCart} />
      <CartPage
        isOpen={isOpen}
        onClose={onClose}
        cartItems={cartItems}
        handleRemoveItem={removeFromCart}
        handleIncreaseQuan={(product) => updateQuantity(product, true)}
        handleDecreaseQuan={(product) => updateQuantity(product, false)}
        totalPrice={getTotalPrice()}
      />
    </main>
  );
};

export default HomePage;
