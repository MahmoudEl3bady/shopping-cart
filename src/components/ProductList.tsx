import { Box, Skeleton } from "@chakra-ui/react";
import { IProduct } from "./Product"; // Importing IProduct type
import Product from "./Product"; // Importing Product component

interface IProps {
  products: IProduct[];
  handleAddToCart: (product: IProduct) => void;
}

const ProductList = ({ products, handleAddToCart }: IProps) => {
  return (
    <>
      <section className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {products && products.length > 0
          ? products.map((product: IProduct) => (
              <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Box
                key={item}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="6"
              >
                <Skeleton height="200px" />
                <Skeleton mt="4" height="20px" />
                <Skeleton mt="4" height="20px" />
                <Skeleton mt="4" height="20px" />
              </Box>
            ))}
      </section>
    </>
  );
};

export default ProductList;
