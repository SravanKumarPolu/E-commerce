import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

// Define the Product type based on your product data structure
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[]; // Array of image URLs
  category: string;
  subCategory: string;
  color: string[];
  date: number;
  bestseller: boolean;
}

const BestSeller: React.FC = () => {
  const context = useContext(ShopContext);

  // Initialize state for best products
  const [bestProducts, setBestProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (context?.products && context.products.length > 0) {
      setBestProducts(context.products.slice(0, 5));
    }
  }, [context?.products]);

  // Handle case where context is undefined
  if (!context) {
    return <div>Context is not available</div>;
  }

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="Latest" text2="Collection" />

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          suscipit adipisci, atque repellat minima vitae ipsam? Nihil voluptas
          molestiae vel vitae hic culpa quaerat odio!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestProducts.map((item) => (
          <ProductItems
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
