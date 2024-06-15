import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const BreadCrumbs = ({ product }) => {
  return (
    <div className='breadcrumb flex items-center space-x-2 py-2'>
      <span className='text-gray-500'>Home</span>
      <img src={arrow_icon} alt="arrow" className='w-4 h-4' />
      <span className='text-gray-500'>Shop</span>
      {product && product.category && (
        <>
          <img src={arrow_icon} alt="arrow" className='w-4 h-4' />
          <span className='text-gray-500'>{product.category}</span>
        </>
      )}
      {product && product.name && (
        <>
          <img src={arrow_icon} alt="arrow" className='w-4 h-4' />
          <span className='text-gray-500'>{product.name}</span>
        </>
      )}
    </div>
  );
}

export default BreadCrumbs;
