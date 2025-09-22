
import ProductCard from '../../SectionDiv/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useContext } from "react";
import { MyContext } from '../../../App';

const RelatedProduct=(props)=>{
      const Context = useContext(MyContext);
const ShowCartInMobile = Context.values.ShowCartInMobile;
const mobileResize = Context.values.mobileResize;
    return(
        <>
{
   props.data !== undefined && props.data.length > 0 &&
   <div className='ProductDetailRelatedProductDiv container mt-5 pb-2  pt-5 bg-white'>
      <h3>RELATED PRODUCTS </h3>
      <div className='ShowRelatedProduct w-100 mt-4 '>
      <Swiper
        slidesPerView={ShowCartInMobile}
        spaceBetween={mobileResize===true? 5 :0}
        
       navigation={mobileResize===true? true :false}
        modules={[Navigation]} 
        className="mySwiper "
      >
       {
        props.data !== undefined && props.data.length > 0 && props.data.map((product, index)=>{
          return(
           <SwiperSlide key={product._id}>  <ProductCard data={product}/>  </SwiperSlide>
          )
        })
       }  
        

    
      </Swiper>

      </div>
    
     </div>
}


        </>
    )
}
export default RelatedProduct