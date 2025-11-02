import ProductCard from '../SectionDiv/ProductCard';
import { useContext, useEffect } from 'react';
import {MyContext} from '../../App'
import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';
const WhilistComp=()=>{
    const navigate=useNavigate();
   const Context=useContext(MyContext)
  const WhilistData=Context.values.WhilistData;
  const setWhilistData=Context.values.setWhilistData;
 
   const setProgress=Context.values.setProgress;
  useEffect(()=>{
    if(WhilistData!==null || WhilistData!==undefined || WhilistData.length>0){
        
        return;
    }
    const userId=localStorage.getItem('UserId');
    if(userId==='null' || userId===undefined || userId===''){
       navigate('/LoginPage')
            setProgress(100)
            return;
    }
    setProgress(25)
fetchDataFromApi(`/api/Whilist/get/${userId}`).then((respon)=>{
  setWhilistData(respon.Product)

      setProgress(100)
}).catch((err)=>{
    console.log(err)
  setProgress(100)
})
  }
  ,[WhilistData,setWhilistData,navigate,setProgress])
  
    return(
        <>
        <div className="container WhilistComp mt-4 mb-4 ">
 <div className='w-100 d-flex align-items-center position-relative'>
             <div>
                <h3 className='info'>Whilist Products</h3>
               
             </div>
             
            
            </div>

<div className="WhilistCompProducts mt-4 ">
    {WhilistData && WhilistData.length>0 ? WhilistData.map((item,index)=>{
        
        return(
            <div className='new-product-card' key={index}> <ProductCard data={item.product} /> </div>
        )
    }): <div><h1>No Products Found</h1></div>}
</div>

        </div>

  
    



        
              
            
        </>
    )
}
export default WhilistComp;