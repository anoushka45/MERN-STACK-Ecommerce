import React from 'react';
import new_collection from "../Assets/new_collections";
import Items from '../Items';

const NewCollections = () => {
  return (
    <div className="newCollections p-8 bg-gray-100">
      <h1 className="text-3xl text-center text-red-800 font-bold mb-4">NEW COLLECTION</h1>
      <hr className="w-16 border-t-4 border-red-800 mx-auto mb-8" />
      <div className="collections grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {new_collection.map((item, i) => (
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

export default NewCollections;
