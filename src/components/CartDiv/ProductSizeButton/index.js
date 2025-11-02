import Button from '@mui/material/Button';
import { useState } from 'react';



const ProductSizeButton=(props)=>{
    const [activeBtn,setActiveBtn]= useState()


    return(<>
    <div className=" ProductSizeButton w-100 ">
        {props.data && props.data.length>0 && props.data.map((item,index)=>{
        
            return(
  <Button key={index} className={`ProductSizeBtn ${activeBtn===index &&'TableButton_Active' }`}
   onClick={()=>{ setActiveBtn(index); props.act(item)}}  >{item}</Button>
            ) 
        })} 
   

    
    </div>
    </>)
}
export default ProductSizeButton;