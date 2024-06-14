import React from 'react';

const Items = (props) => {
  return (
    <div className='item bg-white rounded-lg shadow-md overflow-hidden flex flex-col'>
      <img src={props.image} alt={props.name} className='w-full h-full object-cover' />
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
