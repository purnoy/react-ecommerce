import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {IoMdClose, IoMdRemove, IoMdAdd} from 'react-icons/io';
import {CartContext} from '../contexts/CartContext';

const CartItems = ({product}) => {
  const {id, title, image, price, amount} = product;
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        
          <Link to={`/product/${id}`}>
            <img src={image} className="max-w-[80px]" alt="" />
          </Link>
        
         {/* Title & Remove Icon */}
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
              <Link to={`/product/${id}`} className="hover:underline uppercase font-medium text-sm max-w-[240px] text-primary">{title}
              </Link>
              <div className=" text-xl font-bold">
                <IoMdClose onClick={()=>removeFromCart(id)} className='text-gray-500 hover:text-red-500 transition cursor-pointer'></IoMdClose>
              </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] h-full border text-primary font-medium items-center">
              <div className="flex-1 flex cursor-pointer h-full justify-center items-center" onClick={()=>decreaseAmount(id)}>
                <IoMdRemove></IoMdRemove>
              </div>
              <div className=" h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className="flex-1 flex cursor-pointer h-full justify-center items-center" onClick={()=>increaseAmount(id)}>
                <IoMdAdd></IoMdAdd>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">${price}</div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(price*amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems
