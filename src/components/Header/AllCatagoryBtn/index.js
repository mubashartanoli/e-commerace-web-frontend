import Button from '@mui/material/Button';
import { FiMenu } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { useContext } from "react";
import { MyContext } from '../../../App';

const AllCatagoryBtn = () => {
           const Context = useContext(MyContext);
            const allSubCatagory = Context.values.allSubCatagory;
         const allCatagory = Context.values.allCatagory;
    const[showDiv , setShowDiv]= useState(false)

    
    return(
        <>
        <div className="catWrapper position-relative">
        <Button className='catagoryBtn d-flex flex-column' onClick={()=> setShowDiv(!showDiv) }>
        
            <div className='d-flex align-items-start productDiv '> 
            <span ><FiMenu className='menuIcon' /></span>
            <span>ALL CATAGORIES</span>
             <span className='ml-auto'><FaAngleDown /></span>
            </div>
        </Button>
        
        <div className={`sideBarNav  ${showDiv===true ? 'open' :''}`}>
            
<ul className='catagoryList'>
    {
      allCatagory && allCatagory.length>0 && allCatagory.map((item)=>{
            return(
<li className="list-inline-item" key={item._id}><Button className="navBtn">  <Link className='_ancher' to={`/Shop/${item._id}`}>
{item.name} </Link>
{
  allCatagory && allSubCatagory && allCatagory.length>0 && allSubCatagory.length > 0 && allSubCatagory.filter(subItem=> subItem.catagory._id === item._id).length>0 && 
<FaAngleRight />
}
  </Button>

{
   allCatagory && allSubCatagory &&  allCatagory.length>0 && allSubCatagory.length > 0 && allSubCatagory.filter(subItem=> subItem.catagory._id === item._id).length>0 && 
<div className="sideBarSubMenu">
    <ul >
  {
   allCatagory && allSubCatagory &&  allCatagory.length>0 && allSubCatagory.length > 0 && allSubCatagory.filter(subItem=> subItem.catagory._id === item._id)
    .map((subitem)=>{
        return(
 <li className="list-inline-item" key={subitem._id}> <Button className="navBtn">  <Link className='_ancher' to="/">{subitem.name}</Link> </Button> </li>
        )
    })
  }      
       

        </ul>
        </div>
}


</li>
            )
        })
    }
{/* <li className="list-inline-item"><Button className="navBtn">  <Link className='_ancher' to="/">Man  </Link> <FaAngleRight /></Button>

<div className="sideBarSubMenu">
    <ul >
        <li className="list-inline-item"> <Button className="navBtn">  <Link className='_ancher' to="/">Shirts</Link> </Button> </li>
        <li className="list-inline-item"> <Button className="navBtn">  <Link className='_ancher' to="/">Pants</Link> </Button> </li>
        <li className="list-inline-item"> <Button className="navBtn">  <Link className='_ancher' to="/">Shoes</Link> </Button> </li>
        <li className="list-inline-item"> <Button className="navBtn">  <Link className='_ancher'  to="/">Accessories</Link> </Button> </li>  
        </ul>
        </div>

</li> */}

     

            </ul>

            <div className='sideBarNavBottom' >
            <Button className="navBtn">  <Link className='_ancher' to="/">Account</Link> </Button>
            <Button className="navBtn">  <Link className='_ancher' to="/">Blog</Link> </Button>
            <Button className="navBtn">  <Link className='_ancher' to="/">Contact Us</Link> </Button>
            </div>
        </div>

        </div>
        </>
    )
}
export default AllCatagoryBtn;