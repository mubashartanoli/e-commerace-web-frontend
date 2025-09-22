import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from '@mui/material/Button';



const PlusMinusBtn= ()=>{
        const [number, setNumber] = useState(1);
      
        const plus=()=>{
            setNumber(number+1)
        }
        const Minus=()=>{
            if(number>1){
                setNumber(number-1)
            }
            else{
                setNumber(1)
            }
          
        }
    return(<>
 {/* <form className='Cart_Submit_Form'> */}
              <div className='Button_Div '>
                <Button className='Quantity-btn plus' onClick={plus}><FaPlus className='_quantity-Icon' /></Button>
                <input type="text" value={number} readOnly/>
                <Button className='Quantity-btn minus' onClick={Minus}><FaMinus className='_quantity-Icon'/></Button>
              </div>
             {/* <Button> <input type="Submit" value="ADD TO CART" /></Button>
              </form> */}
    </>)
}
export default PlusMinusBtn;