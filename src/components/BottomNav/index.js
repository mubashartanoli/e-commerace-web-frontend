import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation,useNavigate } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useContext ,useState} from "react";
import { MyContext } from '../../App';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IoLogOut } from "react-icons/io5";


const BottomNav =()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const Context=useContext(MyContext);
        const setShowFilterProduct=Context.values.setShowFilterProduct
 const  ShowSideBar  = Context.values.ShowSideBar;
  const  setShowSidebar  = Context.values.setShowSidebar;
  const  setProgress  = Context.values.setProgress;
const setOpenS= Context.values.setsearchProductInPhone;
const OpenS= Context.values.searchProductInPhone;

  const [show,setshow]=useState(false);
const ShowSubMenu=()=>{
    setshow(!show)
}
const IoLogOutTo=()=>{
   localStorage.setItem('UserId','');
localStorage.setItem('Token','');
navigate('/LoginPage')
setshow(false);
}
  const searchP=()=>{
  setProgress(30); 
    setOpenS(!OpenS)
    setProgress(100); 
  }
  const gotoStore=()=>{
  
    setProgress(30); navigate('/Shop/All'); setProgress(100);
    
  }
  const gotoHome=()=>{

    setProgress(30);navigate('/');setProgress(100);

  }
  const gotoSideBar=()=>{
 
    setProgress(30); setShowSidebar(!ShowSideBar); setProgress(100);
 
  }
  const gotoFilter=()=>{

    setProgress(30); setShowFilterProduct(true); setProgress(100);
    
  }
      const currentPath = location.pathname.toLowerCase();

    return(
        <>

      <div className="container-fluid Bottom_Nav ">
       <ul>
        <li>
            {location.pathname === '/'?
           (<div className="menu_item" onClick={gotoStore}>
            
                  <StorefrontIcon />
               
            
            <h6>Store</h6>
           </div>):
 (<div className="menu_item" onClick={gotoHome}>
            <HomeFilledIcon />
            <h6>Home</h6>
           </div>)
            }
        </li>
        <li>
            {currentPath.includes('/shop')?(     <div className="menu_item"onClick={gotoFilter} >
            <FilterListIcon />
            <h6>Filter</h6>
           </div>):
           currentPath.includes('/productdetail')?(
            <div className="menu_item" onClick={gotoStore}>
            
                  <StorefrontIcon />
               
            
            <h6>Store</h6>
           </div>
           ):
           (
             
            <div className="menu_item" onClick={searchP}>
            <SearchIcon />
            <h6>Search</h6>
           </div>
           )}
      
        </li>
        {
           location.pathname === '/Cart' ||location.pathname === '/Orders'||location.pathname === '/MyAccount'
           ||location.pathname === '/Whilist'||location.pathname === '/ProceedToCheckOut'?'':
 <li>
            {
           
            location.pathname === '/'? (
                   <div className="menu_item" onClick={ShowSubMenu}>
            <PermIdentityIcon />
            <h6>Account</h6>
           </div>
            ):(
                 <div className="menu_item" onClick={searchP}>
            <SearchIcon />
            <h6>Search</h6>
           </div>
            )}
        
        </li>
        }
       
        <li>
            {location.pathname === '/'?(<div className="menu_item" onClick={gotoSideBar }>
            <MenuIcon />
            <h6>Categories</h6>
           </div>):(<div className="menu_item" onClick={ShowSubMenu}>
            <PermIdentityIcon />
            <h6>Account</h6>
           </div>) }
           
        </li>
       </ul>
        </div>  
        <div className={`Account-list-Side-Bar ${show===true && 'Account-list-Side-Bar-show'}`}>
<ul>
    <li onClick={()=>{navigate('/MyAccount'); setshow(false)}} ><AccountCircleIcon/> Account page</li>
    <li onClick={()=>{navigate('/Orders'); setshow(false)}}><BookOnlineIcon/> My Orders</li>
    <li onClick={()=>{navigate('/Whilist'); setshow(false)}}><FavoriteIcon/> Whilist</li>
    <li onClick={()=>{IoLogOutTo()}}><IoLogOut /> LogOut</li>
</ul>
        </div>
        </>
    )
}
export default BottomNav;