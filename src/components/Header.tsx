import { GiShoppingCart } from "react-icons/gi";
const Header = () => {
  return (
    <header className="flex justify-between container-custom">
      <h1 className="text-3xl font-bold underline">Shopping Cart</h1>
      <GiShoppingCart size={40} />
    </header>
  );
};

export default Header;
