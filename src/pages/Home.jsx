import React from 'react';
import ProductCard from '../component/ProductCard';
import products from '../data/productData';
import style from '../home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          slug={product.slug}
          img={product.image}
        />
      ))}
    </div>
  );
};

export default Home;
