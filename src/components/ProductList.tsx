import { IProduct } from "./Product"; // Importing IProduct type
import Product from "./Product"; // Importing Product component

interface IProps {
  products: IProduct[];
  handleAddToCart: (product: IProduct) => void;
}
const ProductList = ({products,handleAddToCart}: IProps) => {
  return (
    <>
      <h1>{products.length} Products</h1>
      <section className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {products.map((product: IProduct) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </section>
    </>
  );
};

export default ProductList;
