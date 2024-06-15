import React from 'react';
import data_product from '../Assets/data.js';
import Items from '../Items';

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center p-8 bg-gray-100'>
      <h1 className='text-3xl text-red-800 font-bold mb-4'>Popular in Women</h1>
      <hr className='w-24 border-t-4 border-red-800 mb-8' />
      <div className="popular-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {data_product.map((item, i) => (
          
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
