import React from 'react';
import { Link } from 'react-router-dom';
import all_product from './Assets/all_product';
const Items = (props) => {
  return (
    <div className='item bg-white rounded-lg shadow-md overflow-hidden flex flex-col'>
       <Link to={`/product/${props.id}`} className="block w-full h-full">
      <img src={props.image} alt={props.name} className='w-full h-full object-cover' />
    </Link>
      <div className='p-4 flex flex-col justify-between flex-grow'>
        <p className='text-gray-700 font-semibold'>{props.name}</p>
        <div className="item-price flex justify-between items-center mt-2">
          <div className="item-price-new text-red-500 font-bold">
            ${props.new_price}
          </div>
          <div className="item-price-old text-gray-400 line-through">
            ${props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
