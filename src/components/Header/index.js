import Logo from '../../images/wolf.png'
import {Link,useNavigate} from 'react-router-dom';
import CountryDropdown from './CountryDropdown';
import Searchheader from './Searchheader';
import HeaderCarts from './HeaderCarts';
import NavbarList from './NavbarList';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import AllCatagoryBtn from './AllCatagoryBtn';
import ResponsiveHeader from './responsiveHeader';
import { useContext } from "react";
import { MyContext } from '../../App';
import BottomNav from "../BottomNav";
// import { useState } from 'react';


const Header= ()=>{

const navigate=useNavigate()
const Context = useContext(MyContext);
  const  ShowSideBar  = Context.values.ShowSideBar;
  const  islogin  = Context.values.islogin;

return(
<>
{ShowSideBar===false &&  
<aside>
    {/* topdstrep start */}
<div className="top-strip bg-purple">
<div className="container"> 
<p>Due to the <b>COVID 19</b>  epidemic, orders may be processed with a slight delay</p>
</div>
</div>
{/* topdstrep end */}
</aside>
}
<header>
    <BottomNav/>
<div className="headWarper">


{/* header start */}
<div className="header Responsiv_nav_Tablet">
<div className="container Responsiv_nav_Tablet">
<div className="row">
    <div className="logo_App d-flex align-items-center justify-content-start col-sm-2" onClick={() => navigate('/')}>
        <div className='logoWarpper d-flex align-items-center '><img src={Logo} alt="Logo" /></div>
           <span> wolf</span>
    </div>
    {/* part2 start */}
    <div className='col-sm-8  d-flex align-items-center part2'>
        <div className='countryDropdownContainer d-flex align-items-center justify-content-center'>
            {
                Context.CountryList?.length !== 0 && <CountryDropdown/>
            }
        </div>

    <Searchheader/>
    </div>
    {/* part2 end */}
    {/* part3 start */}
    <div className=" part3  d-flex align-items-center col-sm-2">
    {
   islogin!==true ? <Button className='SIGNINBTN'><Link to={'/LoginPage'}> SIGN IN </Link></Button>:<Button className='ACCOIUNTbTN'><Link > <FiUser className='_icon'/> </Link></Button>
    

    }

    {/* <Button className='SIGNINBTN'><Link to={'/LoginPage'}> SIGN IN </Link></Button>
        <Button className='ACCOIUNTbTN'><Link to={'/LoginPage'}> <FiUser className='_icon'/> </Link></Button> 
*/}
    <HeaderCarts/>     
    
    {/* part3 end */}
    </div>
</div>
</div>


</div>

{/* header end */}

{/* nav start */}
<nav className='Responsiv_nav_Tablet'>
<div className="container Responsiv_nav_Tablet">
<div className="row">
{/* navPart1 start */}
<div className="navPart1 col-sm-3 ">
        <AllCatagoryBtn/>              
</div>
{/* navPart1 end */}
    
{/* navPart2 start */}
<div className="navPart2 col-sm-9">
<NavbarList/>
</div>
{/* navPart2 end */}

</div>
</div>
</nav>
{/* nav end */}

<ResponsiveHeader  />


</div>

</header>
</>

)
}

export default Header;