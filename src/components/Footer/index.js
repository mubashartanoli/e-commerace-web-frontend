// import FooterIconBox from './FooterIconBox'
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SiTiktok } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useContext } from "react";
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';



const Footer=()=>{
    const navigate=useNavigate(); 
        const Context = useContext(MyContext);
             const allCatagory = Context.values.allCatagory; 
                const allSubCatagory = Context.values.allSubCatagory;
                const setSubCatagoryId = Context.values.setSubCatagoryId;
    return(
        <>
        
        {/* <FooterIconBox/> */}
           
           <div className='downFooter container mt-5 pt-5 mb-5 pb-5'>
             <div className='Footer-Grid'>
{
    allCatagory && allCatagory?.length>0 && allCatagory.map((item)=>{
        return(
                <div className="col Footer-Grid-List" key={item._id}>
                    <h2 onClick={()=>{navigate(`/Shop/${item._id}`)}}>{item.name}</h2>
     <ul className='downFooterList'>
      {  allCatagory&& allSubCatagory&& allCatagory.length>0 &&allSubCatagory.length>0 && allSubCatagory.filter(subItem=> subItem.catagory._id === item._id).map((subItem)=>{
            return(

                <li key={subItem._id} onClick={()=>{navigate(`/Shop/${item._id} `); setSubCatagoryId(subItem._id) }}>{subItem.name}</li>

            )
        })
    }
    </ul>
                   
                 
                </div>
        )
    })
}

                

          

                <div className="col Footer-Grid-List">
                    <h2>Contacts</h2>
                    <ul className='downFooterList'>
                        <li><Link to='#'>Contact on Wattsapp</Link></li>
                        <li><Link to='#'>Contact on Massenger</Link></li>
                        <li><Link to='#'>Folow as on Tiktok</Link></li>
                        <li><Link to='#'>Folow as on Instagram</Link></li>
                        <li><Link to='#'>Folow as on Twitter</Link></li>
                       
                    </ul>
                </div>

             </div>
           </div>

           <div className='downFooterBottom container mt-5 pt-5 pb-5 d-flex align-items-center justify-content-between '>
              <div className='downFooterBottomInfo'>Copyright 2025 © Bacola React Theme. All rights reserved. Powered by KlbTheme.</div>
              <div className=' d-flex align-items-center justify-content-center '>
                <Button> <SiTiktok className='_FOOTERICON' /></Button> 
              <Button>   <FaFacebookF className='_FOOTERICON'/></Button>
              <Button>   <FaInstagram className='_FOOTERICON'/></Button> 
              </div>
             </div>
        </>
    )
}

export default Footer;