import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import bannerFive from '../../../images/Man-Banner-five.jpg';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import {Autoplay} from 'swiper/modules';



const CartSlider= (props)=>{
      const[slideIndex , setSlideIndex]=useState(0);
      const sliderMover= React.useRef(null);
      const slider= React.useRef(null);
    
       const goto=(index)=>{
        setSlideIndex(index);
        sliderMover.current.swiper.slideTo(index);
        slider.current.swiper.slideTo(index);
       }

    return(<>
 <div className='productDetailImageSlider '>
            <Swiper 
             modules={[ Autoplay]}
           loop= { props.data!==undefined && props.data.image?.length > 1}  
             spaceBetween={0}
             ref={slider}
             className="_cartImageSlider"
               autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
             >

             {   props.data !== undefined && props.data.image?.length > 0 && props.data.image.map((image, index)=>{
              return(
                            <SwiperSlide key={index}>
              <div className="item">
              <div className="product-badges cursor"> <span className="badge style-1 onsale">24%</span> </div>
              <InnerImageZoom  zoomType='hover' zoomScale={2}  src={image}/>
            </div>
          </SwiperSlide>
              )
             }) }


             </Swiper>
             </div>

           <div className='_productDetailImageSliderMover d-flex align-items-center justify-content-center mt-3   w-100'>

            <Swiper 
            
             
             spaceBetween={10}
              slidesPerView={3}
              ref={sliderMover}
             className="_cartImageSliderMover h-100 w-75 ">
        {   props.data !== undefined && props.data.image?.length > 0 && props.data.image.map((image, index)=>{
              return(
               
            <SwiperSlide key={index}>
              
              <div className={`_item ${slideIndex ===0 && 'item_active'} `}>
              
             <img src={image} alt="" className='w-100'onClick={()=>goto(index)}/>
            </div>
          </SwiperSlide> 
                )
             }) }


             </Swiper>

             </div>

    </>)
}
export default CartSlider;