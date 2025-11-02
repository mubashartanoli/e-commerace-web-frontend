import React, { useEffect, useState } from 'react';
import CartSlider from '../CartDiv/CartSlider';
import InfoStart from './InfoStart';
import Button from '@mui/material/Button';
import RelatedProduct from './RelatedProduct';
import ProductDescription from './ProductDescripton';
import { useContext } from "react";
import { MyContext } from '../../App';
import Review from './Review';
import AddReview from './AddReview';
import RecentlyViewed from './RecentlyViewed';
import { useParams } from 'react-router-dom';
import {getDataById,fetchDataFromApi,postData} from '../../utils/api';

const ProductDetail = () => {
  const Context=useContext(MyContext);
   const setProgress=Context.values.setProgress
   const setProductData=Context.values.setProductDetaiData
   const setproductReviewData=Context.values.setproductReviewData
   const ProductData=Context.values.ProductDetailData
   const setReviewLength=Context.values.setReviewLength
   const reviewLength=Context.values.reviewLength
   const setActive=Context.values.setActiveProductDetailBtn
   const Active=Context.values.ActiveProductDetailBtn
  

 const {id}=useParams();


const [RelatedProductData,setRelatedProductData]=useState([]);
const [RecentlyViewedProduct,setRecentlyViewedProduct]=useState([]);
const UserId=localStorage.getItem('UserId')
useEffect(()=>{
  window.scrollTo(0, 0);
setProgress(25);
   getDataById(`/api/product/getProduct/${id}`).then((response)=>{
       setProductData(response.Product);
  
      // localStorage.getItem('userId')
         fetchDataFromApi(`/api/product/get/related/product/${response.Product.subCatagory._id}`).then((data)=>{
     const filteredData = data.Product.filter(item => item._id !== id);
     
        setRelatedProductData(filteredData);

       
       }).catch((err,res)=>{
          console.log(res)
    console.error('Error fetching related products:', err);
       })

  


postData('/api/product/create/recently/viewed',{productId:id ,userId:UserId}).then((res)=>{

  setProgress(70);
  fetchDataFromApi(`/api/product/get/recently/viewed?userId=${UserId}`).then((data)=>{
   setProgress(100);
   const filterRecent= data.Product.filter(item => item.productId._id !== id);
    setRecentlyViewedProduct(filterRecent);
  
  }).catch((err)=>{
          
    console.error('Error fetching recently viewed products:', err);
       })
}).catch((err,res)=>{
         
    console.error('Error creating recently viewed products:', err);
       })
 
    
     
   }).catch((error,res)=>{
  console.log(res)
    console.error('Error fetching products:', error);
    setProgress(100);
   });
   fetchDataFromApi(`/api/review/getAll/${id}`).then((res)=>{
      setproductReviewData(res.data)
  
      setReviewLength(res.data.length)
     }).catch((err)=>{
         
    console.error('Error fetching product reviews:', err);
       })

},[id,setProgress,setProductData,UserId,setproductReviewData,setReviewLength])
  

 
    return (
        <>
           <div className='ProductDetailDiv pt-5'> 
           <div className=' container ProductDetailDivCont p-5  bg-white'>
<div className='productDetailInfoWarpper'>
    {/* slider start  */}
    <div className='product_DetailSlider_Warpper  '>

    <CartSlider data={ProductData}/>
  </div>
    {/* slider end  */}
        {/* info start  */}
      <div className='product_Detail_Info_Warpper'>   < InfoStart data={ProductData} />
    </div>

    {/* info end  */}

   
  </div></div>

    <div className='productDetailTableWapper container mt-5 p-5 bg-white'>
      <div className='productDetailTableButton'>
      <Button className={Active==='One'&&'TableButton_Active' } onClick={()=>{setActive('One')}}>DESCRIPTION</Button>

     <Button className={Active==='Two'&&'TableButton_Active' }  onClick={()=>{setActive('Two')}}>REVIEWS ({reviewLength})</Button>
     <Button className={Active==='Three'&&'TableButton_Active' }  onClick={()=>{setActive('Three')}}>ADD REVIEWS</Button>
      </div>
      { Active==='One' && <ProductDescription data={ProductData}/>}

      { Active==='Two' && <Review data={ProductData}/>}
      { Active==='Three' && <AddReview />}





    </div>


         <RelatedProduct data={RelatedProductData} />
          <RecentlyViewed data={RecentlyViewedProduct} />

              </div>
        
        </>)
}

export default ProductDetail;