import LeftPart from './LeftPart';
import RightPart  from './RightPart';
import { RiCoupon5Fill } from "react-icons/ri";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ProceedToCheckOut=()=>{
    const [ShowCoupenInput,setShowCoupenInput]=useState(false)
  
    return(
        <>
        <div className=" container ProceedToCheckOut mt-4">
            <div className='ProceedToCheckOutCoupenDiv p-3 w-100 '>
                <RiCoupon5Fill />
Have a coupon? <span onClick={()=>{ setShowCoupenInput(!ShowCoupenInput)}}>Click here to enter your code</span>
            </div>
{ShowCoupenInput===true &&
    <div className='AddToCoupen w-100 p-2'>
 <TextField id="outlined-basic" label="Add Coupen Code" fullWidth variant="outlined" />

 <Button className='AddToCoupenSubmitBtn'>ADD COUPEN</Button>
    </div>
}
            <div className="FlexDiv">
<LeftPart/>
<RightPart/>
            </div>

        </div>
        </>
    )
}
export default ProceedToCheckOut;