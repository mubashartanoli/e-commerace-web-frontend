import bannerOne from '../../images/Man-Banner-one.jpg';
import bannerThree from '../../images/Man-Banner-three.jpg';
import bannerFive from '../../images/Man-Banner-five.jpg';
import bannerSeven from '../../images/Man-Banner-seven.jpg';
import Button from '@mui/material/Button';
import React from "react";
import { useContext } from "react";
import { MyContext } from '../../App';
import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import {fetchDataFromApi} from '../../utils/api';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';



const SectionDiv =()=>{
    const navigate = useNavigate();
    const Context = useContext(MyContext);
const mobileResize = Context.values.mobileResize;
const mobilesize = Context.values.mobilesize;


const allCatagory = Context.values.allCatagory;
const allProduct = Context.values.allProduct;
const newProduct = Context.values.newProduct;
const featuredProduct = Context.values.featuredProduct;





    return(
        <>
        <div className='container pr-0 pt-5'>
            <div className="d-flex align-items-start justify-content-between">
                {/* left p start */}
            <div className="  section-Banner-Part cursor ">
            <div className='sidebar-product-banner w-100  sectionbnnerimgdiv '>
            <img className='sidebar-product-banner-img w-100' src={bannerOne} alt="banner" />
            </div> 

             <div className='sidebar-product-banner w-100 sectionbnnerimgdiv marginTop '>
            <img className='sidebar-product-banner-img w-100' src={bannerThree} alt="banner" />
            </div>  

             <div className=' sidebar-product-banner w-100 sectionbnnerimgdiv marginTop'>
            <img className='sidebar-product-banner-img w-100' src={bannerFive} alt="banner" />
            </div>  

             <div className=' sidebar-product-banner w-100 sectionbnnerimgdiv marginTop'>
            <img className='sidebar-product-banner-img w-100' src={bannerSeven} alt="banner" />
            </div>  

        </div>
          
        {/* left p end */}

        {/* right p start */}
        <div className=" section-Product-Part">
            {/* featured div start */}
            <div className='w-100 d-flex align-items-center position-relative justify-content-between'>
             <div>
                <h3 className='info'>Featured Products</h3>
               
             </div>
             
             <div>
                <Button className='sectionbtn' onClick={()=>{navigate('/Shop/All')}}>View All <FaArrowRightLong /> </Button>
             </div>
            </div>
            

            {/* product row slider start */}
            <div className='product_row w-100 mt-4'>
            <Swiper
        slidesPerView={mobilesize}
        spaceBetween={mobileResize===true? 10 : 0}
    loop={featuredProduct && featuredProduct.length > 5}
       navigation={mobileResize===true? true :false} 
        modules={[Navigation]} 
        className="mySwiper "
      >
        {
          featuredProduct && featuredProduct.length > 0 && featuredProduct.map((item)=>{

                return(
                    <SwiperSlide key={item._id}>  <ProductCard data={item}/>  </SwiperSlide>
                )
            })
        }

        

    
      </Swiper>
            </div>
            {/* product row slider end */}
{/* featured div end */}




  


{allCatagory && allCatagory?.length >0 && allCatagory?.map((item)=>{
      const filteredProducts = allProduct?.filter(Product => Product.catagory._id === item._id);
  if (filteredProducts?.length > 0) {

    return(

<div className='mt-5 w-100' key={item._id}>
   {/* catagory div start */}

            <div className='w-100  d-flex align-items-center position-relative justify-content-between'>
             <div>
                <h3 className='info'>{item.name}</h3>

             </div>
             
             <div>
                <Button className='sectionbtn' onClick={()=>{navigate(`/Shop/${item._id}`)}}>View All <FaArrowRightLong /> </Button>
             </div>
            </div>
            {/* catagory div end */}

            {/* product row slider start */}
            <div className='product_row w-100 mt-4'>
            <Swiper
        slidesPerView={mobilesize}
        spaceBetween={mobileResize===true? 10 : 0}
   loop={allProduct&& allCatagory&& allProduct.length>0 && allCatagory.length>5}
       navigation={mobileResize===true? true :false} 
        modules={[Navigation]} 
        className="mySwiper "
      > 
        { 
        allProduct&& allCatagory&& allProduct.length>0 && allCatagory.length>0 && allProduct.filter(Product=>Product.catagory._id===item._id)
         .map((item)=>{
                     return(
                    <SwiperSlide key={item._id}>  <ProductCard data={item}/>  </SwiperSlide>
                )
         })


        }

        

    
      </Swiper>
            </div>
            {/* product row slider end */}
</div>

    )} else {
    return null;
  }

})}

   {/* new product heading div start   */}
              <div className='w-100 d-flex align-items-center position-relative justify-content-between mt-5'>
             <div>
                <h3 className='info'>NEW PRODUCTS</h3>
                <p className='pinfo'>New products with updated stocks.</p>
             </div>
             
             <div>
                <Button className='sectionbtn' onClick={()=>{navigate('/Shop/All')}}>View All <FaArrowRightLong /> </Button>
             </div>
            </div>
              {/* new product heading div end   */}

              {/* new product row slider start */}
             <div className={`New_product_row  w-100 mt-4 `}>
           {
          newProduct && newProduct.length>0 && newProduct.map((item)=>{
               return(
                   <div className='new-product-card' key={item._id}> <ProductCard data={item}/> </div>
               )
           })
           } 

            

            </div>
              {/* new product row slider end */}







         
              
            
            </div>
        {/* right p end */}
        </div>
        </div>
    
        </>
    )
}
export default SectionDiv;