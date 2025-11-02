import PlusMinusBtn from '../ProductPlusMinus';
import AddToFavorite from '../../CartDiv/AddToFavorite';

import Button from '@mui/material/Button';
import React from 'react';
import ProductSizeButton from '../../CartDiv/ProductSizeButton';
import StoreIcon from '@mui/icons-material/Store';
import PixIcon from '@mui/icons-material/Pix';
import PaletteIcon from '@mui/icons-material/Palette';
import ViewListIcon from '@mui/icons-material/ViewList';
import DiscountIcon from '@mui/icons-material/Discount';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ShopIcon from '@mui/icons-material/Shop';
import { useContext } from "react";
import { MyContext } from '../../../App';


const InfoStart =(props)=>{
  const Context=useContext(MyContext);
   const setProductSize=Context.values.setProductSize
   const setProductColor=Context.values.setProductColor

    return(<>


            <div className='productDetailImageinfo'>
              <div className='ProductInfoWidth'>
                          <div className='_Price d-flex    mb-2'>
                            <ViewListIcon/>
              <h5 className=' mb-0'>Tittle </h5> 
              <span>:</span>
              <h6 >{
                props.data===undefined ? 'Product Title' : props.data.name
                }</h6></div>
                          <div className='_Price d-flex    mb-2'>
                             <StoreIcon/>
              <h5 className=' mb-0'>Brand </h5> 
              <span>:</span>
              <h6 >{
                props.data===undefined ? 'Product Brand' : props.data.brand.name
                }</h6></div>
                          <div className='_Price d-flex    mb-2'>
                            <PixIcon/>
              <h5 className=' mb-0'>Category </h5> 
              <span>:</span>
              <h6 >{
                props.data===undefined ? 'Product Category' : props.data.catagory
.name
                }</h6></div>
 
            <div className='_Price d-flex    mb-2'>
              <PriceChangeIcon/>
              <h5 className=' mb-0'>Regular Price </h5> 
              <span>:</span>
              <h6 className='_old-price '>{
                props.data===undefined ? '000' : props.data.price
 
                } PKR</h6></div> 
              
            <div className='_Price d-flex   mb-2'>
              <DiscountIcon/>
              <h5 className=' mb-0'>Discunt Price </h5> 
              <span>:</span>
              <h6 className='_new-price '>{
                props.data===undefined ? '000' : props.data.discount
                } PKR</h6></div>

            <div className='_Price d-flex   mb-2'>
              <ShopIcon/>
              <h5 className=' mb-0'>Stock </h5> 
              <span>:</span>
                <div className='In-Stock mt-1 '>
                  {props.data!==undefined && props.data.countInStock<=0?
                   <Button className='first'>Out of Stock</Button>
                   :
                   <Button className='second'>In Stock</Button>
                   }
               
               </div>
              </div>

<div className='_Price d-flex w-100 mt-2 mb-2'>
  <PaletteIcon/>
  <h5 className=' mb-0'>Size </h5> 
  <span>:</span>
  <div className='_colour_Btn' >
    <ProductSizeButton data={props.data!==undefined && props.data.size} act={setProductSize} />
  </div>
</div>
          
<div className='_Price d-flex w-100 mt-2 mb-2'>
  <PaletteIcon/>
  <h5 className=' mb-0' >Colour </h5> 
  <span>:</span>
  <div className='_colour_Btn' >
    <ProductSizeButton data={props.data!==undefined && props.data.color} act={setProductColor} />
  </div>
</div>
          
            

              
            
             <PlusMinusBtn/>
           
          

                  {/* <ProductSizeButton/> */}

              <div>

                    <AddToFavorite/>
                

              </div>

            </div>
             </div>
        

    
    </>)
}

export default InfoStart;