import React from 'react';
import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';
import { useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from 'react';
import { MyContext } from '../../../App';
import { fetchDataFromApi } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const Searchheader= () => {
  const navigate=useNavigate()
    const Context=useContext(MyContext);
   const setProgress=Context.values.setProgress;

  const [loading,setLoading]=useState(false);
  const [SearchData,setSearchData]=useState([]);
  const [SearchDataDiv,setSearchDataDiv]=useState(false);
     const setOpen=Context.values.setOpen;

const SearchInput=useRef(null)
const search=()=>{
  setLoading(true);
 setProgress(25);
 if(SearchInput.current.value===''){
    setOpen({
      status:true,
      color:'#fa3e3e',
      data:'Search field is empty...'
    })
    setLoading(false);
    setProgress(100);
    return
 }
 

  fetchDataFromApi(`/api/product/search/?q=${SearchInput.current.value}`).then((res)=>{
    console.log(res)
    if(res.sucess===false){
          setOpen({
      status:true,
      color:'#fa3e3e',
      data:res.message
    })
     setLoading(false);
    setProgress(100);
    return
    }
    setSearchData(res.data)
    setSearchDataDiv(true);
      setLoading(false);
    setProgress(100);
  }).catch((err)=>{
  console.log(err)
      setOpen({
      status:true,
      color:'#fa3e3e',
      data:'Network err Please Try Again...'
    })
    setLoading(false);
    setProgress(100);
 })
}
const Goto=(id)=>{
setProgress(25);
setSearchDataDiv(false);
SearchInput.current.value='';
navigate(`/ProductDetail/${id}`)
setProgress(100);
}
  return (
    <>
        <div className="header-search d-flex align-items-center">
      <input type="text" placeholder="Search for products..."  ref={SearchInput}/>
        <Button className='search-btn' disabled={loading} onClick={()=>{search()}}>
          {
            loading?<CircularProgress/>:
        <CiSearch className="search-icon"/>
          }
        </Button>
        {
          SearchDataDiv&&
                  <div className='Show-search-product-wapper w-100'>
              <div>
 <ul>
  {
    SearchData?.length>0 && SearchData.map((item)=>{
      return(
 <li onClick={()=>{Goto(item._id)}} className='Show-search-product' key={item._id}>
    <div className='image-Wapper'>
      <div className='image'>
<img width={'100%'} src={item.image[0]} alt="Product Img" />
      </div>
    </div>
    <div className='tittle-Wapper'>
      <h4>{item.name}</h4>
      <h5>{item.discription}</h5>
    </div>
  </li>
      )
    })
  }
 
  
 
  {/* <li className='Show-search-product'>
    <div className='search-product-Not-Found w-100 h-100 '>

<h2>No Product Found</h2>
    </div>
  </li> */}
  
 </ul>
</div>
    </div>
        }
    
    </div>

    </>

  );
}

export default Searchheader;