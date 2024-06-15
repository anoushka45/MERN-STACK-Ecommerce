import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/Items';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category p-4'>
      <img src={props.banner} alt="" className="w-full h-auto mb-4" />
      <div className="shop-category-index-sort mb-2">
        <p className="text-gray-700">
          <span>Showing 1-12 out of 36 products</span>
        </p>
      </div>
      <div className="shopcategory-sort flex items-center mb-4">
        <span className="mr-2">Sort by</span>
        <img src={dropdown_icon} alt="" className="w-4 h-4" />
      </div>
      <div className="shopcategory-products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore flex justify-center items-center m-auto mt-5 h-10 w-40 bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded hover:bg-blue-900 transition duration-300 ease-in-out cursor-pointer">
  EXPLORE MORE
</div>

    </div>
  );
}

export default ShopCategory;
