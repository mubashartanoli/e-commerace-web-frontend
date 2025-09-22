import CartLeftPart from "./CartLeftPart";
import CartRightPart from "./CartRightPart";




const CartCompunent=()=>{
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