export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
}
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
interface IProps {
  product: IProduct;
  handleAddToCart: (product: IProduct) => void
}
const Product = ({product ,handleAddToCart}: IProps) => {
  const { id, title, price, description, image } = product;
  return (
    <Card maxW="sm" justifyContent={"space-between"} alignItems={"center"} className="text-red-700  h-full shadow-lg">
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text className="text-gray-500">{description.substring(0, 50)}...</Text>
          <Text color="blue.600" className="" fontSize="2xl">
         $ {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="ghost"
          onClick={() => handleAddToCart(product)}
          colorScheme="blue"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
