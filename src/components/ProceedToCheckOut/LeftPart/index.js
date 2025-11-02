
import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useContext } from "react";
import { MyContext } from '../../../App';

const LeftPart=()=>{
       const Context = useContext(MyContext);
const cities=Context.values.CitiesList;
const setOrderFormData=Context.values.setOrderFormData;
const OrderFormData=Context.values.OrderFormData;
const province=[
    ' Punjab',
    ' Sindh',
    ' Khyber Pakhtunkhwa (KPK)',
    ' Balochistan',
    ' Azad Jammu and Kashmir (AJK)',
    ' Gilgit-Baltistan',
]

const ProvenceChange=(value)=>{
    console.log(value)
     setOrderFormData((prevState) => ({ ...prevState,
    Province:value
    }    ))
}
const CityChange=(value)=>{
    console.log(value)
     setOrderFormData((prevState) => ({ ...prevState,
    city:value
    }    ))
}
const inputChange=(e)=>{
setOrderFormData(()=>({...OrderFormData,
    [e.target.name]:e.target.value
}))
}
    return(
        <>
        <div className="ProceedToCheckOutLeftPart p-3">
            <div className="NameInputWapper ">
                <div>
<TextField id="outlined-basic" 
onChange={(e)=>{inputChange(e)}}
name="email"
label="Email" fullWidth variant="outlined" />
                </div>
                <div>

<TextField id="outlined-basic" 
onChange={(e)=>{inputChange(e)}}
name="contact"
label="Phone Number" fullWidth variant="outlined" />
                </div>
           
            </div>
 <TextField id="Full Name" 
onChange={(e)=>{inputChange(e)}}
 name="name"
 label="Full Name" fullWidth variant="outlined" />
 <Autocomplete
 name='Province'
        // id="free-solo-demo"

        freeSolo
        options={province?.map((option) => option)}
        onChange={(event, value) => {ProvenceChange(value)}}
        renderInput={(params) => <TextField  {...params} label="Add Your Province" />}
      />
 <Autocomplete

        // id="free-solo-demo"
        name='city'
        freeSolo
        options={cities!==null&&cities.map((option) => option)}
        onChange={(event, value) => {CityChange(value)}}
        renderInput={(params) => <TextField  {...params} label="Add Your City" />}
      />


 <TextField id="Full Name"
onChange={(e)=>{inputChange(e)}}
  name="address" label="Add Your Address" fullWidth variant="outlined" />
        </div>
        </>
    )
}
export default LeftPart;