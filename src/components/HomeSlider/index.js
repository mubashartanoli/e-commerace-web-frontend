import React from "react";

import Banner from '../../images/banner-1.jpg';
// import Banner from '../../images/Man-Banner-five.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';
import { useContext } from "react";
import { MyContext } from '../../App';
const HomeSlider = () => {
const Context = useContext(MyContext);
const mobileResize = Context.values.mobileResize;

    return (
        <div className="homeBannerSection container mt-5">

             <Swiper 
             navigation={mobileResize===true? true :false} 
           
             modules={[Navigation,Autoplay]}
             loop= {true}
             autoplay= {{
    delay: 3000, // Delay between slides in milliseconds (e.g., 3 seconds)
    disableOnInteraction: false, // Autoplay continues even after user interaction
    pauseOnMouseEnter: true, // Autoplay pauses when mouse hovers over the slider
  }}
             spaceBetween={15}
          
             className="mySwiper">

             <SwiperSlide>
              <div className="item ">
             <img src={Banner} alt="Banner" className="w-100"/>
      </div>
      </SwiperSlide>

             <SwiperSlide>
              <div className="item">
             <img src={Banner} alt="Banner" className="w-Screen"/>
      </div>
      </SwiperSlide>

             <SwiperSlide>
              <div className="item">
             <img src={Banner} alt="Banner" className="w-Screen"/>
      </div>
      </SwiperSlide>
             
         
     
    
      </Swiper>
        </div>
    );
}

export default HomeSlider;