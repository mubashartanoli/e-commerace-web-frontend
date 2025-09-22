import React from 'react';
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import bannerOne from '../../../images/Man-Banner-one.jpg';
import { useState } from 'react';
import {fetchDataFromApi} from '../../../utils/api';
import { useContext } from "react";
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';



const ShopPageLeft=()=>{
    const navigate=useNavigate();
 const Context=useContext(MyContext);
        const Rowvalue=Context.values.Rowvalue;
          const setProductData=Context.values.setProductData;
          const setstockCheck=Context.values.setstockCheck;
          const stockCheck=Context.values.stockCheck;
             const setProgress=Context.values.setProgress
             const setFilterPriceValue=Context.values.setFilterPriceValue
             const FilterPriceValue=Context.values.FilterPriceValue
               const allCatagory = Context.values.allCatagory;
               const setCatagoryId = Context.values.setCatagoryId;
               const CatagoryId = Context.values.CatagoryId;
               const  AllBrand = Context.values.AllBrand;
               const  BrandId = Context.values.BrandId;
               const  setBrandId = Context.values.setBrandId;
               const  setSubCatagoryId = Context.values.setSubCatagoryId;
               const  SubCatagoryId = Context.values.SubCatagoryId;
               const setPageValue=Context.values.setPageValue
      const [PriceFilterLoading, setPriceFilterLoading] = useState(false);

const CatagoryOnChange=(id)=>{
    if(CatagoryId!==id){
        setCatagoryId(id);
        setSubCatagoryId('All')
        navigate(`/Shop/${id}`)
 }else{
    setCatagoryId('All')
    setSubCatagoryId('All')
    navigate(`/Shop/All`)
 }


}

const ProductFilterByBrand=(option)=>{
    setProgress(25);
    console.log('SubCatagoryId',SubCatagoryId)
if(BrandId!==option){
    setBrandId(option)

fetchDataFromApi(`/api/product/get/products/all?stock=${stockCheck}&catagory=${CatagoryId}&perPage=${Rowvalue}&maxPrice=${FilterPriceValue[1]}&minPrice=${FilterPriceValue[0]}&Brand=${option}&SubCatagory=${SubCatagoryId}`).then((res)=>{
    setProductData(res);
    setPageValue(res.page)
    setProgress(100);
}).catch((error)=>{
    setProgress(100);
    console.error('Error fetching products:', error);
});

}else{
    setBrandId('All')
    fetchDataFromApi(`/api/product/get/products/all?stock=${stockCheck}&catagory=${CatagoryId}&perPage=${Rowvalue}&maxPrice=${FilterPriceValue[1]}&minPrice=${FilterPriceValue[0]}&Brand=All`).then((res)=>{
    setProductData(res);
    setProgress(100);
}).catch((error)=>{
    setProgress(100);
    console.error('Error fetching products:', error);
});
}

}
 const handleStockOnChange=(Option)=>{
    setProgress(25);
    if(stockCheck!==Option){
setstockCheck(Option)
fetchDataFromApi(`/api/product/get/products/all?stock=${Option}&catagory=${CatagoryId}&perPage=${Rowvalue}&maxPrice=${FilterPriceValue[1]}&minPrice=${FilterPriceValue[0]}&Brand=${BrandId}&SubCatagory=${SubCatagoryId}`).then((res)=>{
    setProductData(res);
    setPageValue(res.page)
    setProgress(100);
}).catch((error)=>{
    setProgress(100);
    console.error('Error fetching products:', error);
});
    }else{
        setstockCheck(null);
fetchDataFromApi(`/api/product/get/products/all?stock=${null}&catagory=${CatagoryId}&perPage=${Rowvalue}&maxPrice=${FilterPriceValue[1]}&minPrice=${FilterPriceValue[0]}&Brand=${BrandId}`).then((res)=>{
    setProductData(res);
    setProgress(100);
}).catch((error)=>{
    setProgress(100);
    console.error('Error fetching products:', error);
});
    }


 } 

 const FilterProductByPrice=(value)=>{
     setFilterPriceValue(value)
     setProgress(25);
  setPriceFilterLoading(true);
fetchDataFromApi(`/api/product/get/products/all?perPage=${Rowvalue}&maxPrice=${value[1]}&minPrice=${value[0]}&catagory=${CatagoryId}&stock=${stockCheck}&Brand=${BrandId}&SubCatagory=${SubCatagoryId}`)
.then((res)=>{
    setPriceFilterLoading(false);
    setProductData(res);
    setPageValue(res.page)
    setProgress(100);



}).catch((error)=>{
    console.error('Error fetching products:', error);
   
})

 }
    return(<>
    {/* porduct catagory start */}
    <div className="ShopPageLeftCategories ">
    <h4 className='_Heading' >Product Categories</h4>
   <div className="ShopPageLeftCategoriesList mt-3">
        <ul >
<li className="list-group-item" key={'All'}><Button className='Left-Shop_Page-Btn '> 
    <FormControlLabel control={<Checkbox   
    checked={CatagoryId=== 'All'}
    onChange={()=>CatagoryOnChange('All')}
    />} 
    label="All" className='check-Box' /></Button></li>
{
    allCatagory && allCatagory?.length>0 && allCatagory.map((cat)=>{
return(
<li className="list-group-item" key={cat._id}><Button className='Left-Shop_Page-Btn ' >
     <FormControlLabel control={<Checkbox 
     checked={CatagoryId===cat._id}
     onChange={()=>CatagoryOnChange(cat._id)}
     />} label={cat.name}  className='check-Box'/>
     </Button></li>
    )})
}


        </ul>
    </div>
    </div>
 {/* porduct catagory end  */}
 {/* filterPriceStart */}
   <div className='FilterPriceDiv mt-5 w-100 '>
   <h4 className='_Heading' >Product Categories</h4>
    <RangeSlider className=' mt-4' 
    disabled={PriceFilterLoading===true}
    value={FilterPriceValue}  onInput={(value)=>{FilterProductByPrice(value); }} min={1} max={10000} step={5} />
    
    <div className='SliderRange cursor d-flex justify-content-between mt-3 '>
        <span>From: <strong className=' text-success'>Rs: 
            <input className='FilterPriceOnChangeInput'  disabled={PriceFilterLoading===true}
            type="text" onChange={(e)=>{
                
                setFilterPriceValue([e.target.value, FilterPriceValue[1]])
               
            }} Value={FilterPriceValue[0]} />
            </strong></span>
        <span>From: <strong className=' text-success'>Rs: 
            <input className='FilterPriceOnChangeInput' disabled={PriceFilterLoading===true}
             type="text" onChange={(e)=>{
            
                setFilterPriceValue([FilterPriceValue[0], e.target.value])
             
             }} Value={FilterPriceValue[1]} />
            </strong></span>
    </div>
   </div>

 {/* filterPriceEnd */} 
  {/* ProductStatus start  */}
     <div className="ProductStatus mt-5"> 
    <h4 className='_Heading' >Product Status</h4>
    <div className="Product-Status-List mt-3">
        <ul className=' p-0'>
<li className="list-group-item"><Button className='Left-Shop_Page-Btn '> <FormControlLabel control={<Checkbox 
checked={stockCheck==='In-Stock'}
onChange={()=>handleStockOnChange('In-Stock')}
/>} label="In-Stock" className='check-Box' /></Button></li> 

<li className="list-group-item"><Button className='Left-Shop_Page-Btn '> <FormControlLabel control={<Checkbox  
checked={stockCheck==='Out-of-Stock'}
onChange={()=>handleStockOnChange('Out-of-Stock')}
/>} label="Out-of-Stock" className='check-Box' /></Button></li>   
</ul></div>
     </div>
  {/* ProductStatus end  */}
  {/* brands start  */}
  <div className="BrandStatus mt-5">
    <h4 className='_Heading' >Brands</h4>
    <div className="Brand-Status-List mt-3">
        <ul className=' p-0'>
<li className="list-group-item" key={'All'}>
    <Button className='Left-Shop_Page-Btn '> 
    <FormControlLabel control={<Checkbox 
    checked={BrandId==='All'}
    onChange={()=>ProductFilterByBrand('All')}
    />} label="All" className='check-Box' />
    </Button></li>  

{
  AllBrand?.length>0 && AllBrand?.map((brand)=>{
        return(

<li className="list-group-item" key={brand._id}>
    <Button className='Left-Shop_Page-Btn '> 
    <FormControlLabel control={<Checkbox 
    checked={BrandId===brand._id}
    onChange={()=>ProductFilterByBrand(brand._id)} 
    />} label={brand.name} className='check-Box' />
    </Button></li>   
        )
     })
}
  
</ul></div>
     </div>

  {/* brands end  */}
  <div className='sidebar-product-banner w-100 mt-5 mb-5 sectionbnnerimgdiv '>
            <img className='sidebar-product-banner-img w-100' src={bannerOne} alt="banner" />
            </div> 
    </>)

}
export default ShopPageLeft;