import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

// Define the props for the ProductItems component
interface ProductItemsProps {
  id: string;
  image: string[]; // Assuming image is an array of URLs
  name: string;
  price: number;
}

const ProductItems: React.FC<ProductItemsProps> = ({ id, image, name, price }) => {
  const context = useContext(ShopContext);

  // Check if context is undefined
  if (!context) {
    return null; // If context is not provided, return null
  }

  const { currency } = context;

  return (
    <Link to={`/product/${id}`} className="flex flex-col  justify-center align-middle group text-gray-700 cursor-pointer">
      {/* Image Wrapper */}
      <div className="flex justify-center">
        <img
          className="hover:scale-110 transition-transform duration-300 ease-in-out w-[200px] h-[200px] object-cover rounded-lg"
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-items-center mt-3">
        <p className="text-sm font-medium text-left">{name}</p>

        <p className="text-sm font-semibold text-gray-900 text-left">
          <span className='text-gray-500'>{currency}</span> {price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItems;
