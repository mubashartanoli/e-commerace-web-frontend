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

    const [isOpenModal, setIsOpenModal] = useState(false);
    const showDrop=()=>{
        setIsOpenModal(true);
    }
    const closeDrop=()=>{
        setIsOpenModal(false);
    }
  
  const [selectedTab, setSelectedTab] = useState(null);
  const [CountryList , setCountryList] = useState([]);
  const [selectedCountry ,setselectedCountry] = useState('');
 
//  const countries=Context.values.CountryList
  const selectCountry=(index,country )=>{
    setSelectedTab(country);
    // alert(selectedTab)
    setIsOpenModal(false);
    setselectedCountry(country);
    setCountryList(Context.values.CountryList);
  }
const showCountryListName=(text ,maxLength)=>{
return text.length>maxLength? text.slice(0,maxLength)+'...': text;
}
// const ShowCountryListVar=showCountryListName
const showCountryTitleName=()=>{
if (selectedCountry !== ''){
 return showCountryListName(selectedCountry ,12)
}else{
 return 'Select Location'
}
}
//  console.log(showCountryTitleName())

  useEffect(()=>{
    setCountryList(Context.values.CountryList);

  },[Context.values.CountryList])

  const filterList=(e)=>{
    const searchText = e.target.value.toLowerCase();
     if (searchText !== ''){
        const list= CountryList.filter((item)=>{
          return item.country.toLowerCase().includes(searchText);
        })
        setCountryList(list);
     }else{
        setCountryList(Context.values.CountryList);
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
            CountryList?.length!==0 && CountryList?.map((item,index)=>(
                <li key={index}  >
                   <Button className={`${selectedTab === item.country ? '_active' : ''}`} onClick={()=>selectCountry(index  , item.country)}>{item.country } </Button>
                    
                </li>
            ))
        }


      
      </ul>
    </Dialog>
        </>
    )
}

export default CountryDropdown;