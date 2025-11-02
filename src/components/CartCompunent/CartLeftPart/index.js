
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AddSbstr from '../PlusMinusBtn'
import Button from '@mui/material/Button';
import { MdOutlineClose } from "react-icons/md";
import { useContext, useState} from "react";
import { MyContext } from '../../../App';
import CircularProgress from "@mui/material/CircularProgress";
import { deleteData,fetchDataFromApi } from '../../../utils/api';



const CartLeftPart=()=>{
         const Context=useContext(MyContext);
   const cartData=Context.values.cartData;
   const setOpen=Context.values.setOpen;
   const  setProgress=Context.values.setProgress;
const [loading,setLoading]=useState();
const [isloading,setIsLoading]=useState(false);
      const setCartData=Context.values.setCartData;
const userId=localStorage.getItem('UserId');
const deleteCartById=(id)=>{
    
setLoading(id)
setProgress(25)
deleteData(`/api/cart/delete/${id}`).then((response)=>{
    console.log(response)
      fetchDataFromApi(`/api/cart/getAllby/${userId}`).then((res)=>{
setOpen({
           status:true,
           color:'#7958b6',
           data:response.message
         })
setCartData(res.Cart)
setProgress(100)
setLoading('')
  }).catch((err)=>{
    console.log(err)
setProgress(100)

  })

}).catch((err)=>{
    console.log(err)
        setLoading('')
    setProgress(100)
})
   }

const deleteAllCart=()=>{
    setIsLoading(true)
setProgress(25)
deleteData(`/api/cart/deleteAll/By/userid/${userId}`).then((response)=>{
    console.log(response)
      fetchDataFromApi(`/api/cart/getAllby/${userId}`).then((res)=>{
setOpen({
           status:true,
           color:'#7958b6',
           data:response.message
         })
setCartData(res.Cart)
setProgress(100)
setIsLoading(false)
  }).catch((err)=>{
    console.log(err)
setProgress(100)
setIsLoading(false)
  })

}).catch((err)=>{
    console.log(err)
        setIsLoading(false);
    setProgress(100)
})
}

    return(<>
    <div className="CartLeftPartHead">
    <div>YOUR CART</div>
    <p>There are <b>{cartData?.length}</b> Product in your cart.</p>
    </div>
    <div className="CartLeftPartTable w-100">
        <table className="table">
            <thead>
           <tr>
            <th width="50%">Product</th>
            <th width="10%">Price</th>
            <th width="20%" > <div className='w-100 d-flex justify-content-center'>Quantity</div></th>
            <th width="10%">Subtotal</th>
            <th width="10%">Delete</th>
            </tr>
            </thead>

            <tbody>
                {
                !cartData || cartData.length<=0?
                 (
             <tr>
                <td width={'100%'}>
                 <div  className='cartnotfound d-flex align-items-center justify-content-center w-100 '>

                     <h1 >Cart table is empty?</h1>
                 </div></td></tr>
                     ):
                cartData.map((data)=>{
                   
                    return(
     <tr key={data._id}>
                    <td  width="45%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={data.product.image[0]} alt="" />
                        </div>
                        <div className='text-Warpper d-flex flex-column justify-content-center'>	
                        <p>{data.product.name}</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={data.product.rating} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>
                        {data.product.discount} PKR
                        </p> </td>
                    <td width="20%">
                    <div className='AddSbstr'>
                         <AddSbstr id={data._id} 
                         price={data.product.discount}
                         quantity={data.itemQuantity}/>
                         </div>
                    </td>
                    <td width="15%"> <p className='price'>
                        {data.subTotal} PKR
                        </p></td>
                    <td width="10%">
                        <div className='delete delete_Cart'>
                         <Button  onClick={()=>{deleteCartById(data._id)}} >
                               {loading===data._id?
                    ( <CircularProgress className="Circular_Progress" />)
                :
                    (<MdOutlineClose />)
                }
                             
                             </Button>
                        </div>
                    </td>
                </tr>
                    )
                })
            
            }
            </tbody>
     
     


        </table>
</div>
        <div className='CartLeftPartTableCoupenWapper w-100 d-flex  align-item-center justify-content-between '>

       <div className='CouppenWapper'> 
   

        <input type="text" placeholder='Coupen Code'/>

      <Button>Submit</Button>  
     
       </div>

       <Button disabled={isloading} onClick={()=>{deleteAllCart()}}>
                       {isloading?
                    ( <CircularProgress className="Circular_Progress" />)
                :
                    ('Delete All')
                }
        </Button>

        </div>
    
    </>)
}
export default CartLeftPart;