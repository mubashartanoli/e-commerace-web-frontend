import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { CiSearch } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { useState ,useEffect } from 'react';
import { useContext } from "react";
import { MyContext } from '../../../App';



const CountryDropdown= () =>{
 
    const Context = useContext(MyContext);
const cities=Context.values.CitiesList;
const setselectedCityLocation =Context.values.setselectedCityLocation;
const selectedCityLocation =Context.values.selectedCityLocation;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const showDrop=()=>{
        setIsOpenModal(true);
    }
    const closeDrop=()=>{
        setIsOpenModal(false);
    }
  
  const [selectedTab, setSelectedTab] = useState(null);
  const [CitiesList , setCitiesList] = useState([]);
  // const [selectedCountry ,setselectedCountry] = useState('');
 

  const selectCountry=(index,country )=>{

    setSelectedTab(country);
  
    setIsOpenModal(false);
    setselectedCityLocation(country);
    setCitiesList(cities);
  }
const showCountryListName=(text ,maxLength)=>{
return text.length>maxLength? text.slice(0,maxLength)+'...': text;
}

const showCountryTitleName=()=>{

 return showCountryListName(selectedCityLocation ,15)

}


  useEffect(()=>{
    if(cities===null || cities===''){
      return;
    }

    setCitiesList(cities);

  },[cities])

  const filterList=(e)=>{
    if(e.target.value===''&&cities!==null){
setCitiesList(cities);
return
    }
    const searchText = e.target.value.toLowerCase();
     if (searchText !== '' && cities!== null){
        const list= cities.filter((item)=>{
          return item.toLowerCase().includes(searchText);
        })
        setCitiesList(list);
     }else{
        setCitiesList(cities);
     }
  
    
  }
    return(
        <>
<Button className='countryDropdown' onClick={showDrop}> 
    
<div className='info d-flex flex-column '>
<span className='lable'>your Location  </span>
<span className='name'>
{showCountryTitleName()}
</span>
</div>
<span className='ml-auto'><FaAngleDown /></span>
</Button>,


    <Dialog open={isOpenModal} className='locationModal'>
     <h3 className='mb-0'>Choose your Delivery Location</h3>
     <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={closeDrop}><MdOutlineClose /></Button>

     <div className="header-search d-flex align-items-center h-50 p-1 m-0 w-100">
      <input type="text" onChange={filterList} placeholder="Search Your Area..." />
        <Button className='search-btn' >
        <CiSearch className="search-icon"/>
        </Button> 
        </div>

      <ul className='CountryList mt-3'>
        {
            CitiesList?.length!==0 && CitiesList?.map((item,index)=>{
              
              return(
                <li key={index}  >
                   <Button className={`${selectedTab === item? '_active' : ''}`} onClick={()=>selectCountry(index  , item)}>{item } </Button>
                    
                </li>
            )})
        }


      
      </ul>
    </Dialog>
        </>
    )
}

export default CountryDropdown;