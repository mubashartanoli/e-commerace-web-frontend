import React from 'react';
import ShopPage from '../../components/ShopPage';
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";
import GoToTopBtn from "../../components/GoToTopBtn";

const Shop=()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(true)
    })

      const  setShowTopBtn=context.values.setShowTopBtn
            useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    } 
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [setShowTopBtn]);
    return(<>
    <GoToTopBtn/>
   <ShopPage/>
    </>)
}
export default Shop;
