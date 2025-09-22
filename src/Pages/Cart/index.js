import CartCompunent from "../../components/CartCompunent";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const Cart = () => {
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(true)
    })
    return(<>
    <CartCompunent/>
    </>)
}
export default Cart;