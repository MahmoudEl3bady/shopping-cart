import { GiShoppingCart } from "react-icons/gi";
const Header = ({cartItemsCount ,onOpen}:{cartItemsCount:number,onOpen:()=>void}) => {
  return (
    <header className="flex justify-between container-custom">
      <h1 className="text-3xl font-bold underline">Shopping Cart</h1>
     <button onClick={onOpen} className="flex items-start"> {cartItemsCount}<GiShoppingCart size={40} /></button>
    </header>
  );
};

export default Header;
