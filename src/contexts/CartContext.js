import React,{createContext, useState, useEffect} from 'react';

export const CartContext = createContext();
const getCartData = () =>{
  const lists = localStorage.getItem("myCart");
  if(lists){
    return JSON.parse(lists);
  }
  else{
    return[];
  }
}
const CartProvider = ({children}) => {
  const [cart, setCart] = useState(getCartData());
  const [totalAmout, setTotalAmount] = useState(0);
  useEffect(()=>{
    if(cart){
      const finalAmount = cart.reduce((acc,item)=>{
        return acc + (item.amount*item.price);
      }, 0)
      setTotalAmount(finalAmount);
    }
  },[cart])
  const [itemAmount, setItemAount] = useState(0);
  useEffect(()=>{
    if(cart){
      const itemQuantity = cart.reduce((acc, item)=>{
        return (acc + item.amount)
      },0);
      setItemAount(itemQuantity);
    }
  },[cart])
  const addToCart = (product,id)=>{
    const newItem = {...product, amount:1}; 
    const matchItem = cart.find(item=>{
      return item.id === id;
    });
    if(matchItem){
      const newCart = [...cart].map(item=>{
        if(item.id === id){
          return {...item, amount: matchItem.amount+1}
        }
        else{
          return item;
        }
      })
      setCart(newCart);
    }
    else{
      setCart([...cart, newItem]);
    }

  }
const removeFromCart = (id)=>{
  const newCart = cart.filter(item=>{
    return item.id !== id;
  })
  setCart(newCart);
}
const clearCart = id =>{
  setCart([]);
}

// Increase Amount

const increaseAmount = (id) =>{
  const item = cart.find(product =>{
    return product.id === id;
  });
  addToCart(item, id);
}
const decreaseAmount = (id) =>{
  const cartItem = cart.find(product =>{
    return product.id ===id;
  });

  if(cartItem){
    const newCart = cart.map(product=>{
      if(product.id === id){
        return {...product, amount: cartItem.amount-1}
      }
      else{
        return product;
      }
    });
    setCart(newCart)
  }
  if(cartItem.amount<2){
    removeFromCart(id);
   }
}
useEffect(()=>{
  localStorage.setItem('myCart', JSON.stringify(cart));
},[cart])

  return (
    <CartContext.Provider value ={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, totalAmout}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
