import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import { CartContext } from '../contexts/CartContext';
import CartItems from '../components/CartItems'

const Sidebar = () => {
  const {isOpen, setIsOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart, totalAmout, itemAmount} = useContext(CartContext);
  return (
    <div className={`${isOpen? 'right-0' : '-right-[100%]'} fixed top-0 p-6 h-full w-full md:w-[35vw] bg-white z-20 drop-shadow-2xl transition-all duration-500 overflow-y-scroll`}>
      <div className="p-3 border-b flex justify-between mb-6">
        <div className="text-md uppercase fon-bold ">Shopping Bag(<span className='text-red-500'>{itemAmount}</span>)</div>
        <div className="text-2xl cursor-pointer" onClick={handleClose}>     <IoMdArrowForward></IoMdArrowForward>
        </div>
      </div>
      <div className="">
      {
        cart.map(product=>{
          
            return(
              <CartItems key={product.id} product={product}></CartItems>
            )
          
        })
      }
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex justify-between items-center w-full ">
          <div className="uppercase font-semibold">
            <span className='mr-2'>Total:</span> $ {totalAmout.toFixed(2)}
          </div>
          <div className="cursor-pointer w-[50px] text-white text-xl py-4 bg-red-500 flex justify-center items-center" onClick={clearCart}>
            <FiTrash2></FiTrash2>
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 flex p-4 justify-center items-center text-primary w-full font-medium rounded cursor-pointer shadow-md hover:shadow-sm transition-all duration-300 hover:bg-gray-200">
        View Cart
      </div>
      <div className="bg-primary text-white flex p-4 justify-center items-center w-full font-medium rounded mt-4 cursor-pointer shadow-md hover:shadow-sm transition-all duration-300 hover:bg-[#555]">
        Check Out
      </div>
    </div>
  );
};

export default Sidebar
