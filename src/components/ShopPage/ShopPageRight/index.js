import React from 'react';
import BannerOne from '../../../images/store-man-banner.png';
import { RiMenuLine } from "react-icons/ri";
import Button from '@mui/material/Button';
import { PiCirclesFourFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from '../../SectionDiv/ProductCard';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import { MyContext } from '../../../App';
import {fetchDataFromApi} from '../../../utils/api';

const ShopPageRight=()=>{
  const Context=useContext(MyContext);
  const Rowvalue=Context.values.Rowvalue
  const setRowvalue=Context.values.setRowvalue
  const setProgress=Context.values.setProgress
  const ProductData=Context.values.ProductData
  const setProductData=Context.values.setProductData
  const PageValue=Context.values.PageValue
  const setPageValue=Context.values.setPageValue
  const CatagoryId=Context.values.CatagoryId;
  const FilterPriceValue=Context.values.FilterPriceValue
 const  BrandId = Context.values.BrandId;
     const stockCheck=Context.values.stockCheck;
     const SubCatagoryId=Context.values.SubCatagoryId;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ProductView, setProductView] = useState('');
 








    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
      setProgress(25);
      console.log('SubCatagoryId',SubCatagoryId);
      setRowvalue(e.target.value)

fetchDataFromApi(`/api/product/get/products/all?perPage=${e.target.value}&catagory=${CatagoryId}&stock=${stockCheck}&maxPrice=${FilterPriceValue[1]}&minPrice=${FilterPriceValue[0]}&Brand=${BrandId}&SubCatagory=${SubCatagoryId}`).then((res)=>{
setProductData(res);
setPageValue(res.page)
setProgress(100);
}).catch((error)=>{
console.error('Error fetching products:', error);
setProgress(100);
});
      setAnchorEl(null);
    };

    const PaginationOnChange=(event,value)=>{

    try{
    setProgress(25)
    setPageValue(value);
     console.log('SubCatagoryId',SubCatagoryId)
    // console.log('Row',Rowvalue)
     fetchDataFromApi(`/api/product/get/products/all?page=${value}&perPage=${Rowvalue}&catagory=${CatagoryId}&stock=${stockCheck}&maxPrice=${FilterPriceValue[1]}&minPrice=${FilterPriceValue[0]}&Brand=${BrandId}&SubCatagory=${SubCatagoryId}`).then((res)=>{
        setProductData(res);
        setPageValue(res.page)
      setProgress(100)
     })}catch(err){
         setProgress(100)
        console.log(err);
     
     }
}

    return(<>
    <div className="Shop-Left-Banner w-100 mt-5">
        <img className='w-100' src={BannerOne} alt="" />
    </div>
    {/* banner end  */}
    {/* header start  */}
    <div className='Shop-Left-header w-100 d-flex align-items-center justify-content-between mt-5 '>
      <div className='Shop-Left-icon-warpper'>
     <Button className={`Show_One ${ProductView==='SLPone'&& '_Active-Btn'}`}  onClick={()=>{setProductView('SLPone')}}><RiMenuLine /></Button> 
     <Button className={`Show_Two ${ProductView==='SLPtwo'&& '_Active-Btn'}`}  onClick={()=>{setProductView('SLPtwo')}}><PiCirclesFourFill /></Button> 
     <Button className={`Show_Three ${ProductView==='SLPthree'&& '_Active-Btn'}`}  onClick={()=>{setProductView('SLPthree')}}><CgMenuGridO /></Button> 
     <Button className={`Show_Four ${ProductView==='SLPfour'&& '_Active-Btn'}`}  onClick={()=>{setProductView('SLPfour')}}><TfiLayoutGrid4Alt /></Button> 
      </div>
        <div className='Shop-Left-Header-show-cart'>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        <span className='Shop-Left-Header-show-cart-text '>Show <strong>{Rowvalue}</strong> </span>
        <span className='Shop-Left-Header-show-cart-icon ml-auto d-block '><IoIosArrowDown  /> </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        // onClose={handleClose}
       
      >
        <MenuItem value="4" onClick={handleClose}>4</MenuItem>
        <MenuItem value="10" onClick={handleClose}>10</MenuItem>
        <MenuItem value="20" onClick={handleClose}>20</MenuItem>
        <MenuItem value="30" onClick={handleClose}>30</MenuItem>
        <MenuItem value="50" onClick={handleClose}>50</MenuItem>

      </Menu>

    </div>
    </div>
    {/* header end  */}
    {/* products start */}
     <div className={`Shop-Left-products w-100 ${ProductView}`}>

{
  ProductData && ProductData.Product?.length > 0 && ProductData.Product.map((item) => (
    <ProductCard key={item._id} data={item}  />
  ))
}
       

          
          
         
     </div>
     {ProductData && ProductData.Product?.length <= 0 && (
       <div className='ProductNotFound'><h1> &lt; Products Not Found &gt; </h1></div>
     )}

        
    {/* products end */}
    
    <div className='Shop-Left-products-pagination w-100 mt-4 mb-5 d-flex align-items-center justify-content-center '>
        <Stack spacing={2}>
      <Pagination count={ProductData?.totalPage} page={PageValue} onChange={PaginationOnChange} size="large" color="primary" />
    </Stack>
    </div>


    </>)
}
export default ShopPageRight;