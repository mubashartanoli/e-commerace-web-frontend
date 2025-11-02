import CartLeftPart from "./CartLeftPart";
import CartRightPart from "./CartRightPart";
import { useContext, useEffect } from "react";
import { MyContext } from '../../App';

import { fetchDataFromApi} from "../../utils/api";



const CartCompunent=()=>{
      const Context=useContext(MyContext);
   const cartData=Context.values.cartData;
   const setCartData=Context.values.setCartData;
   const setProgress=Context.values.setProgress;
const userId=localStorage.getItem('UserId');

useEffect(()=>{

if(cartData || cartData.length>0){
  return;
}
  setProgress(25);
  fetchDataFromApi(`/api/cart/getAllby/${userId}`).then((res)=>{

setCartData(res.Cart)
setProgress(100)
  }).catch((err)=>{
    console.log(err)
setProgress(100)

  })

},[cartData,userId,setCartData,setProgress])

return(<>
     <div className="container-fluid Cart_Compunent_div_Wapper pt-5 pb-5">
         <div className="container Cart-Compunent-div-Wapper  ">
          <div >
            <div className="col-sm-8  Cart_Left_Part p-2"> <CartLeftPart/></div>
            <div className="col-sm-4  Cart_Right_Part"><CartRightPart/></div>
          </div>
         </div>
     </div>
</>)
}
export default CartCompunent;