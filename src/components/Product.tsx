export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}
const Product = ({id,description,title,image,price}: IProduct) => {
  return <div className="flex flex-col gap-4 " key={id}>
        <img src={image} alt={title} className="w-52"/>
        <h2>{title}</h2>
        <span className="font-semibold ">${price}</span>
        <p>{description.substring(0,50)}...</p>
        <button className="bg-indigo-500  text-white p-2 rounded">Add to cart</button>
  </div>;
};

export default Product;
