import * as React from 'react';
import Button from '@mui/material/Button';

import Searchheader from '../Searchheader';
import {useContext } from 'react';
import {MyContext} from '../../../App'
import { MdOutlineClose } from "react-icons/md";



export default function SearchDailogue() {
      const Context= useContext(MyContext);
  
        //  const open= Context.values.searchProductInPhone
      
            const setOpen= Context.values.setsearchProductInPhone;




  return (



<div className='searchProductInPhone'>
  <div style={{width:'85%'}}>
<Searchheader/>
</div>
<div className='ClosesearchProductInPhone'>
<Button className='_Close_Btn'
onClick={()=>{setOpen(false)}}
><MdOutlineClose/></Button>
</div>
</div>

    
   
  );
}