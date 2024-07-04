import Product, { IProduct } from "./Product"
import {Card,CardBody,Heading,Image,Stack,Text,CardFooter,Button} from'@chakra-ui/react'
interface IProps {
    cartItems:IProduct[];
}
const Item = ({ item }: { item: IProduct }) => {
  const { image, title, price, description, id } = item;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "70%", sm: "200px" }}
        src={image}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2" className="text-indigo-600">${price}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
const CartItems = ({cartItems}:IProps) => {
  console.log(cartItems.length===0);
  return (
    <div className="grid grid-cols-1 gap-6">
      {cartItems.length === 0 ? (
        <p>No items</p>
      ) : (
        cartItems.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
}

export default CartItems
