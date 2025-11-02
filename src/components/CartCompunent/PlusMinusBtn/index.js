import React, { useState } from "react";
// import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from '@mui/material/Button';
import { updateData,fetchDataFromApi } from "../../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";
import { MyContext } from '../../../App';


const PlusMinusBtn= ({id,price,quantity})=>{
      const Context=useContext(MyContext);
   const setCartData=Context.values.setCartData;
   const setProgress=Context.values.setProgress;
   const userId=localStorage.getItem('UserId');
     const[number,setNumber] =useState(quantity||1)
     const[loading,setLoading] =useState(false)
     const[loadingValue,setLoadingValue] =useState()
     const[loadingminusValue,setLoadingminusValue] =useState()
      
        const plus=()=>{
            setProgress(25);
            setLoading(true);
            setLoadingValue(id);
            const itemQuantity=number+1
            const subTotal=(number+1)*price
            
            updateData(`/api/cart/Update/${id}`,{itemQuantity,subTotal}).then((res)=>{
          setProgress(60);
            fetchDataFromApi(`/api/cart/getAllby/${userId}`).then((res)=>{
                 setTimeout(() => {
              setNumber(number+1)
        setCartData(res.Cart)
setProgress(100)
setLoading(false)
setLoadingValue('')
          }, 500);
            }).catch((err)=>{
              console.log(err)
          setProgress(100)
          
            })
         
              
      }).catch((err)=>{
        setProgress(100)
        console.log(err)
        setLoading(false)
        setLoadingValue('')
      })    
        }
        const Minus=()=>{
            if(number>1){
                setLoadingminusValue(id)
                setLoading(true)
                setProgress(25)
                
 const itemQuantity=number-1
            const subTotal=(number-1)*price
          
            updateData(`/api/cart/Update/${id}`,{itemQuantity,subTotal}).then((res)=>{
    setProgress(60);
      fetchDataFromApi(`/api/cart/getAllby/${userId}`).then((res)=>{
            setTimeout(() => {
          setNumber(number-1)
        setCartData(res.Cart)
setProgress(100);
setLoading(false);
setLoadingminusValue('')
      }, 500);
  }).catch((err)=>{
    console.log(err)
setProgress(100)

  })
    
              
      }).catch((err)=>{
        setProgress(100)
        console.log(err)
        setLoading(false);
        setLoadingminusValue('')
      }) 
            }
            else{
                setNumber(1)
            }
          
        }
    return(<>

              <div className='Button_Div '>
                <Button className='Quantity-btn plus' disabled={loading} onClick={plus}>
                     {loadingValue===id ?
                    ( <CircularProgress className="Circular_Progress" />)
                :
                    <FaPlus className='_quantity-Icon' />
                }
                    
                    </Button>
                <input type="text" value={number} readOnly/>
                <Button className='Quantity-btn minus' disabled={loading} onClick={Minus}>
                    {loadingminusValue===id ?
                    ( <CircularProgress className="Circular_Progress" />)
                :
                    <FaMinus className='_quantity-Icon'/>
                }
                    </Button>
              </div>
       
    </>)
}
export default PlusMinusBtn;