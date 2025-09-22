import Dialog from '@mui/material/Dialog';
import { MdOutlineClose } from "react-icons/md";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { MyContext } from '../../App';
import { useContext } from "react";
import CartSlider from './CartSlider';
import PlusMinusBtn from './PlusMinusBtn';
import AddToFavorite from './AddToFavorite';
import ProductSizeButton from './ProductSizeButton';
import PaletteIcon from '@mui/icons-material/Palette';
import DiscountIcon from '@mui/icons-material/Discount';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ShopIcon from '@mui/icons-material/Shop';
import { getDataById } from '../../utils/api';



 const CartDiv=()=>{
    const [value, setValue] = React.useState(2);
    const[productData,setProductData]=React.useState();
    const Context = useContext(MyContext);
 const ProductDetailPopupId=Context.values.ProductDetailPopupId;
    const setShowCart=Context.values.setShowCart;
    
    useEffect(()=>{
      getDataById(`/api/product/getProduct/${ProductDetailPopupId}`).then((res)=>{
        setProductData(res.Product);
         
      })
    },[ProductDetailPopupId])


    const HideProductDetail=(index)=>{
      setShowCart(false);
      }
      // console.log('CartDiv Render', ProductDetailPopupId);

    return(
        <>
        <Dialog className='CartDiv ' open={true}>
          <div className=' _Padding '>
            <div className='productDetailDiv  '>
            <div className='productDetailInfoWarpper  '>

         <h3>{productData?.name}</h3>

         <div className='_row  productDetailInfo_heading  '>
         <div className=' border-right_'>Brands: 
          <span>{productData ? productData?.brand.name : 'Product Brand'}</span></div >
    <div className='border-right_ Detail-Top-Rating '> 
    <Box sx={{ '& > legend': { mt: 2 } }} >
     
      <Rating
      size='large'
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     
    </Box>
         <span >1 Review </span></div>
         <div >Catagory:  <span>	{productData!== null ? productData?.catagory.name : 'Product Category'}</span></div>
         </div>
            </div>
          

          {/* ProductimageWarpper top detail start  */}
          <div className='  mt-3 productDetailImageWarpper '>
           <div className='product_DetailSlider_Warpper  '>
          <CartSlider  data={productData} />
          
           </div>
              
           <div className='product_Detail_Info_Warpper '>
            <div className='productDetailImageinfo'>

   <div className='_Price d-flex    mb-2'>
              <PriceChangeIcon/>
              <h5 className=' mb-0'>Regular Price </h5> 
              <span>:</span>
              <h6 className='_old-price '>{productData ? productData?.price : '0.00'} PKR</h6></div>
            <div className='_Price d-flex  mb-2 '>
              <DiscountIcon/>
              <h5 className=' mb-0'>Discount Price </h5> 
              <span>:</span>
              <h6 className='_new-price '>{productData ? productData?.discount : '0.00'} PKR</h6></div>
            <div className='_Price d-flex  mb-2 '>
              <ShopIcon/>
              <h5 className=' mb-0'>Stock </h5> 
              <span>:</span>
                <div className='In-Stock mt-1 mb-2'>
                  {productData && productData?.countInStock > 0 ? <Button className='second'>In Stock</Button> :<Button className='first'>Out of Stock</Button>  }
               </div>
              </div>

<div className='_Price d-flex w-100 mt-2 mb-2'>
  <PaletteIcon/>
  <h5 className=' mb-0'>Size </h5> 
  <span>:</span>
  <div className='_colour_Btn' >
    <ProductSizeButton data={productData?.size} />
  </div>
</div>
          
<div className='_Price d-flex w-100 mt-2 mb-2'>
  <PaletteIcon/>
  <h5 className=' mb-0' >Colour </h5> 
  <span>:</span>
  <div className='_colour_Btn' >
    <ProductSizeButton data={productData?.color} />
  </div>
</div>
          
            

              
              <form className='Cart_Submit_Form mt-3'>
             <PlusMinusBtn/>
             <Button> ADD TO CART</Button>
              </form>

                  {/* <ProductSizeButton/> */}

              <div>

                    <AddToFavorite/>
                

              </div>

            </div>
             
           </div>

          </div>
    {/* ProductimageWarpper top detail end  */}

          </div>
            </div>

          <Button className='close_' onClick={HideProductDetail} ><MdOutlineClose /></Button>
        </Dialog>

        </>
    )
 }
 export default CartDiv;