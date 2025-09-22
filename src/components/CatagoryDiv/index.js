import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import bannerFive from '../../images/Man-Banner-five.jpg';
import { useContext } from "react";
import { MyContext } from '../../App';


const CatagoryDiv=()=>{
        const Context = useContext(MyContext);
const mobileResize = Context.values.mobileResize;
  const allCatagory = Context.values.allCatagory;
const [value ,setValue] = useState(8);
useEffect(()=>{ 
      const handleReSize=()=>{
if (window.innerWidth > 500 && window.innerWidth < 800) {
  setValue(6);
} else if (window.innerWidth < 500 &&window.innerWidth > 330) {
  setValue(3);
} else if (window.innerWidth < 330) {
  setValue(2);
} else {
  setValue(8);
}
  }
  handleReSize();

  window.addEventListener('resize', handleReSize);

  return () => {
    window.removeEventListener('resize', handleReSize);
  };
},[value])

    return(
        <>

          <div className='w-100 d-flex align-items-center  mt-4'>
             <div>
                <h3 className='info'>Featured Catagories</h3>
                
             </div>
             
             {/* <div>
                <Button className='sectionbtn'>View All <FaArrowRightLong /> </Button>
             </div> */}
            </div>
        
        <div className="catagory-slider mt-3 "> 
           <Swiper
        slidesPerView={value}
        spaceBetween={mobileResize===true? 6 : 2}
    loop={allCatagory && allCatagory.length > value}
       navigation={mobileResize!==true? false : allCatagory.length > value&& true}
        modules={[Navigation]} 
        className="mySwiper" >
            {
                allCatagory && allCatagory.length > 0 && allCatagory.map((item) => {
               
                    return (
                        <SwiperSlide key={item._id}>
                            <div className="catagory-cart w-100 cursor ">
                                <div className="w-100 image-warpper">
            <img className='catagory-cart-img w-100' src={item.images[0]} alt="banner" />
            </div>
            <div className="catagory-cart-info" >
                <span>{item.name}</span>
            </div>
            </div>
            </SwiperSlide>
                    )
                })
            }

      </Swiper>
      </div>

    </>
    )
   
}

export default CatagoryDiv