import React from "react";
// import bannerFive from '../../../images/Man-Banner-five.jpg';
// import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineFullscreen } from "react-icons/ai";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../../../App';
import { useContext } from "react";
import { MdFavorite } from "react-icons/md";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {  fetchDataFromApi, postData } from "../../../utils/api";




const ProductCard=(props)=>{
      const navigate = useNavigate();
    const Context = useContext(MyContext);
    const setProductDetailPopupId=Context.values.setProductDetailPopupId;
    const setShowCart=Context.values.setShowCart;
    const setOpen=Context.values.setOpen;
   const setProgress=Context.values.setProgress;
   const setWhilistData=Context.values.setWhilistData;
   const WhilistData=Context.values.WhilistData;
      const ShowProductDetail=(id)=>{
        setShowCart(true);
        setProductDetailPopupId(id);
      }


        const GotoProductDetailPage=(id)=>{
navigate(`/ProductDetail/${id}`)
        }


        const RemoveToWhilist=(id)=>{
setProgress(25)
          const userId=localStorage.getItem('UserId');
          if(userId==='null' || userId===undefined || userId===''){
            navigate('/LoginPage')
            setProgress(100)
            return
          }

  postData('/api/Whilist/delete',{userId:userId,product:id}).then((res)=>{
  
    if(res.status===false){
  setOpen({
       status:true,
       color:'#fa3e3e',
       data:res.message
     })
     setProgress(100)
     return
    }
fetchDataFromApi(`/api/Whilist/get/${userId}`).then((respon)=>{
  setWhilistData(respon.Product)
    setOpen({
       status:true,
       color:'#7958b6',
       data:res.message
     })
      setProgress(100)
}).catch((err)=>{
    console.log(err)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Network Err In Fetching Whilist"
     })
})
  
  }).catch((err)=>{
    setProgress(100)
    console.log(err)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Product Can't added to Whilist Please Try Again"
     })
  })
        }
        const AddToWhilist=(id)=>{
setProgress(25)
          const userId=localStorage.getItem('UserId');
          if(userId==='null' || userId===undefined || userId===''){
            navigate('/LoginPage')
            setProgress(100)
            return
          }

  postData('/api/Whilist/add',{userId:userId,product:id}).then((res)=>{
  
    if(res.status===false){
  setOpen({
       status:true,
       color:'#fa3e3e',
       data:res.message
     })
     setProgress(100)
     return
    }
fetchDataFromApi(`/api/Whilist/get/${userId}`).then((response)=>{
  setWhilistData(response.Product)

    setOpen({
       status:true, 
       color:'#7958b6',
       data:res.message
     })
      setProgress(100)
}).catch((err)=>{
    console.log(err)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Network Err In Fetching Whilist"
     })
})
  
  }).catch((err)=>{
    setProgress(100)
    console.log(err)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Product Can't added to Whilist Please Try Again"
     })
  })
        }
        

    return(
        <>
 <div className="w-100 p-1">     
<div className={`product_card w-100 overflow-hidden  `}>
    <div className="image-Warpper position-relative">

<div >

  
     <Swiper 
           pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
   loop= { props.data!==undefined && props.data.image?.length > 1}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}

        spaceBetween={15}
      >
{props.data!==undefined && props.data.image?.map((image, index) => (

         <SwiperSlide key={index}>
    <div className="item w-100"  onClick={() => { GotoProductDetailPage(props.data._id) }} >
      <img src={image} alt={`Banner ${index}`} className="w-100"/>
    </div>
  </SwiperSlide> 
  

))}
      

         


        
             
         
     
    
      </Swiper>
</div>
    {/* <img src={bannerFive} alt="banner" className='w-100' /> */}
    <div className='cart-hover-div'>
    <div className='full-screen shadow d-flex align-items-center justify-content-center cursor'
    onClick={()=>{ShowProductDetail(props.data._id)}} ><AiOutlineFullscreen /></div>
    {
      WhilistData && WhilistData.find((item)=>item.product._id===props.data._id) ?
      <div className='favorite-cart shadow d-flex align-items-center justify-content-center cursor'
      onClick={()=>{RemoveToWhilist(props.data._id)}} 
       ><MdFavorite />
</div>
      :
      
    <div className='favorite-cart shadow d-flex align-items-center justify-content-center cursor'
    onClick={()=>{AddToWhilist(props.data._id)}}><MdFavoriteBorder /></div>
    }
    </div>
    </div>
    
    <div className='cart_info_div'  onClick={()=>{GotoProductDetailPage(props.data._id)}}>
    <h5 className='product_title '>{props.data===undefined ? 'Product Title' : props.data.name}</h5>
   {
    props.data===undefined ? 
    <p className='in-stock  '>Null</p>
     : props.data.countInStock<=0?
   <p className='Out-stock  '>Out of Stock</p>
   :  <p className='in-stock  '>IN STOCK</p>
   
   }
  
    <div className='rating'>
    <Stack spacing={5}> <Rating name="half-rating-read" defaultValue={props.data===undefined ? '0' : props.data.rating}  readOnly /> </Stack>
    </div>
    <div className='product_price w-100 '>
        <div className='old-price'>$ {props.data===undefined ? '0' : props.data.price} </div>
        <div className='new-price'> $ {props.data===undefined ? '0' : props.data.discount}</div>
    </div>
    {/* <div className='add-to-cart  w-100 d-flex align-items-center justify-content-center mt-3'>
        <Button  >  <Link className="add-to-cart-button-link" to="/ProductDetail/:id">Add to cart</Link> </Button>
    </div> */}
    </div>

</div> 

</div>  
   
        </>
    )
}

export default ProductCard;