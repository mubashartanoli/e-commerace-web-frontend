import Logo from '../../../images/wolf.png'
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderCarts from '../HeaderCarts';
import { MyContext } from '../../../App';
import { useContext } from "react";


const ResponsiveHeader=()=>{

  const navigate = useNavigate();
  const Context = useContext(MyContext);
  const  setShowSidebar  = Context.values.setShowSidebar;
 const  ShowSideBar  = Context.values.ShowSideBar;
    return(
        <>
        <div className='container-fluid  w-100  Responsive-header_Show '>
<div className=" d-flex justify-content-between align-items-center w-100"> 
    <div className='col-sm-1 '>
           <IconButton onClick={() => setShowSidebar(!ShowSideBar)} aria-label="delete " className='Responsive_header_MenuBtn'>
        <MenuIcon className='Responsive_header_MenuIcon'/>
      </IconButton>  
    </div>
    <div className="Res-Head-Logo d-flex align-items-center justify-content-center col-sm-6" onClick={() => {navigate('/')}}>
        <div className='Wapper d-flex align-items-center'><img height={'100%'} src={Logo} alt="Logo" /></div>

    </div>
 

  <div className=" part3 h-100 d-flex align-items-center  col-sm-2">
    
    <HeaderCarts/>     
    
  
    </div>
    </div>
</div>
        </>
    )
}
export default ResponsiveHeader;