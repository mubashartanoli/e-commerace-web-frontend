import Button from '@mui/material/Button';



const CartRightPart=()=>{
    return(<>
    <div className="Cart_Right_Part_Wapper">
      <div className="headding"><h3>Cart totals</h3></div>  

      <div className="subtotal w-100 d-flex align-item-center justify-content-between">
      <p>Subtotal</p>
      <p className="_valu-e">$73.30</p>
      </div>
      <div className="shipping w-100 d-flex align-item-center justify-content-between">
        <p>Shipping</p>
       <p className="_valu-e">Free</p>
      </div>
      <div className="shipping w-100 d-flex align-item-center justify-content-between">
        <p>Estimate for</p>
       <p className="_valu-e">USA</p>
      </div>
      <div className="shipping w-100 d-flex align-item-center justify-content-between">
        <p>Payment Method</p>
       <p className="_valu-e">COD</p>
      </div>
      <div className="Proceed-To-Check-Out w-100 mt-3">
            <Button>Proceed to checkout </Button>
      </div>
    </div>
    </>)
}
export default CartRightPart;