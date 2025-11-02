import Button from '@mui/material/Button';
import { useContext, useEffect, useState} from "react";
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi, postData } from '../../../utils/api';
import CircularProgress from "@mui/material/CircularProgress";


const RightPart=()=>{
  const navigate=useNavigate()
     const Context=useContext(MyContext);
   const cartData=Context.values.cartData;
   const AllCartTotalPrice=Context.values.AllCartTotalPrice;
   const setAllCartTotalPrice=Context.values.setAllCartTotalPrice;
   const OrderFormData=Context.values.OrderFormData;
   const setOrderFormData=Context.values.setOrderFormData;
   const setOpen=Context.values.setOpen;
         const setProgress=Context.values.setProgress;
         const setOrderData=Context.values.setOrderData;
            const setCartData=Context.values.setCartData;
  const [GrandTotal,setGrandTotal]=useState(0)
 const [isLoading,setIsLoading]=useState(false)
   useEffect(()=>{
    if(cartData && cartData?.length>0){
const sum = cartData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.subTotal
}, 0);


    const newArray = cartData.map((data) => ({
      itemColor: data.itemColor,
      subTotal: data.subTotal,
      itemSize: data.itemSize,
      itemQuantity: data.itemQuantity,
      productID: data.product._id,
    }));

     setOrderFormData((prevState) => ({ ...prevState,
       products: newArray,
      total:sum+300 }));
setAllCartTotalPrice(sum)
setGrandTotal(sum+300)
    }
    
   },[cartData,setAllCartTotalPrice,setOrderFormData])
const Objects=[
  {Condition: OrderFormData.products.length<=0, message:"Please Add Product.."},
  {Condition: OrderFormData.UserId==='',message:"Please Login First.."},
  {Condition: OrderFormData.email==='',message:"Please Enter Your Email..."},
  {Condition: OrderFormData.contact==='',message:"Please Enter Your Phone Number..."},
  {Condition: OrderFormData.name==='',message:"Please Enter Your Full Name..."},
  {Condition: OrderFormData.Province==='',message:"Please Enter Province and Press Enter.."},
  {Condition: OrderFormData.city==='',message:"Please Enter Your City And Press Enter.."},
  {Condition: OrderFormData.total==='',message:"Network Error Reload And Try Again.."},
  {Condition: OrderFormData.address==='',message:"Please Enter Your address.."},
]
const isSubmittingOrder=()=>{
  setIsLoading(true)
  setProgress(25)

for(const obj of Objects){
  if(obj.Condition){
    console.log(obj.message)
     setProgress(100);
    setIsLoading(false)
    
    setOpen({
      status:true,
      color:'#fa3e3e',
      data:obj.message
    })
    return;
  } 
  }
 



 const UserId=localStorage.getItem('UserId')
console.log(OrderFormData)
  postData('/api/Order/add ',OrderFormData).then((res)=>{
    console.log(res)
    setProgress(60)
  fetchDataFromApi(`/api/cart/getAllby/${UserId}`).then((resp)=>{

setCartData(resp.Cart)
setProgress(50)
    fetchDataFromApi(`/api/Order/getById/${UserId}`).then((responce)=>{
      setOrderData(responce.data);
       setTimeout(() => {
        setProgress(100)
        navigate('/Orders')
      setOpen({
       status:true,
       color:'#7958b6',
       data:res.message
     })
    }, 1000);

}).catch((err)=>{
    console.log(err)
})
  }).catch((err)=>{
    console.log(err)


  })

   
  }).catch((err)=>{
    console.log(err)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Order Can't Occur Please Try Again..."
     })
     setProgress(100);
  })

}
    return(<>
    <div className="ProceedToCheckOutRightPart p-3">
      <div className="headding"><h3>Cart totals</h3></div>  
<div className='ProceedToCheckOutPTable'>
<table>
  <thead>
    <tr>
    <td width={"20%"}>Image</td>
    <td width={"40%"}>Name</td>
    <td width={'20%'}>Quantity</td>
    <td width={'20%'}>
       <div className=' w-100 d-flex justify-content-center '>Price</div></td>
    </tr> 
  </thead>
  <tbody>
    {
      cartData && cartData?.length>0 && cartData.map((data)=>{
        
        return(
 <tr key={data._id}>
    <td width={"20%"}>
      <div className='ProToCheckOutPImage'>
        <img src={data.product.image[0]} width={'100%'} alt="" />
      </div>
    </td>
    <td width={"40%"}>{data.product.name}</td>
    <td width={'20%'}><div className=' w-100 d-flex justify-content-center '>{data.itemQuantity}</div></td>
    <td width={'20%'}>
       <div className=' w-100 d-flex justify-content-center '>PKR {data.subTotal}</div></td>
    </tr> 
        );
      })
    }
   
  </tbody>
</table>
</div>

  <div className="Totals_Div_proceed w-100 d-flex align-item-center justify-content-between">
        <p>Subtotal</p>
       <p className="_valu-e">{AllCartTotalPrice}</p>
      </div>

  <div className="Totals_Div_proceed w-100 d-flex align-item-center justify-content-between">
        <p>Shipping</p>
       <p className="_valu-e">300</p>
      </div>
  <div className="Totals_Div_proceed w-100 d-flex align-item-center justify-content-between">
        <p>Grand Total</p>
       <p className="_valu-e">{GrandTotal}</p>
      </div>
<div>

</div>
      
      <div className="Proceed-To-Check-Out w-100 mt-3">
            <Button disabled={isLoading===true} onClick={()=>{isSubmittingOrder()}}>
              {
                isLoading===true ?  ( <CircularProgress className="Circular_Progress" />)
                :('Confirm Order')
              }
              </Button>
      </div>
    </div>
    </>)
}
export default RightPart;