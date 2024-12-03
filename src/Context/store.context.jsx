import React, { createContext, useEffect, useState } from 'react'
import TopDish, { mealData } from '../Components/data';
import TopNav from '../Components/topNav';

export const  storeContext =createContext();

const StoreContextProvider = ({children}) => {

const savedCart=JSON.parse(localStorage.getItem('cart'));   

const [cartItems,setCartItems]=useState(savedCart);

const[dropMenu,setDropMenu]=useState(false)

const addtoCart=(Itemid)=>{
  
    if(!cartItems[Itemid]){
        setCartItems((prev)=>({...prev,[Itemid]:1}))
    }else{
        setCartItems((prev)=>({...prev,[Itemid]:prev[Itemid]+1}))
    }
}

const reducetoCart=(Itemid)=>{
    if(!cartItems[Itemid]){
        setCartItems((prev)=>({...prev,[Itemid]:0}))
    }else{
        setCartItems((prev)=>({...prev,[Itemid]:prev[Itemid]-1}))
    }
}


useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cartItems))
  
  },[cartItems])
    

const count=(cartItems)=>{
    let total=0;
    for (const Itemid in cartItems){
        if(cartItems[Itemid]>0)
        {
            total+= cartItems[Itemid]
        }
  }
  return total;
}

const foodItems = mealData;

const subTotal = (cartItems) => { 
    let total = 0;
    for(const Itemid in cartItems){
        if(cartItems[Itemid]>0){
           let itemInfo = foodItems.find((product)=>product.id===Itemid)
                
                total+=itemInfo.price*cartItems[Itemid]
        } 
     } 
     return total;
    }


const menuDismiss=TopNav;

const Dishes=TopDish;

return (
    <storeContext.Provider  value={{addtoCart,count,reducetoCart,cartItems,foodItems,Dishes,menuDismiss,dropMenu,setDropMenu,subTotal}}>
        {children}
    </storeContext.Provider>
)

}
export default StoreContextProvider