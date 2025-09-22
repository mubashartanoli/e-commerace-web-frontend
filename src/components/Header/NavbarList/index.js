import React from 'react';
import Button from '@mui/material/Button';
import { Link ,useLocation,useNavigate} from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { useContext } from "react";
import { MyContext } from '../../../App';
const NavbarList = () => {
    const Navigte=useNavigate();
     const location = useLocation();
        const Context = useContext(MyContext);
        const allSubCatagory = Context.values.allSubCatagory;
     const allCatagory = Context.values.allCatagory;
     const setSubCatagoryId = Context.values.setSubCatagoryId;
     const SubCatagoryId = Context.values.SubCatagoryId;
     const  CatagoryId = Context.values.CatagoryId;
  const setProgress=Context.values.setProgress
const currentPath = location.pathname.toLowerCase();

const gotoHome = () => {
    setProgress(25);
    Navigte('/');
    setProgress(100);
}

    return(
        <>
        <ul className="list list-inline d-flex align-items-center justify-content-end">

        <li className={"list-inline-item" + (location.pathname === '/' ? ' _Active-Sub-Cat-Menu' : '')}>
          <Button className={`navBtn `} onClick={()=>gotoHome()}> Home  </Button> 
              
             </li>

        <li className={`list-inline-item ${ currentPath.includes('/shop/all') && '_Active-Sub-Cat-Menu'}`}>
             <Button  className={`navBtn `} onClick={() => setSubCatagoryId('All')} >  <Link to="/Shop/All">Shop</Link> </Button> 
             
             </li>
{
   allCatagory &&  allCatagory.length>0 && allCatagory.slice(0,4).map((item)=>{
         return(
            <li className={`list-inline-item position-relative ${ CatagoryId===item._id&& '_Active-Sub-Cat-Menu'}`} key={item._id}> 
             <Button className={`navBtn `} onClick={() => setSubCatagoryId('All')}>
             <Link to={`/Shop/${item._id}`}>{item.name} 
             {
allCatagory && allSubCatagory && allCatagory.length>0 && allSubCatagory.length > 0 && allSubCatagory.filter(subItem=> subItem.catagory._id === item._id).length>0 && 
 <span className="pl-10px"><FaAngleDown /></span>
          }
          </Link> </Button>
{
allCatagory && allSubCatagory && allCatagory.length>0 && allSubCatagory.length > 0 && allSubCatagory.filter(subItem=> subItem.catagory._id === item._id).length>0 && 
               <div className='subMenu shadow '>
                 <ul className='ml-0'>
{allCatagory && allSubCatagory && allCatagory.length>0 && allSubCatagory.length > 0 && allSubCatagory.filter(subItem=> subItem.catagory._id === item._id)
            .map((subItem)=>{ 
              
               return(
                  <li className={`list-block ${SubCatagoryId===subItem._id&& '_Active-Sub-Cat-Menu'}`} key={subItem._id}><Button className="subnavBtn" onClick={() => setSubCatagoryId(subItem._id)}>  <Link to={`/Shop/${item._id}`}>{subItem.name}</Link> </Button> </li>  
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
        {/* <li className="list-inline-item position-relative "> <Button className={`navBtn ${ActiveNav==="Man" && "_Active-Btn" }`}onClick={()=>{ setActiveNav("Man")}}> 
             <Link to="/">Man <span className="pl-10px"><FaAngleDown /></span> </Link> </Button>
               <div className='subMenu shadow '>
                <ul className='ml-0'>
                    <li className='list-block'><Button className="subnavBtn">  <Link to="/">CLOTHING</Link> </Button> </li>
                    <li className='list-block'><Button className="subnavBtn">  <Link to="/">FOOTWARE</Link> </Button> </li>
                    <li className='list-block'><Button className="subnavBtn">  <Link to="/">WATCHES</Link> </Button> </li>
                </ul>
               </div>
              </li>

        <li className="list-inline-item position-relative ">
             <Button className={`navBtn ${ActiveNav==="Woman" && "_Active-Btn" }`}onClick={()=>{ setActiveNav('Woman')}}>  <Link to="/">Woman <span><FaAngleDown /></span></Link> </Button>
             
             <div className='subMenu shadow '>
                <ul className='ml-0'>
                <li className='list-block'><Button className="subnavBtn">  <Link to="/">CLOTHING</Link> </Button> </li>
                    <li className='list-block'><Button className="subnavBtn">  <Link to="/">FOOTWARE</Link> </Button> </li>
                    <li className='list-block'><Button className="subnavBtn">  <Link to="/">WATCHES</Link> </Button> </li>
                </ul>
               </div>

              </li> */}


       
        <li className="list-inline-item">
             <Button  className={`navBtn `}>  <Link to="/">Contact Us</Link> </Button> 
             
             </li>
        
          
        </ul>
        </>
    )
}
export default NavbarList;