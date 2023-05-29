import React,{useContext, useState, useEffect} from 'react';
import {BsBag} from 'react-icons/bs';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {Link} from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60? setIsActive(true) : setIsActive(false);
    });
  });
  const {isOpen, setIsOpen, handleClose} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  return (
    <header className={`${isActive? 'bg-white py-6 shadow-xl fixed w-full z-20 ' : 'bg-orange-100 py-4'} transition-all  duration-300`}>
      <div className=" container flex mx-auto items-center justify-between h-full">
          <Link to={'/'}>
            <div className="">
              <img src={Logo} className='w-[40px] h-[40px]' alt="" />
            </div>
          </Link>
          {/*Cart*/}
          <div 
          className="cursor-pointer flex relative " onClick={()=>setIsOpen(!isOpen)}>
            <BsBag className='text-3xl'></BsBag>
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center">
                {itemAmount}
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header
