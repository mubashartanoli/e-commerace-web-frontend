import logo from '../../images/wolf.png'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CountryDropdown from '../Header/CountryDropdown';
import AllCatagoryBtn  from '../Header/AllCatagoryBtn';
import { MyContext } from '../../App';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
const CatSideBar=()=>{
    const Context = useContext(MyContext);
    const  setShowSidebar  = Context.values.setShowSidebar;
    const  ShowSideBar  = Context.values.ShowSideBar;
  const allCatagory = Context.values.allCatagory;
  const navigate = useNavigate();

  const gotoShop=(id)=>{
    navigate(`/Shop/${id}`);
    setShowSidebar(!ShowSideBar)
  }
    return(
<>
<div className={`Cat-sidebar ${ShowSideBar===true ? 'Show' : 'Hide'}`}>
    
<div className=" d-flex align-items-center justify-content-between">
  <div className="logo-Wapper">
    <img  src={logo} alt="" />
    <span>Wolf</span>
  </div>
  <div>
          <IconButton className='Icon-Btn' onClick={() => setShowSidebar(false)} aria-label="delete" size="small">
       <CloseIcon />
      </IconButton>

</div></div>
<div className='scroll'>
<div className='part2 w-100 d-flex align-items-center justify-content-center mt-4'>
<CountryDropdown />
</div>
<div className=' mt-4   '>
<AllCatagoryBtn/>
</div>

<div className='Side_Nav mt-4'>
<h3>Site Navigation</h3>

<ul>
    <li key={1} onClick={() => {navigate('/')}}>Home</li>
    <li key={2} onClick={() => {gotoShop('All')}}>Shop</li>

  {
     allCatagory &&  allCatagory.length>0 && allCatagory.slice(0,4).map((item)=>{
       return <li key={item._id} onClick={() => {gotoShop(item._id)}}>{item.name}</li>
     })
  }
</ul>
</div>
</div></div>
</>
    ) 
}
export default CatSideBar;