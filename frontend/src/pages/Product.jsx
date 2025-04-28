import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { userContext } from '../App';
import Description from '../Components/Description/Description';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(userContext);
  const {id} = useParams();
  // console.log(id)
  // console.log(all_product)
  const product = all_product.find((e) => e.id === Number(id));
  return (
    <div>
    <BreadCrum product={product} />
    <ProductDisplay product={product} />
    <Description />
    <RelatedProduct />
    </div>
  );
};

export default Product;
