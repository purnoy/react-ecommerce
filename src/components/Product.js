import React,{useContext} from 'react';
import {BsPlus, BsEyeFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const Product = ({product}) => {
  const {addToCart} = useContext(CartContext);

  return (
    <div>
      <div className="border border-[#e4e4e4] w-full h-[300px] shadow-sm flex items-center mb-3 justify-center group transition-all duration relative">
        <div className="w-full w-[200px] p-5 flex items-center justify-center">
          <img className='w-[160px] cursor-pointer group-hover:scale-110 transition-all duration-300' src={product.image} alt="" />
        </div>
        <div className="absolute top-5 -right-11 opacity-0 group-hover:opacity-100 group-hover:right-5 z-10 flex flex-col items-center justify-center gap-y-a drop-shadow-lg transition-all duration-300">
          <div className="w-12 h-12 flex items-center justify-center bg-red-500 cursor-pointer" onClick={()=>addToCart(product, product.id)}>
            <BsPlus className="text-3xl text-white"></BsPlus>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-yellow-50 cursor-pointer">
           
            <Link to={`/product/${product.id}`}>
            <BsEyeFill className="text-2xl text-black"></BsEyeFill>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm font-bold text-gray-500">{product.category}</div>
      <div className="text-md text-black font-bold uppercase">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </div>
      <div className="text-md font-bold text-black">${product.price}</div>
    </div>
  )
}

export default Product
