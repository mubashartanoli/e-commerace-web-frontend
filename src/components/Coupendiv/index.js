import coupenimg from '../../images/coupon.webp'
import { MdOutlineEmail } from "react-icons/md";
import Button from '@mui/material/Button';


const Coupendiv= ()=>{
return(
    <>
    <div className="container coupendivCont">
<div className="row ">

<div className="  coupendivC coupendivOne ">

  <div className='coupen-info  d-flex flex-column justify-content-center h-100 w-100'>
  <span> $20 discount for your first order </span>
  <h1 className='mt-3 mb-3'>Join our newsletter and get...</h1>
  <div className='para w-50'>Join our email subscription now to get updates on promotions and coupons.</div>

    <div className='coupen-input    mt-3 '>

    <div className='One '><label><MdOutlineEmail/></label></div>
    <div  className='Two '><input  placeholder='Your email adddress...' className='CoupenEmailInput ' type="email" required/></div>
    <div  className='Three'> <Button>Subscribe</Button></div>
    
        
      

    
    </div>
  </div>

</div>
<div className=" coupendivC coupendivTwo">

  <div className=' d-flex w-100 h-100 align-items-baseline mt-5'>
      <div className='image-warpper w-100 mt-5'>
          <img width={"100%"} src={coupenimg} alt="" />
      </div></div>

</div>
</div>
    </div>
    </>
)
}
export default Coupendiv;