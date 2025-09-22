import Button from '@mui/material/Button';
import { useState } from 'react';



const ProductSizeButton=(props)=>{
    const [activeBtn,setActiveBtn]= useState(null)

    return(<>
    <div className=" ProductSizeButton w-100 ">
        {props.data && props.data.length>0 && props.data.map((item)=>{
            return(
  <Button className={`ProductSizeBtn ${activeBtn===item &&'TableButton_Active' }`} onClick={()=>{setActiveBtn(item)}}  >{item}</Button>
            ) 
        })} 
   

    
    </div>
    </>)
}
export default ProductSizeButton;