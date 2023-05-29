import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';


const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  const product = products.find(item=>{
    return item.id === parseInt(id);
  })
  if(!product){
    return(
      <section className="h-screen flex justify-center item-center">
        Loading...
      </section>
    )
  }
  const {title, price, description, image} = product;
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className="container mx-auto w-[70%] ">
        <div className=" flex flex-col lg:flex-row items-center">
          <div className="">
            <img src={image} className='max-w-[200px] lg:max-w-sm' alt="" />
          </div>
          <div className=" flex-1 text-center lg:text-left max-w-[450px] mx-auto">
            <h1 className="mb-2 text-[26px] font-medium">{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button onClick={()=>addToCart(product, product.id)} className="bg-primary py-4 px-8 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;
