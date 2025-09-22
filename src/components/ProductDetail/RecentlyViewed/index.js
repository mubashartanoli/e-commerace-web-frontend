
import ProductCard from '../../SectionDiv/ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useContext } from "react";
import { MyContext } from '../../../App';

const RecentlyViewed=(props)=>{
        const Context = useContext(MyContext);
const ShowCartInMobile = Context.values.ShowCartInMobile;
const mobileResize = Context.values.mobileResize;
// console.log(props.data)
    return(
        <>
{
  props.data && props.data?.length>0 &&
  <div className='ProductDetailRelatedProductDiv container mt-5  pt-5 pb-2 bg-white'>
      <h3>RECENTLY VIEWED PRODUCTS </h3>
      <div className='ShowRelatedProduct w-100 mt-4 '>
      <Swiper
        slidesPerView={ShowCartInMobile}
        spaceBetween={mobileResize===true? 5 :0}

       navigation={mobileResize===true? true :false}
        modules={[Navigation]} 
        className="mySwiper "
      >
       {props.data && props.data?.length>0 && props.data?.map((item,index)=>{ 
        
        return(
       <SwiperSlide key={index}>  <ProductCard data={item.productId} />  </SwiperSlide>
       )}) }
        
    

    
      </Swiper>
      </div>
    
     </div>
}

        </>
    )
}
export default RecentlyViewed;