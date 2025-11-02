import Button from '@mui/material/Button';
import { useContext, useEffect} from "react";
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

const CartRightPart=()=>{
  const navigate=useNavigate()
     const Context=useContext(MyContext);
   const cartData=Context.values.cartData;
   const AllCartTotalPrice=Context.values.AllCartTotalPrice;
   const setAllCartTotalPrice=Context.values.setAllCartTotalPrice;
  
   useEffect(()=>{
    if(cartData && cartData?.length>0){
const sum = cartData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.subTotal
}, 0);

setAllCartTotalPrice(sum)
    }
    return;
   },[cartData,setAllCartTotalPrice])
    return(<>
    <div className="Cart_Right_Part_Wapper">
      <div className="headding"><h3>Cart totals</h3></div>  

      <div className="subtotal w-100 d-flex align-item-center justify-content-between">
      <p>Subtotal</p>
      <p className="_valu-e">{AllCartTotalPrice} PKR</p>
      </div>
      <div className="shipping w-100 d-flex align-item-center justify-content-between">
        <p>Payment</p>
       <p className="_valu-e">COD</p>
      </div>
      
      <div className="Proceed-To-Check-Out w-100 mt-3">
            <Button onClick={()=>{navigate('/ProceedToCheckOut')}}>Proceed to checkout </Button>
      </div>
    </div>
    </>)
}
export default CartRightPart;