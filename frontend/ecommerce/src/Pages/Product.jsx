import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div>
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product;
