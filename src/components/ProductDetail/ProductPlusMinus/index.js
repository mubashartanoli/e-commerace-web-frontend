import PlusMinusBtn from "../../CartDiv/PlusMinusBtn"
import Button from '@mui/material/Button';
import { useContext,useState } from "react";
import { MyContext } from '../../../App';
import { useParams } from "react-router-dom";
import { postData,fetchDataFromApi } from "../../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
const ProductPlusMinus=()=>{
      const Context=useContext(MyContext);
   const productColor=Context.values.productColor
   const productSize=Context.values.productSize;
      const number=Context.values.number;
          const setProgress=Context.values.setProgress;
            const setCartData=Context.values.setCartData;
const [loading,setLoading]=useState(false);
   const ProductData=Context.values.ProductDetailData
    const setOpen=Context.values.setOpen;
  
 const {id}=useParams();
 const userId=localStorage.getItem('UserId');
 const Token=localStorage.getItem('Token');
   const addtoCart=()=>{
     setProgress(25);
     
 if( !ProductData ||ProductData===undefined ||ProductData===null){
        setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Product Can't add to cart .Please try again later "
     })
     return;
 } 
   
    if(!Token || Token===''||Token===undefined){
                   setProgress(100);
           setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Login First'
     })
     return;
    }
    if(!userId || userId===''||userId===undefined){
                   setProgress(100);
           setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Login First'
     })
     return;
    }
       if(productSize===undefined){
           setProgress(100);
           setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Add Product Size'
     })
     return;
    }
       if(productColor===undefined){
           setProgress(100);
           setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Add Product color'
     })
     return;
    }
setLoading(true)
const subTotal=ProductData?.discount*number


    postData('/api/cart/addtoCart',
     {userId,ProductId:id,productColor,productSize,ProductQuantity:number,subTotal:subTotal}
    ).then((responce)=>{
       
          fetchDataFromApi(`/api/cart/getAllby/${userId}`).then((res)=>{
setProgress(75);
setCartData(res.Cart)

setTimeout(() => {
  setOpen({
       status:true,
       color:'#7958b6',
       data:responce.message
     })
     setLoading(false)
        setProgress(100)
}, 1000);

  }).catch((err)=>{
    setLoading(false)
    console.log(err)
    return;
  })

    }).catch((err)=>{
        console.log(err);
        setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Product Can't add to cart .Please try again later "
     })
     setProgress(100)
     setLoading(false)
    })

   }
    return(
        <>
    <div className='Cart_Submit_Form'>
             <PlusMinusBtn/>
             <Button onClick={addtoCart}>
                            {loading===true?
                    ( <CircularProgress className="Circular_Progress" />)
                :
                    'ADD TO CART'
                }
              </Button>
              </div>
        </>
    )
}
export default ProductPlusMinus;