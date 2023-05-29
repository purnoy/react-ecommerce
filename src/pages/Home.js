import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  const {products} = useContext(ProductContext);
  const filteredProducts = products.filter((product)=>{
    return product.category === "men's clothing" || product.category === "women's clothing";
  });
  return (
    <section className="">
      <Hero></Hero>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[35px] mb-6">
          {
              filteredProducts.map(product=>{
                return(
                  <Product key={product.id} product={product}></Product>
                )
              })
          }
        </div>
      </div>
    </section>
  )
}

export default Home
