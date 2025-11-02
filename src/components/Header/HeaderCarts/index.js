import { BsBasket3 } from "react-icons/bs";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from '../../../App';


const HeaderCarts= ()=>{
          const Context=useContext(MyContext);
  const cartData=Context.values.cartData;
   const AllCartTotalPrice=Context.values.AllCartTotalPrice;
    return(
        <>
         <div className='cart  d-flex align-items-center justify-content-center'>
                        <p >{AllCartTotalPrice}  PKR</p>
                          
                        <Button >
                            <Link to="/Cart">  
                            <BsBasket3  className='icon'/>
                            </Link>
                      {
                        cartData && cartData.length>0 &&
                        <span className='count d-flex align-items-center justify-content-center'>
                            {cartData && cartData.length>0?cartData.length:'0'}
                            </span>
                      }
                        
                        </Button>

                        </div>
                        
        </>
    )
}

export default HeaderCarts;