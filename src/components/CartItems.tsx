import Product, { IProduct } from "./Product";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  CardFooter,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";

interface IProps {
  cartItems: IProduct[];
  handleRemoveItem: (item: IProduct) => void;
  handleIncreaseQuan: (item: IProduct) => void;
  handleDecreaseQuan: (item: IProduct) => void;
}
interface IItemProps {
  item: IProduct;
  handleRemoveItem: (product: IProduct) => void;
  handleIncreaseQuan: (item: IProduct) => void;
  handleDecreaseQuan: (item: IProduct) => void;
}
const Item = ({ item ,handleRemoveItem ,handleDecreaseQuan,handleIncreaseQuan}: IItemProps) => {
  const { image, title, price, quantity } = item;
  return (
    <Card
      direction={{ base: "column", sm: "column" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="contain"
        width={"200px"}
        height={"200px"}
        src={image}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2" className="text-indigo-600">
            ${price}
          </Text>
          <Text className="text-gray-700 font-semibold">
            Quantity : {quantity}
          </Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup>
            <button className="text-2xl px-3 py-1 border bg-slate-800 text-white" onClick={() => handleIncreaseQuan(item)}>
              +
            </button>
            <button className="text-2xl px-3 py-1 border bg-slate-800 text-white" onClick={() => handleDecreaseQuan(item)}>
              -
            </button>
            <button className="px-3 font-semibold  text-red-700 py-1 text-3xl " onClick={() => handleRemoveItem(item)}>
              <MdDeleteOutline />
            </button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};
const CartItems = ({
  cartItems,
  handleRemoveItem,
  handleDecreaseQuan,
  handleIncreaseQuan,}: IProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleRemoveItem={handleRemoveItem}
              handleDecreaseQuan={handleDecreaseQuan}
              handleIncreaseQuan={handleIncreaseQuan}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CartItems;
