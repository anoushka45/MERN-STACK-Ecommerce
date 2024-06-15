import React from 'react';
import star_icon from '../Assets/star_icon.png';
import dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>; // Handle case when product is not found or not loaded
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="flex flex-col gap-4">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={product.image}
                alt={product.name}
                className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition duration-300"
              />
            ))}
          </div>
          <div className="md:flex-1 flex justify-center items-center">
            <img
              className="w-full md:max-w-xl rounded-lg shadow-lg"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>

          {/* Star Ratings */}
          <div className="flex items-center mb-4">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={star_icon} alt="star" className="w-6" />
            ))}
            <img src={dull_icon} alt="star" className="w-6" />
            <p className="text-gray-600 ml-2">(122)</p>
          </div>

          {/* Prices */}
          <div className="flex items-center mb-4">
            <div className="text-gray-500 line-through mr-2">${product.old_price}</div>
            <div className="text-red-600 font-bold">${product.new_price}</div>
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis mauris quis purus commodo, sit amet malesuada sapien lacinia.
          </p>
          <p className="text-gray-700">
            Fusce convallis feugiat dui nec ultrices. Etiam hendrerit purus a nisl pharetra condimentum.
          </p>

          {/* Select Size */}
          <div className="mt-4 mb-8">
            <h2 className="font-semibold mb-2">Select Size</h2>
            <div className="flex gap-2">
              <div className="size rounded-md bg-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-300 transition duration-300">S</div>
              <div className="size rounded-md bg-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-300 transition duration-300">M</div>
              <div className="size rounded-md bg-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-300 transition duration-300">L</div>
              <div className="size rounded-md bg-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-300 transition duration-300">XL</div>
              <div className="size rounded-md bg-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-300 transition duration-300">XXL</div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-gradient-to-tr from-purple-600 via-pink-500 to-red-400 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300 mb-4">
            ADD TO CART
          </button>

          {/* Categories and Tags */}
          <div className="text-sm text-gray-600">
            <p><span className="font-semibold">Category:</span> Women, Tshirt, Crop Top</p>
            <p><span className="font-semibold">Tags:</span> Modern, Nice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
