import React, { useEffect } from 'react';
import ShopPageLeft from './ShopPageLeft';
import ShopPageRight from './ShopPageRight';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { MyContext } from '../../App';
import { useParams } from 'react-router-dom';
import {fetchDataFromApi} from '../../utils/api';


const ShopPage=()=>{
    const Context=useContext(MyContext);
    const ShowFilterProduct=Context.values.ShowFilterProduct
    const setShowFilterProduct=Context.values.setShowFilterProduct
    const Rowvalue=Context.values.Rowvalue
    const setProgress=Context.values.setProgress
    const setProductData=Context.values.setProductData
    const setCatagoryId=Context.values.setCatagoryId;
      const SubCatagoryId=Context.values.SubCatagoryId;
        const FilterPriceValue=Context.values.FilterPriceValue
        const BrandId=Context.values.BrandId
        const setPageValue=Context.values.setPageValue
  
    const stockCheck=Context.values.stockCheck;
const {id}=useParams();

useEffect(()=>{
  setCatagoryId(id);
setProgress(25)
fetchDataFromApi(`/api/product/get/products/all?perPage=${Rowvalue}&catagory=${id}&stock=${stockCheck}&maxPrice=${FilterPriceValue[1]}&minPrice=${FilterPriceValue[0]}&Brand=${BrandId}&SubCatagory=${SubCatagoryId}`).then((res)=>{
setProductData(res);
setPageValue(res.page);
setProgress(100);
}).catch((error)=>{
console.error('Error fetching products:', error);
setProgress(100);
}); 

},[id,Rowvalue,setProgress,setProductData,setCatagoryId,FilterPriceValue,stockCheck,BrandId,SubCatagoryId,setPageValue]);






    return(<>
    <div className="ShopPage container">
        <div className=" row">
            <div className={`LeftShopPage   p-3 mb-5 ${ShowFilterProduct===true? 'show':'hide'}  `}>
                <div className='Top_ mb-3'>
              <h3>FILTER PRODUCT</h3>
<div className='Button'>
    <IconButton onClick={() => setShowFilterProduct(false)} aria-label="close" className='css-53g0n7-MuiButtonBase-root-MuiIconButton-root'>
        <CloseIcon/>
    </IconButton>
</div>
                </div>
                <ShopPageLeft />
            </div>
            <div className="RightShopPage  p-3 ">
                <div className='ShopPageRightWarpper'><ShopPageRight /></div>
                
            </div>
        </div>
    </div>
    </>)
}
export default ShopPage;